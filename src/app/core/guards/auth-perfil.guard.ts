import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/logic/auth.service';

export const authPerfilGuard: CanActivateFn = (route, state) => {

  // 1. Inyección de dependencias.
  // Inyecta los servicios necesarios para validar permisos y realizar redirecciones.
  const authService = inject(AuthService);
  const router = inject(Router);

  // 2. Obtención del permiso requerido.
  // Recupera el permiso configurado en la ruta actual.
  const permiso = route.data['permiso'];

  // 3. Validación del permiso.
  // Permite el acceso si el usuario cuenta con el permiso requerido.
  if (authService.tienePermiso(permiso)) {
    console.log(`Tiene el permiso ${permiso}`);
    return true;
  }

  // 4. Redirección por acceso denegado.
  // Envía al usuario a la página de inicio si no tiene permisos.
  console.log(`No tiene el permiso ${permiso}`);
  return router.createUrlTree(['/home']);
};