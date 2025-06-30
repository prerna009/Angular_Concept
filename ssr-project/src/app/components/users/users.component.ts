import { Component, OnInit } from '@angular/core';
import { ApiHandlerService } from '../../services/api-handler.service';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  userData: any;
  
    constructor(private apiServices: ApiHandlerService){}
  
    ngOnInit(): void {
      this.apiServices.fetchUserData().subscribe(data => {
        this.userData = data;
      });
    }
}
