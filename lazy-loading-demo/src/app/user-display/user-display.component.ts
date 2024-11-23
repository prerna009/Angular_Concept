import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { error } from 'console';
import { User } from '../class/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrl: './user-display.component.css'
})
export class UserDisplayComponent implements OnInit{
  users:User[]=[];

  constructor(private router:Router,private userService:UserServiceService){}

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next:(data)=>{
        this.users=data;
      },
      error:(error)=>{
        console.log('Fetching data error : ',error);
      }
    });
  }

  editUser(user:User):void{
    this.router.navigate(['/edit',user.id])
  }

  deleteUser(user:User):void{
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(user.id).subscribe({
        next: () => {
          alert('User deleted successfully!');
          this.users = this.users.filter(u => u.id !== user.id);
        },
        error: (error) => {
          console.log('Error deleting user:', error);
        },
      });
    }
  }
}
