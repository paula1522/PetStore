import { FormControl, FormGroup, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class ValidacionesPropias {
    /*Función generica para validar que el valor no sea cero*/
    /*static tamanoCero(control: FormControl): ValidationErrors {
        return control != null && control.value != 0 ? : { 'tamanoCero': true };
    }*/


    /*Función generica para validar que el valor no contenga la palabra "default"*/        
    static noDefaultValidator(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } |
            null => {
                const value: string = control.value; if (value && value.toLowerCase().includes('default')) {
                    return { 'noDefault': { value: value } };
                } return null;
        };
    }



    /*Función generica para comparar las contraseñas*/
    static passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
        const password = control.get('password')?.value;
        const confirmPassword = control.get('confirmPassword')?.value;
        if (!password || !confirmPassword) {
            return null;
        }
        return password === confirmPassword ? null : { 'passwordMismatch': true };
    };


    /*Función generica para validar numero de celular con expresión regular*/
    static phoneNumberValidator(control: AbstractControl): ValidationErrors | null {
        const phoneNumber = control.value;
        const phoneNumberPattern = /^3\d{9}$/; // Expresión regular para validar un número de teléfono de 10 dígitos sin espacios ni guiones ni letras
        if (phoneNumber && !phoneNumberPattern.test(phoneNumber)) {
            return { 'invalidPhoneNumber': true };
        }
        return null;

    }

}