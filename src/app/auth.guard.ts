import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  console.log('guarding')
  if(auth.isAuthenticated()){
    console.log('done')
    return true;
  }
  // redirect to sign in page
  return router.parseUrl('/signin')
};
