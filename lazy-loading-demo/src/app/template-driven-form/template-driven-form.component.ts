import { Component } from '@angular/core';
import { User } from '../class/user';
import { UserServiceService } from '../service/user-service.service';
import { error } from 'console';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
  userModel:User = new User(
    '',
    '',
    0,
    {
      street:'',
      city:'',
      state:'',
      postalCode:0
    },
    '',
    '',
    false
  );

  hobbies=['Reading','Dancing','Singing','Swimming','Tracking'];

  constructor(private userService:UserServiceService){};

  onSubmit(){
    this.userService.save(this.userModel).subscribe({
      next:(data)=>{
        console.log('Success!',data);
      },
      error:(error)=>{
        console.log('Error to save the data : ',error);
      }
    });
  }
}
