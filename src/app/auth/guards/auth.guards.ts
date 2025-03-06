import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const publicGuard: CanActivateFn = () => {
  console.log('publicGuard');
  return true; // Permitir acceso

};

export const privateGuard: CanActivateFn = () => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true; // Permitir acceso si está autenticado
  } else {
    router.navigate(['/auth/log-in']); // Redirigir si no está autenticado
    return false;
  }
};
