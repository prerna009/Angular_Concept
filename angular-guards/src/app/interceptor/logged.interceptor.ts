import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../service/auth.service';

export const loggedInterceptor: HttpInterceptorFn = (req, next) => {
    const authService=inject(AuthService);
    const token = authService.getToken();
    const username = authService.getUsername();
    const modifiedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'X-User': `${username}`,
      }
    })
    return next(modifiedReq);
} 

