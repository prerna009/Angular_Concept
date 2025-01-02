import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private number:number=324312;
  numbers:number[]=[];
  isVisible:boolean=true;

  setVisibility(){
    this.isVisible=!this.isVisible;
  }

  get counter(){
    return this.number;
  }

  set counter(value:number){
    this.number=value;
  }

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }

  add(){
    this.numbers = [...this.numbers,1];
  }
}
