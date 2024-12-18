import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, Observable, of, switchMap } from 'rxjs';

export interface User{
  username:string;
  email:string;
  phone:number;
  gender:string;
}

const userData:User[]=[
  {username:'Prerna Gupta',email:'prer@gmail.com',phone:768566677,gender:'female'},
  {username:'Aisha Khan',email:'aisha@gmail.com',phone:897677788,gender:'female'},
  {username:'Abhishek Jaiswal',email:'abhi@gmail.com',phone:987767788,gender:'male'},
  {username:'Yash',email:'yash34@gmail.com',phone:876765656,gender:'male'},
  {username:'Nikki',email:'nikki67@gmail.com',phone:94566445,gender:'female'}
];

@Component({
  selector: 'app-perform-operator',
  templateUrl: './perform-operator.component.html',
  styleUrl: './perform-operator.component.css'
})
export class PerformOperatorComponent implements OnInit{

  users:User[]=userData;

  searchControl=new FormControl();
  filteredUsers$:Observable<User[]>=of(this.users);
  
  constructor(){}

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      switchMap(query=>this.filterUser(query)),
    ).subscribe((value:any)=>{
      this.filteredUsers$=of(value);
    });
  }

  filterUser(query:string):Observable<User[]>{
    if(!query){
      return of(this.users);
    }
    const filterValue=this.users.filter(user=>
      user.username.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase())
    );

    return of(filterValue);
  }
}
