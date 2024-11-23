import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../service/user-service.service';
import { response } from 'express';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  regForm: FormGroup;
  
  constructor(private fb:FormBuilder,private userService:UserServiceService,private router:Router){
    this.regForm=this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phoneNo:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
      address:this.fb.group({
        street:['',Validators.required],
        city:['',Validators.required],
        state:['',Validators.required],
        postalCode:['',[Validators.required,Validators.pattern('^[0-9]{6}$')]]
      })
    });
  }

  onSubmit() {
    if (this.regForm.valid) {
      this.userService.register(this.regForm.value).subscribe({
        next:(response)=>{
          console.log('Success!',response);
          this.router.navigate(['/register']);
        },
        error:(error)=>{
          console.log('Error saving the register data : ',error);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
