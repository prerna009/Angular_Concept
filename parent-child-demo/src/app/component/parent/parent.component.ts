import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements AfterViewInit{

  @ViewChild(ChildComponent) child: any;

  message!: string;
  
  ngAfterViewInit(){
    this.message=this.child.message;
  }
  parentMessage="Hello from parent!";

  messageFromChild="";

  receiveFromChild(message:string){
    this.messageFromChild=message;
  }
}
