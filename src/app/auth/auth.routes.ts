import { Routes } from '@angular/router';
import { publicGuard } from './guards/auth.guards';

export default [
  {
    path: 'log-in',
    canActivate:[publicGuard],
    loadComponent: () =>
      import('./components/log-in/log-in.component').then((m) => m.LogInComponent),
  },
  {
    path: 'sign-up',
    loadComponent: () =>
      import('./components/sign-up/sign-up.component').then((m) => m.SignUpComponent),
  },
] as Routes;
