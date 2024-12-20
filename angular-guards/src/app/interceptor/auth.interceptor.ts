import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class authInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Interceptor called:',req);
    const modifiedReq=req.clone({
      setHeaders:{
        Auth:'abcxyz',
      }
    });
    console.log('Interceptor Request:',modifiedReq);
    return next.handle(modifiedReq);
  }

} 
