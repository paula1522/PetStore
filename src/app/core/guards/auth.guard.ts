import { AuthService } from './../../services/logic/auth.service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService =inject(AuthService);


  if (authService.estaAutenticado()) {
    // El usuario está autenticado, permite el acceso
    return true;
  } else {
    // Redirige al login si la cookie no existe o es inválida
    router.navigate(['/login']);
    return false;
  }
};
