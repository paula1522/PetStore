import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';

//Exportar validador de contraseña
export function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  if (!password || !confirmPassword) {
    return null;
  }
  return password === confirmPassword ? null : { 'passwordMismatch': true };
};  


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
   
  constructor(private fb: FormBuilder) { }

  RegisterForm = this.fb.group({
    username: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,
                    Validators.minLength(6), 
                    Validators.maxLength(20)]],
    confirmPassword: ['', Validators.required]
    
  },{validators: [passwordMatchValidator]});


 // ocultar/ver contraseña
  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  guardarRegistro() {
  
      if(this.RegisterForm.invalid){
        this.RegisterForm.markAllAsTouched();
        return;
      }
  
      console.log(this.RegisterForm.value);
  
  }
  
}
