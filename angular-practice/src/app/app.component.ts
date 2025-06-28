import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-practice';
  parentValue = 'Initial Value';

  //example-2
  private number:number = 2352636626352;
  secondValue: number = 233211;
  numbers: number[] = [];
  isVisible: boolean = true;

  setVisibility() {
    this.isVisible = !this.isVisible;
  }

   get counter() {
    return this.number;
  }

  set counter(value: number) {
    this.number = value;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  add() {
    this.numbers = [...this.numbers, 1];
  }
}
