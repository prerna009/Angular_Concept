import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  tasks=['Task 1','Task 2','Task 3'];

  onDeleteTask(task:string){
    this.tasks=this.tasks.filter((t)=>t!==task);
  }

  constructor(private userService:UserService){}

  ngOnInit(): void {
    this.userService.getLanguages().subscribe({
      next:(response)=>{
       console.log(response);
      },
      error:(error)=>{
        console.log(error);
      }
    });

    this.userService.getStudent().subscribe({
      next:(response)=>{
        console.log(response);
      },
      error:(error)=>{
        console.log(error);
      }
    });

    this.userService.getOrderBook().subscribe({
      next:(response)=>{
        console.log(response);
      },
      error:(error)=>{
        console.log(error);
      }
    });

    this.userService.getLatestPrices().subscribe({
      next:(response)=>{
        console.log(response.prices.ltc.bid);
      },
      error:(error)=>{
        console.log(error);
      }
    });
  }
}
