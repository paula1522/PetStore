import { AuthService } from './../../../services/logic/auth.service';
import { UserService } from './../../../services/api/user.service';
import { UtilFunction } from './../../../utils/general-function/util-function';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { GetUserRequest, GetUserResponse } from '../../../core/models/GetUser.model';
import { PermisosService } from '../../../services/api/permisos.service';
import { ButtonComponent } from '../../../shared/atomicDesign/atoms/button/button.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  // 1. Inyección de dependencias
  private router = inject(Router);
  private userService = inject(UserService);
  private authService = inject(AuthService);
  private permisosService = inject(PermisosService);

  constructor(private fb: FormBuilder) { }

  // 2. Utilidades
  UtilFunction = UtilFunction;

  // 3. Formulario reactivo
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)
    ]],
  });

  // 4. Estado de validación del formulario
  get registrosNoValido() {
    return this.loginForm.invalid && (this.loginForm.dirty || this.loginForm.touched);
  }

  // 5. Mensajes de validación
  count_validation_messages = {
    'username': [
      { type: 'required', message: 'El nombre de usuario es obligatorio' }
    ],
    'password': [
      { type: 'required', message: 'La contraseña es obligatoria' },
      { type: 'minlength', message: 'La contraseña debe tener al menos 6 caracteres' },
      { type: 'maxlength', message: 'La contraseña no debe tener más de 20 caracteres' }
    ]
  }


  // Función para iniciar sesión
  guardarLogin() {

  // 1. Valida la información ingresada en el formulario
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

  // 2. Construye la solicitud que será enviada a la API
    const { username } = this.loginForm.value;
    const request: GetUserRequest = { username: username! };

    console.log('Request que se enviará:', request);

  // 3. Consulta el usuario en el servicio
    this.userService.UserGet(request).subscribe({

      next: (user: GetUserResponse) => {

        console.log('Usuario encontrado');
        console.log(user);

        // 4. Almacenamiento de la sesión
        this.authService.guardarSesion(user);

        console.log('Sesión guardada');

        // 5. Consulta y almacenamiento de permisos
        this.permisosService.obtenerPermisos().subscribe({

          next: (permisos) => {

            this.authService.guardarPermisos(permisos);

            console.log('Permisos guardados');

            alert(`Bienvenido ${user.username}`);

            // 6. Redirección.
            this.router.navigate(['/home']);

          },

        // Maneja errores al obtener los permisos
          error: (error) => {
            console.error('Error obteniendo permisos', error);
          }

        });

      },
// Maneja errores durante el proceso de autenticación
      error: (error) => {
        console.log('Usuario no existe');
        console.error(error);
        alert('El usuario no existe');
      }

    });

    // Se ejecuta antes de recibir la respuesta del servicio
    console.log('Fuera del subscribe');
  }
}