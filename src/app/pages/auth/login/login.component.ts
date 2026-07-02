import { Component} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 
constructor(private fb: FormBuilder) { }
loginForm = this.fb.group({
  username: ['', Validators.required],
  password: ['', [Validators.required,
                  Validators.minLength(6), 
                  Validators.maxLength(20)]]
});

guardarLogin() {

    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }

    console.log(this.loginForm.value);

}


}