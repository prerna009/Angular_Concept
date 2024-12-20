import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-demo',
  templateUrl: './child-demo.component.html',
  styleUrl: './child-demo.component.css'
})
export class ChildDemoComponent {
  message="Hello Angular!!";
  @Input()
  childMessage!: string;

  @Output() messageToParent=new EventEmitter<string>();

  sendToParent(){
    this.messageToParent.emit("hello from child!");
  }
}
