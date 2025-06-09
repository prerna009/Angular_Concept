import { Component, model } from '@angular/core';

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrl: './date-time-picker.component.css',
   standalone: false
})
export class DateTimePickerComponent {
  selected = model<Date | null>(null);
}
