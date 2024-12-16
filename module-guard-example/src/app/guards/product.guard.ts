import { CanActivate, Router } from '@angular/router';
import { ModuleAuthService } from '../service/module-auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class productGuard implements CanActivate{
  constructor(private authService:ModuleAuthService,private router:Router){}

  canActivate():boolean{
    if(this.authService.isAuthenticated() && this.authService.isSupervisor()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
} 
