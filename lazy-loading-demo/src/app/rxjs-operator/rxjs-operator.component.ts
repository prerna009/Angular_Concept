import { Component } from '@angular/core';
import { of } from 'rxjs';

export interface User{
  username:string;
  email:string;
  phone:number;
  gender:string;
}

const userData:User[]=[
  {username:'Prerna',email:'prerna@gmail.com',phone:7556765567,gender:'female'},
  {username:'Aisha',email:'aisha23@gmail.com',phone:6766478667,gender:'female'},
  {username:'Sumeet',email:'sumeetgupta12@gmail.com',phone:8756643566,gender:'male'},
  {username:'Abhishek',email:'abhi67@gmail.com',phone:6756678667,gender:'male'},
  {username:'Yash',email:'yash@gmail.com',phone:6764346766,gender:'male'},
  {username:'Manvi',email:'manvig67@gmail.com',phone:9778767667,gender:'female'},
  {username:'Ayush',email:'ayush56@gmail.com',phone:9677764547,gender:'male'},
  {username:'Sandhaya',email:'sandy90@gmail.com',phone:9123408766,gender:'female'},
  {username:'Jyoti',email:'guptajyoti67@gmail.com',phone:7134560881,gender:'female'},
  {username:'Priyanka',email:'pihu23@gmail.com',phone:8443233767,gender:'female'},
  {username:'Samar',email:'samar12@gmail.com',phone:7655576760,gender:'male'},
  {username:'Ganesh',email:'ganesh@gmail.com',phone:8325678045,gender:'male'},
  {username:'Gauri',email:'gauri@gmail.com',phone:9767712567,gender:'female'},
  {username:'Nikki',email:'nikki789@gmail.com',phone:7545406678,gender:'female'},
  {username:'Muskan',email:'muskan112@gmail.com',phone:9533434055,gender:'female'},
  {username:'Ram',email:'ram567@gmail.com',phone:7688567787,gender:'male'},
]

@Component({
  selector: 'app-rxjs-operator',
  templateUrl: './rxjs-operator.component.html',
  styleUrl: './rxjs-operator.component.css'
})

export class RxjsOperatorComponent {
  //users: any;
  users:string[]=['username','email','phone','gender'];

  filterByName(){
    const filterValue=this.users.filter((user: any)=>user.username.toLowerCase().includes());
    return of(filterValue);
  }
}
