import { UserService } from './../../../services/api/user.service';
import { UtilFunction } from './../../../utils/general-function/util-function';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { GetUserRequest } from '../../../core/models/GetUser.model';

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

    // 1.Valida que todos los campos sean correctos
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    //2.Obtiene los datos de entrada
    const { username, password } = this.loginForm.value;
    //const request: GetUserRequest = { username: username! };

    /*this.UserService.UserGet(request).subscribe({
      next: (user: GetUserRequest) => {
        console.log('usuario encontrado');*/

    //3.Realiza el proceso del login
    this.UserService.Login(username!, password!).subscribe({

      //4.Respuesta si el login es exitoso
      next: (response) => {
        console.log('Respuesta del login');
        console.log(response)

        //4.1 Redirecciona al Home
        this.router.navigate(['/home']);
      },

      //5. Se ejecuta si courre un error 
      error: (error) => {
        console.error('error en el login', error);
      }
    });
    /*},
    error: (error) => {

      console.error('El usuario no existe', error);
      alert('El usuario no existe');
    }

    });*/
    //Esta se ejecuta antes de recicbir la respuesta del login.
    console.log('Fuera del subscribe');

  }
}
