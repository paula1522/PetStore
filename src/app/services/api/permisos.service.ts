import { GetUserRequest, GetUserResponse } from './../../core/models/GetUser.model';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UsuarioClass } from '../../core/models/User.model';

@Injectable({
    providedIn: 'root'
})
export class PermisosService {

    private http = inject(HttpClient);
    private apiUrl = 'https://41d3df83-16f4-476b-8401-d1fc6fbb5744.mock.pstmn.io';



    obtenerPermisos() {
        return this.http.get<{ id: number; nombre: string;}[]>
            (`${this.apiUrl}/api/permisos`);
    }
}
