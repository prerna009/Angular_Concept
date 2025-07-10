import { Component } from '@angular/core';
import { FruitsComponent } from './component/fruits/fruits.component';
import { SkillsComponent } from './component/skills/skills.component';
import { HobbiesComponent } from './component/hobbies/hobbies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FruitsComponent, SkillsComponent, HobbiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dynamic-form';
}
