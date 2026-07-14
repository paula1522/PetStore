import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/logic/auth.service';

export const authPerfilGuard: CanActivateFn = (route, state) => {
 const authService = inject(AuthService);
  const router = inject(Router);

  const permiso = route.data['permiso'];

  if (authService.tienePermiso(permiso)) {
    console.log(`Tiene el permiso ${permiso}`);
    return true;
  }

  console.log(`No tiene el permiso ${permiso}`);
  return router.createUrlTree(['/home']);

};
