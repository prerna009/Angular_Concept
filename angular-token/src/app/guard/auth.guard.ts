import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate():boolean{
    if (this.authService.isAuthenticated()) {
      return true;  // Allow access if authenticated
    } else {
      this.router.navigate(['/login']);  // Redirect to login if not authenticated
      return false;
    }
  }

}