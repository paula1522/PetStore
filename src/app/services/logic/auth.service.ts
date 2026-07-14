import { inject, Injectable } from "@angular/core";
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private cookieService = inject(CookieService);

  guardarSesion(user: any): void {
    this.cookieService.set(
      'sesion',
      JSON.stringify(user),
      {
        expires: 1,         // Expira en 1 día
        path: '/',          // Accesible en toda la app
        secure: false,       // Solo HTTPS
        sameSite: 'Lax'
      }
    );
  }

  obtenerSesion(): any {
    const sesion = this.cookieService.get('sesion');

    return sesion ? JSON.parse(sesion) : null;

  }

  estaAutenticado(): boolean {
    return this.cookieService.check('sesion');

  }

  // Guarda los permisos en la cookie
  guardarPermisos(permisos: any[]): void {
    this.cookieService.set(
      'permisos',
      JSON.stringify(permisos),
      {
        expires: 1,
        path: '/',
        secure: false,
        sameSite: 'Lax'
      }
    );
  }

  // Lee los permisos de la cookie
  obtenerPermisos(): any[] {
    const permisos = this.cookieService.get('permisos');
    return permisos ? JSON.parse(permisos) : [];
  }

  // Verifica si el usuario tiene un permiso
  tienePermiso(id: number): boolean {
    const permisos = this.obtenerPermisos();

    return permisos.some(p => p.id === id);
  }



  cerrarSesion(): void {
    this.cookieService.delete('sesion', '/');
    this.cookieService.delete('permisos', '/');

  }

}