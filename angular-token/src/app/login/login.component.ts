import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
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
      }
      else{
        alert('Invalid Credentials!');
      }
    });
  }
}
