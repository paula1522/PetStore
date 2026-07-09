import { UserService } from './../../../services/api/user.service';
import { CommonModule } from '@angular/common';
import { ValidacionesPropias } from './../../../utils/validaciones-propias';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { UtilFunction } from '../../../utils/general-function/util-function';
import { Router, RouterLink } from '@angular/router';
import { Subject, switchMap, takeUntil, tap, timer } from 'rxjs';
import { UsuarioClass } from '../../../core/models/User.model';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private router = inject(Router);
  private UserService = inject(UserService);
    private destruir$ = new Subject<void>(); // Notificador



  constructor(private fb: FormBuilder) { }

  /*llamar funcion de validar errores en el formulario*/
  UtilFunction = UtilFunction;


  RegisterForm = this.fb.nonNullable.group({
    username: ['', [Validators.required]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: ['', [Validators.required
      , ValidacionesPropias.phoneNumberValidator]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,
    Validators.minLength(6),
    Validators.maxLength(20)]],
    confirmPassword: ['', Validators.required],

  }, {
    validators: [ValidacionesPropias.passwordMatchValidator
    ]
  }
  );


  // ocultar/ver contraseña
  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }



  get RegistrosNoValido() {
    return this.RegisterForm.invalid && (this.RegisterForm.dirty || this.RegisterForm.touched);
  }

  //mesnajes de validacion al formulario
  count_validation_messages = {
    'username': [
      { type: 'required', message: 'El nombre de usuario es obligatorio' }
    ],
    'firstName': [
      { type: 'required', message: 'El nombre es obligatorio' }
    ],
    'lastName': [
      { type: 'required', message: 'El apellido es obligatorio' }
    ],
    'phone': [
      { type: 'required', message: 'El número de teléfono es obligatorio' },
      { type: 'invalidPhoneNumber', message: 'El número de teléfono no es válido ' }
    ],
    'email': [
      { type: 'required', message: 'El correo electrónico es obligatorio' },
      { type: 'email', message: 'El correo electrónico no es válido' }
    ],
    'password': [
      { type: 'required', message: 'La contraseña es obligatoria' },
      { type: 'minlength', message: 'La contraseña debe tener al menos 6 caracteres' },
      { type: 'maxlength', message: 'La contraseña no debe tener más de 20 caracteres' }
    ],
    'confirmPassword': [
      { type: 'required', message: 'La confirmación de la contraseña es obligatoria' },
      { type: 'passwordMismatch', message: 'Las contraseñas no coinciden' }
    ]
  }


  /*Función específica para guardar el registro del usuario*/
   guardarRegistro() {

  console.log('1. Se presionó Crear cuenta');

  if (this.RegisterForm.invalid) {
    console.log('2. Formulario inválido');
    this.RegisterForm.markAllAsTouched();
    return;
  }

  console.log('3. Formulario válido');

  const request = new UsuarioClass(this.RegisterForm.getRawValue());

  console.log('4. Esperando 5 segundos...');

  timer(5000)
    .pipe(
      tap(() => console.log('5. Terminó el timer')),
      takeUntil(this.destruir$),
      switchMap(() => {
        console.log('6. Enviando petición al servidor');
        return this.UserService.Register(request);
      }),
      tap(response => {
        console.log('7. Usuario registrado', response);
        this.router.navigate(['/login']);
      })
    )
    .subscribe({
      error: error => {
        console.error(error);
      }
    });
}


cancelarRegistro(): void {
  console.log('Se cancelo Registro');
  this.destruir$.next();
  this.RegisterForm.reset(); 

}

}