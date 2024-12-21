import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../service/auth.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();
  const username = authService.getUsername();
    req = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`,
        'X-USER': username || 'DefaultUser',
      }
    });
  return next(req);
}
