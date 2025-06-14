import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-transition-trigger',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './transition-trigger.component.html',
  styleUrl: './transition-trigger.component.css',
})
export class TransitionTriggerComponent {
  isOpen = signal(true);

  toggle() {
    this.isOpen.update((isOpen) => !isOpen);
  }
}
