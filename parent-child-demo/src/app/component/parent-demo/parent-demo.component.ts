import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildDemoComponent } from '../child-demo/child-demo.component';

@Component({
  selector: 'app-parent-demo',
  templateUrl: './parent-demo.component.html',
  styleUrl: './parent-demo.component.css'
})
export class ParentDemoComponent{

  @ViewChild(ChildDemoComponent) child: any;

  parentMessage="Hello from parent!";

  messageFromChild="";

  receiveFromChild(message:string){
    this.messageFromChild=message;
  }
}
