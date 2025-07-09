import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TextColorDirective } from './directives/text-color.directive';
import { AppHighlightDirective } from './directives/app-highlight.directive';
import { BoldDirective } from './directives/bold.directive';
import { UnderlineDirective } from './directives/underline.directive';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputSanitizerDirective } from './directives/input-sanitizer.directive';

@Component({
  selector: 'app-custom-directives',
  standalone: true,
  imports: [CommonModule, TextColorDirective, AppHighlightDirective, FormsModule, ReactiveFormsModule, InputSanitizerDirective],
  templateUrl: './custom-directives.component.html',
  styleUrl: './custom-directives.component.css',
  //using hostdirectives it apply style in all the elements of component.
  hostDirectives: [
    {
      directive: BoldDirective,
    },
    {
      directive: UnderlineDirective,
      inputs: ['hoverUnderline:underlineClass'],
      outputs: ['emitUnderlineEvent:emitEvent'], //add alias to use binding purpose
    },
  ],
})
export class CustomDirectivesComponent implements OnInit {
  userForm!: FormGroup;
  reactiveValue: string = '';

  user = {
    name: '',
    age: '',
  };
  templateValue: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      fullName: [''],
      age: [''],
    });
  }

  onSubmitReactiveForm(): void {
    const value = this.userForm.value;
    this.reactiveValue = value.fullName + ' ' + value.age;
  }

  onSubmitTemplateForm(form: any) {
    const value = form.value;
    this.templateValue = value.name + ' ' + value.age;
  }
}
