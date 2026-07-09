import { GetUserRequest, GetUserResponse } from './../../core/models/GetUser.model';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UsuarioClass } from '../../core/models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);
  private apiUrl = 'https://petstore.swagger.io/v2/user';



//Login
  Login(username: string, password: string) {
    return this.http.get(
      `${this.apiUrl}/login?username=${username}&password=${password}`
    );
  }


  //Buscar user por username
  UserGet(request: GetUserRequest){
    return this.http.get<GetUserResponse>(
      `${this.apiUrl}/${request.username}`
    );
  }


  //Register 
  Register(request: UsuarioClass){
    return this.http.post<UsuarioClass>(
      this.apiUrl,request
    );
  }
}
