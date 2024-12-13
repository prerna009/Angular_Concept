import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface User{
  no:number;
  name:string;
  age:number;
  gender:string;
}

const data:User[]=[
  {no:1,name:'Prerna',age:22,gender:'Female'},
  {no:2,name:'Sumeet',age:20,gender:'Male'},
  {no:3,name:'sandhaya',age:24,gender:'Female'},
  {no:4,name:'Anil',age:50,gender:'Male'},
  {no:5,name:'Rani',age:48,gender:'Female'},
  {no:6,name:'Jyoti',age:26,gender:'Female'},
  {no:7,name:'Priyanka',age:28,gender:'Female'},
  {no:8,name:'Niraj',age:31,gender:'Male'},
  {no:9,name:'Sandeep',age:28,gender:'Male'},
  {no:10,name:'Aisha',age:35,gender:'Female'},
  {no:11,name:'Arun',age:40,gender:'Male'},
  {no:12,name:'Ajit',age:43,gender:'Male'},
  {no:13,name:'Priya',age:42,gender:'Female'},
  {no:14,name:'Kiran',age:23,gender:'Female'},
  {no:15,name:'Yash',age:23,gender:'Male'},
]

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent implements AfterViewInit{
  users: string[] = ['no', 'name', 'age', 'gender'];
  dataSource = new MatTableDataSource(data);
  
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  
  ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator;
  }

  applyFilter(event:Event):void {
    const filterValue=(event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter=filterValue;
  }
  
}
