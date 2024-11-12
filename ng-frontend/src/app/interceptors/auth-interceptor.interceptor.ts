import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SessionService } from '../services/session-service.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const sessionService = inject(SessionService);

  const token = sessionService.getItem('token')

  if(token) {
    const authReq = req.clone({
      headers : req.headers.set('Authorization' , `Bearer ${token}`)
    })
    return next(authReq);
  }

  return next(req);
};
