import { UtilFunction } from './../../../utils/general-function/util-function';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    private router = inject(Router);



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
  console.log('Entró a guardarLogin');

  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched();
    return;
  }

  this.router.navigate(['/home']);
}


}