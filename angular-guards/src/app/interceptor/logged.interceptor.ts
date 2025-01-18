import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../service/auth.service';

export const loggedInterceptor: HttpInterceptorFn = (req, next) => {
    const authService=inject(AuthService);
    const token = authService.getToken();
    const username = authService.getUsername();

    if(req.url === 'http://localhost:3000/users' && !req.params.has('login')){
      return next(req);
    }
    console.log(token);

    if(token){
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          'X-User': `${username}`,
        }
      })
    }
    return next(req);
    
} 

