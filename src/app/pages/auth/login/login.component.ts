import { AuthService } from './../../../services/logic/auth.service';
import { UserService } from './../../../services/api/user.service';
import { UtilFunction } from './../../../utils/general-function/util-function';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { GetUserRequest, GetUserResponse } from '../../../core/models/GetUser.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private router = inject(Router);
  private UserService = inject(UserService);
  private authService = inject(AuthService);


  constructor(private fb: FormBuilder) { }

  UtilFunction = UtilFunction;

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required,
    Validators.minLength(6),
    Validators.maxLength(20)]],

  });

  get RegistrosNoValido() {
    return this.loginForm.invalid && (this.loginForm.dirty || this.loginForm.touched);
  }

  //mesnajes de validacion al formulario
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


  guardarLogin() {

    // 1. Valida que todos los campos sean correctos
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    // 2. Obtiene los datos de entrada
    const { username } = this.loginForm.value;

    const request: GetUserRequest = { username: username! };

    console.log('Request que se enviará:', request);

    this.UserService.UserGet(request).subscribe({

      next: (user: GetUserResponse) => {

        console.log('Usuario encontrado');
        console.log(user);


        this.authService.guardarSesion(user);

        console.log('Sesión guardada');

        alert(`Bienvenido ${user.username}`);

        this.router.navigate(['/home']);
      },

      error: (error) => {
        console.log('Usuario no exite');
        console.error(error);
        alert('El usuario no existe');
      }

    });

    // Esta línea se ejecuta antes de recibir la respuesta del subscribe.
    console.log('Fuera del subscribe');

  }
}
