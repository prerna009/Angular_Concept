import { HttpEvent, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Interceptor called:', req);
  const modifiedReq = req.clone({
    setHeaders: {
      Auth: 'abcxyz',
    }
  });
  console.log('Interceptor Request:', modifiedReq);
  return next(modifiedReq).pipe(
    tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse && event.status === 200) {
        console.log('Object created.');
      }
    })
  );
}

