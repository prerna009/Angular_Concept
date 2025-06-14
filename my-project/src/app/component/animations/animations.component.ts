import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animations',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '200px',
          opacity: 0.8,
          backgroundColor: 'purple',
        })
      ),
      state(
        'closed',
        style({
          height: '100px',
          opacity: 0.7,
          backgroundColor: 'deeppink',
        })
      ),
     transition('open <=> closed', [animate('0.5s')]),
    ]),
    trigger('slideStatus', [
      state('inactive', style({backgroundColor: 'blue'})),
      state('active', style({backgroundColor: '#754600'})),
      transition('* => active', [
        animate(
          '2s',
          keyframes([
            style({backgroundColor: 'blue', offset: 0}),
            style({backgroundColor: 'red', offset: 0.8}),
            style({backgroundColor: '#754600', offset: 1.0}),
          ]),
        ),
      ]),
      transition('* => inactive', [
        animate(
          '2s',
          keyframes([
            style({backgroundColor: '#754600', offset: 0}),
            style({backgroundColor: 'red', offset: 0.2}),
            style({backgroundColor: 'blue', offset: 1.0}),
          ]),
        ),
      ]),
    ]),
  ],
  templateUrl: './animations.component.html',
  styleUrl: './animations.component.css',
})
export class AnimationsComponent {
  isOpen = true;
  status: 'active' | 'inactive' = 'inactive';
  
  toggle() {
    this.isOpen = !this.isOpen;
  }

  activeToggle() {
    this.status = this.status === 'active' ? 'inactive' : 'active';
  }
}
