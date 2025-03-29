import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { firstValueFrom } from 'rxjs';

export const authGuard = async () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  const isLoggedIn = await firstValueFrom(authService.isLoggedIn$);

  if (isLoggedIn) {
    return true;
  }

  return router.parseUrl('/login');
}; 