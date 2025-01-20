import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TextColorDirective } from './directives/text-color.directive';
import { AppHighlightDirective } from './directives/app-highlight.directive';
import { BoldDirective } from './directives/bold.directive';
import { UnderlineDirective } from './directives/underline.directive';

@Component({
  selector: 'app-custom-directives',
  standalone: true,
  imports: [CommonModule,TextColorDirective,AppHighlightDirective],
  templateUrl: './custom-directives.component.html',
  styleUrl: './custom-directives.component.css',
  //using hostdirectives it apply style in all the elements of component.
  hostDirectives:[
    {
      directive:BoldDirective
    },
    {
      directive:UnderlineDirective,
      inputs:['hoverUnderline:underlineClass'],
      outputs:['emitUnderlineEvent:emitEvent'], //add alias to use binding purpose
    },
  ],
})
export class CustomDirectivesComponent {

}
