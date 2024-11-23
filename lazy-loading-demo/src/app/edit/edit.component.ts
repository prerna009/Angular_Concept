import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../service/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  editForm:FormGroup;
  userId!: number;

  constructor(private userService:UserServiceService,private fb:FormBuilder,
    private router:Router,private route:ActivatedRoute){
      this.editForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phoneNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
      });
    }

  ngOnInit(): void {
    //this.userId = +this.route.snapshot.paramMap.get('id')!;
    this.userService.getUser().subscribe({
      next: (user:any) => {
        this.editForm.patchValue({
          name: user.name,
          email: user.email,
          phoneNo: user.phoneNo
        });
      },
      error: (error) => {
        console.log('Error fetching user:', error);
      }
    });
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      const updatedUser = { id: this.userId, ...this.editForm.value };

      this.userService.updateUser(updatedUser).subscribe({
        next: (response) => {
          console.log('User updated successfully:', response);
          this.router.navigate(['/user']); 
        },
        error: (error) => {
          console.error('Error updating user:', error);
        }
      });
    }
  }
}
