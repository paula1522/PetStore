import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/logic/auth.service';
import { ButtonComponent } from "../atomicDesign/atoms/button/button.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  nombre = '';
  menuAbierto = false;

  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    const sesion = this.authService.obtenerSesion();

    if (sesion) {
      this.nombre = sesion.username;
    }
  }

  

  cerrarSesion(): void {

    // Cierra el menú si estaba abierto
    this.menuAbierto = false;

    this.authService.cerrarSesion();

    this.router.navigate(['/login']);

  }

}