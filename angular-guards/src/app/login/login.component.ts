import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(private router: Router,private authService:AuthService,private fb:FormBuilder){}
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  onLogin(): void {
    const {username,password}=this.loginForm.value;
    this.authService.login(username,password).subscribe(isAuthenticated=>{
      if(isAuthenticated){
        this.router.navigate(['/home']);
        console.log('Data:',{username,password});
      }
      else{
        alert('Invalid Credentials!');
      }
    });
  }
}
