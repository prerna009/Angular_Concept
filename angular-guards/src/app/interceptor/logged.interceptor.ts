import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class loggedInterceptor implements HttpInterceptor {
  authService=inject(AuthService);
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    const username = this.authService.getUsername() || 'DefaultUser';
    const modifiedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'X-User': username,
      }
    })
    return next.handle(modifiedReq);
  }

} 
