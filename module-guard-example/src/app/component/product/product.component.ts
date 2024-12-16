import { Component } from '@angular/core';
import { ModuleAuthService } from '../../service/module-auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(private authService:ModuleAuthService){}
  
    onLogout(){
      this.authService.logout();
    }
}
