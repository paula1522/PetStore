import { AuthService } from './../../services/logic/auth.service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  // 1. Inyección de dependencias.
  // Inyecta los servicios necesarios para validar la autenticación y realizar redirecciones.
  const router = inject(Router);
  const authService = inject(AuthService);

  // 2. Validación de autenticación.
  // Permite el acceso si el usuario tiene una sesión válida.
  if (authService.estaAutenticado()) {
    return true;
  }

  // 3. Redirección por sesión no válida.
  // Envía al usuario al inicio de sesión si no está autenticado.
  router.navigate(['/login']);
  return false;
};