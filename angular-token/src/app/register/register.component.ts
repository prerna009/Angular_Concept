import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  regForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.regForm = this.fb.group(
      {
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required]
      },
      { validators: this.passwordMatchValidator } // Add the password match validator at the form group level
    );
  }

  // Custom validator to check if password and confirmPassword match
  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password && confirmPassword && password !== confirmPassword ? { mismatch: true } : null;
  }

  
  onRegister(): void {
    if (this.regForm.valid) {
      const { username, password } = this.regForm.value;
      this.authService.register(username, password).subscribe({

        next:() => {
          this.router.navigate(['/login']); 
        },
        error:(error) => {
          console.error('Registration failed', error); // Handle error if registration fails
        }
      });
    }
  }
}
