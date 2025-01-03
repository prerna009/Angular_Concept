import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
  a:number=2;
  b:number=8;
  c:number=12;

  items=[
    {id:1,name:'prerna'},
    {id:2,name:'aisha'},
    {id:3,name:'sumeet'},
  ];

  grade:string='G';
}
