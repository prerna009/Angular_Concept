import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-demo',
  templateUrl: './child-demo.component.html',
  styleUrl: './child-demo.component.css'
})
export class ChildDemoComponent {
  message="Hello Angular!!";
  @Input({
    required:true,
    transform:(value:string)=>{
      return `${value}`;
    }
  }) childMessage!: string;

  @Output() messageToParent=new EventEmitter<string>();

  sendToParent(){
    this.messageToParent.emit("hello from child!");
  }
}
