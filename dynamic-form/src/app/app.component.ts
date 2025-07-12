import { Component } from '@angular/core';
import { FruitsComponent } from './component/fruits/fruits.component';
import { SkillsComponent } from './component/skills/skills.component';
import { HobbiesComponent } from './component/hobbies/hobbies.component';
import { DynamicFieldListComponent } from './component/fields/dynamic-field-list/dynamic-field-list.component';
import { EmpDetailsListComponent } from './component/employee/emp-details-list/emp-details-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FruitsComponent, SkillsComponent, HobbiesComponent, DynamicFieldListComponent, EmpDetailsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dynamic-form';
}
