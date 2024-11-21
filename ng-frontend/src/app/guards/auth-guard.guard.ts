import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../services/session-service.service';
import* as jwt from 'jwt-decode'
import { AuthService } from '../services/auth-service.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  
  const sessionService = inject(SessionService);
  const authService = inject(AuthService)
  const router = inject(Router);



  const token = sessionService.getItem('token')

  if(token === ''){
    router.navigate(['/login'])
    return false;
  }
  else {
    if(token && authService.isTokenValid(token)){
      return true;
    }
    else{
      router.navigate(['/login'])
      return false
    }
  }


};