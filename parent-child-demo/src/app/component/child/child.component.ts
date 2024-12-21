import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  message="Hello Angular!!";
  @Input()
  childMessage!: string;

  @Output() messageToParent=new EventEmitter<string>();

  sendToParent(){
    this.messageToParent.emit("hello from child!");
  }
}
