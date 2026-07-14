import { routes } from './../../app.routes';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/logic/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
nombre='';

  private authService = inject(AuthService);
  private router = inject(Router);
  ngOnInit(): void {
    const sesion = this.authService.obtenerSesion();

    if (sesion){
      this.nombre = sesion.username;
    }
  }


cerrarSesion(): void {

    this.authService.cerrarSesion();

    this.router.navigate(['/login']);

  }

}
