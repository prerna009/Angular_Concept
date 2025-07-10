import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ENTER, COMMA } from "@angular/cdk/keycodes";
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatChipsModule,
    MatButtonModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  skillForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.skillForm = this.fb.group({
      skills: this.fb.array([
        new FormControl('Angular'),
        new FormControl('Java')
      ])
    });
  }

  get skills(): FormArray {
    return this.skillForm.get('skills') as FormArray;
  }

  addSkill(event: MatChipInputEvent) {
    const value = event?.value?.trim();
    if(value) {
      this.skills.push(new FormControl(value));
    }
    event.chipInput!.clear();
  }

  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  editSkill(index: number, event: MatChipEditedEvent) {
    const value = event?.value?.trim();
    if (value) {
      this.skills.at(index).setValue(value);
    }
  }
}
