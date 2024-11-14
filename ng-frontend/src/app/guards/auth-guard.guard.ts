import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../services/session-service.service';
import* as jwt from 'jwt-decode'

export const AuthGuard: CanActivateFn = (route, state) => {
  
  const sessionService = inject(SessionService);
  const router = inject(Router);



  const token = sessionService.getItem('token')

  if(token === ''){
    router.navigate(['/login'])
    return false;
  }
  else {
    if(token && isTokenValid(token)){
      return true;
    }
    else{
      router.navigate(['/login'])
      return false
    }
  }




};

function isTokenValid(token:string) {
  try {
    
    const decoded: any = jwt.jwtDecode(token);
    const expiryDate = new Date(0);
    expiryDate.setUTCSeconds(decoded.exp)
    return expiryDate > new Date();

  } catch (error) {
    console.error('Error decoding token', error);
    return false;

  }
}