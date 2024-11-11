import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TextColorDirective } from './text-color.directive';

@Component({
  selector: 'app-custom-directives',
  standalone: true,
  imports: [CommonModule,TextColorDirective],
  templateUrl: './custom-directives.component.html',
  styleUrl: './custom-directives.component.css'
})
export class CustomDirectivesComponent {

}
