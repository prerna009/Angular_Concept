import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StructuralExampleComponent } from './component/structural-example/structural-example.component';
import { AttributeDirectivesComponent } from './component/attribute-directives/attribute-directives.component';
import { CustomDirectivesComponent } from './component/custom-directives/custom-directives.component';
import { PipesComponent } from './component/pipes/pipes.component';
import { EmpInfoComponent } from './component/emp-info/emp-info.component';
import { BindingExampleComponent } from './component/binding-example/binding-example.component';
import { FormsModule } from "@angular/forms";
import { MessagesService } from './service/messages.service';
import { ChildComponent } from './component/child/child.component';
import { ControlFlowComponent } from './component/control-flow/control-flow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,StructuralExampleComponent,AttributeDirectivesComponent,CustomDirectivesComponent,PipesComponent,EmpInfoComponent,BindingExampleComponent,FormsModule,ChildComponent,ControlFlowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';
  num:number=56.88;

  counter:number=0;
  incrementCounter(){
    this.counter++;
  }

  messages:string[]=[];
  constructor(private messageService:MessagesService){
    this.messages=messageService.getMessages();
  }

  tasks:string[]=['Task 1','Task 2','Task 3'];

  deleteTask(task:string){
    this.tasks=this.tasks.filter((t)=>t!==task);
  }

  underlineEvent(){
    
  }
}
