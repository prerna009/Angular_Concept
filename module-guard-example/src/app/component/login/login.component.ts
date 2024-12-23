import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModuleAuthService } from '../../service/module-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private moduleAuthService: ModuleAuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.moduleAuthService.login(username, password).subscribe({
        next: (isAuthenticated) => {
          if (isAuthenticated && this.moduleAuthService.isAdmin()) {
            this.router.navigate(['/category']);
          }
          else if (isAuthenticated && this.moduleAuthService.isSupervisor()) {
            this.router.navigate(['/product']);
          }
          else {
            alert('Invalid Credentials!');
          }
        }
      });
    }
  }

}
