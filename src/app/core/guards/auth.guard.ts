import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const router = inject(Router);

  // Verificamos si existe la cookie de autenticación
  const username = cookieService.get('token_sesion'); 

  if (username) {
    // El usuario está autenticado, permite el acceso
    return true;
  } else {
    // Redirige al login si la cookie no existe o es inválida
    router.navigate(['/login']);
    return false;
  }
};
