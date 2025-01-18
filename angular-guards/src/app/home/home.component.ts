import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  listForm!:FormGroup;
  constructor(private authService:AuthService,private fb:FormBuilder){
  }

  ngOnInit(): void {
    this.listForm=this.fb.group({
      name:[''],
    });
  }

  onLogout(){
    this.authService.logout();
  }

  onSubmit(){
    debugger
    if(this.listForm.valid){
      this.authService.addList(this.listForm.value).subscribe(res=>res);
      console.log(this.listForm.value);
    }
  }
}
