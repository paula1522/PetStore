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

export class UsuarioClass {

  id!: 0;
  username!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;
  phone!: string;
  userStatus!: 1;

  constructor(init?: Partial<UsuarioClass>) {
    Object.assign(this, init);
  }

  getNombreCompleto(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getEstado(): string {
    return this.userStatus === 1 ? "Activo" : "Inactivo";
  }
}