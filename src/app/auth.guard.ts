import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { take } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return new Promise((resolve, reject) => {
    auth.isAuthenticated()
    // Using take(1) to complete the subscription after receiving the first value
      .pipe(take(1))
      .subscribe(isAuthenticated => {
        if (isAuthenticated) {
          resolve(true);
        } else {
          router.navigate(['/signin']);
          resolve(false);
        }
      });
  });
};
