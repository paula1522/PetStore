/*export interface UserRequest{
    id:             number;
    username:       string;
    firstName:      string
    lastName:       string;
    email:          string;
    password:       string;
    phone:          string;
    userStatus:     number;
}

export interface UserResponse{
    code:           number;
    type:           string;
    message:        string;
}*/

export class Usuario {

  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  userStatus: number;

  constructor(
    username: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  phone: string
  ) {
    this.id = 0;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  this.password = password;
  this.phone= phone;
    this.userStatus = 1;
  }

   getNombreCompleto(): string {
    return `${this.firstName} ${this.lastName}`;
  }

getEstado(): string {
  return this.userStatus === 1 ? "Activo" : "Inactivo";
}
}