import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModuleAuthService } from '../../service/module-auth.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  regForm!: FormGroup;

  constructor(private fb: FormBuilder,private moduleAuthService:ModuleAuthService,private router:Router) { }
  
  ngOnInit(): void {
    this.regForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      role:['',Validators.required]
    },
    {
      validators:this.passwordMatchValidator
    });
  }

  passwordMatchValidator(group:FormGroup) : { [key:string] :boolean } | null{
    const password=group.get('password')?.value;
    const confirmPassword=group.get('confirmPassword')?.value;

    return password && confirmPassword && password!==confirmPassword ? { mismatch: true } : null;
  }

  onSubmit() {
    if(this.regForm.valid){
      const {username,password,role}= this.regForm.value;
      this.moduleAuthService.register(username,password,role).subscribe({
        next:()=>{
          this.router.navigate(['/login']);
        }, error:(error)=>{
          console.error('Registration failed',error);
        }
      });
    }
  }
}
