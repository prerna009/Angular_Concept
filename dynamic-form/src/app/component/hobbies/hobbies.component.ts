import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatChipEditedEvent,
  MatChipInputEvent,
  MatChipsModule,
} from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

export interface Hobby {
  type: string;
}

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatChipsModule,
  ],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css',
})
export class HobbiesComponent {
  readonly separatorKeyCodes: number[] = [ENTER, COMMA];
  readonly hobbies = signal<Hobby[]>([
    { type: 'Dancing' },
    { type: 'Reading' },
  ]);

  addHobbies(event: MatChipInputEvent): void {
    const value = event?.value.trim();
    if (value) {
      this.hobbies.update((hobby) => [...hobby, { type: value }]);
    }
    event.chipInput!.clear();
  }

  editHobbies(hobby: Hobby, event: MatChipEditedEvent): void {
    const value = event?.value.trim();
    if (!value) {
      this.removeHobbies(hobby);
      return;
    }

    this.hobbies.update((hobbies) => {
      const index = hobbies.indexOf(hobby);

      if (index >= 0) {
        hobbies[index].type = value;
        return [...hobbies];
      }

      return hobbies;
    });
  }

  removeHobbies(hobby: Hobby): void {
    this.hobbies.update((hobbies) => {
      const index = hobbies.indexOf(hobby);

      if (index < 0) {
        return hobbies;
      }

      hobbies.splice(index, 1);
      return hobbies;
    });
  }
}
