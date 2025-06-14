import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-increment-decrement',
  standalone: true,
  imports: [],
  templateUrl: './increment-decrement.component.html',
  styleUrl: './increment-decrement.component.css',
})
export class IncrementDecrementComponent implements OnInit, OnDestroy {
  num = signal(0);
  el = viewChild<ElementRef<HTMLParagraphElement>>('el');

  ngOnInit(): void {
    this.el()?.nativeElement.addEventListener('animationend', (ev) => {
      if (
        ev.animationName.endsWith('decrement') ||
        ev.animationName.endsWith('increment')
      ) {
        this.animationFinished();
      }
    });
  }

  modify(n: number) {
    const targetClass = n > 0 ? 'increment' : 'decrement';
    this.num.update((v) => (v += n));
    this.el()?.nativeElement.classList.add(targetClass);
  }

  animationFinished() {
    this.el()?.nativeElement.classList.remove('increment', 'decrement');
  }

  ngOnDestroy() {
    this.el()?.nativeElement.removeEventListener(
      'animationend',
      this.animationFinished
    );
  }
}
