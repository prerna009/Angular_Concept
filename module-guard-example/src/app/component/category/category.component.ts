import { Component } from '@angular/core';
import { ModuleAuthService } from '../../service/module-auth.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  constructor(private authService:ModuleAuthService){}

  onLogout(){
    this.authService.logout();
  }
}
