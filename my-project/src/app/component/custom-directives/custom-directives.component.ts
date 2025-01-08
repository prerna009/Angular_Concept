import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TextColorDirective } from './text-color.directive';
import { AppHighlightDirective } from './app-highlight.directive';

@Component({
  selector: 'app-custom-directives',
  standalone: true,
  imports: [CommonModule,TextColorDirective,AppHighlightDirective],
  templateUrl: './custom-directives.component.html',
  styleUrl: './custom-directives.component.css'
})
export class CustomDirectivesComponent {

}
