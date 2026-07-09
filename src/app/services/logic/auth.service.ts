import { inject, Injectable } from "@angular/core";
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root' 
  })
export class AuthService{
  private cookieService = inject(CookieService);

  guardarSesion(user:any):void{
    this.cookieService.set(
            'sesion', 
            JSON.stringify(user), 
            {
              expires: 1,         // Expira en 1 día
              path: '/',          // Accesible en toda la app
              secure: false,       // Solo HTTPS
              sameSite: 'Strict'  // Protección CSRF
            }
          );
  }

  obtenerSesion():any{
    const sesion = this.cookieService.get('sesion');

    return sesion? JSON.parse(sesion): null;

  }

  estaAutenticado(): boolean {
    return this.cookieService.check('sesion');

  }
}