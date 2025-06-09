import { Component } from '@angular/core';

export interface Tile{
  color:string;
  cols:number;
  rows:number;
  text:string;
}

@Component({
    selector: 'app-grid-list',
    templateUrl: './grid-list.component.html',
    styleUrl: './grid-list.component.css',
    standalone: false
})


export class GridListComponent {
  tiles:Tile[]=[
    {text:'One',cols:3,rows:1,color:'pink'},
    {text:'Two',cols:1,rows:2,color:'lightgreen'},
    {text:'Three',cols:1,rows:1,color:'lightblue'},
    {text:'Four',cols:2,rows:1,color:'khaki'}
  ]
}
