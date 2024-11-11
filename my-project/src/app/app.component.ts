import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StructuralExampleComponent } from './component/structural-example/structural-example.component';
import { AttributeDirectivesComponent } from './component/attribute-directives/attribute-directives.component';
import { CustomDirectivesComponent } from './component/custom-directives/custom-directives.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,StructuralExampleComponent,AttributeDirectivesComponent,CustomDirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';
}
