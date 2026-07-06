import { CanActivateFn } from '@angular/router';

export const authPerfilGuard: CanActivateFn = (route, state) => {
  return false;
};
