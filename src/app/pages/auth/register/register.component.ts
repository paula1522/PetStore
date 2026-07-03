import { CommonModule } from '@angular/common';
import { ValidacionesPropias } from './../../../utils/validaciones-propias';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { UtilFunction } from '../../../utils/general-function/util-function';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private router = inject(Router);
   
  constructor(private fb: FormBuilder) { }

  /*llamar funcion de validar errores en el formulario*/
  UtilFunction = UtilFunction;


  RegisterForm = this.fb.group({
    username: ['',[Validators.required]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: ['', [Validators.required
              ,ValidacionesPropias.phoneNumberValidator]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,
                    Validators.minLength(6), 
                    Validators.maxLength(20)]],
    confirmPassword: ['', Validators.required]
    
  },{validators: [ValidacionesPropias.passwordMatchValidator
  ]}
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
  
      if(this.RegisterForm.invalid){
        this.RegisterForm.markAllAsTouched();
        return;
      }
  

    this.router.navigate(['/home']);
  
  }
  
}
