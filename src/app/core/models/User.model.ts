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

// Modelo que representa un usuario de la aplicación.
export class UsuarioClass {

  // 1. Propiedades del usuario.
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  userStatus: number;

  // 2. Inicialización del modelo.
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
    this.phone = phone;
    this.userStatus = 1;
  }

  // 3. Obtiene el nombre completo del usuario.
  getNombreCompleto(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  // 4. Obtiene el estado del usuario en formato texto.
  getEstado(): string {
    return this.userStatus === 1 ? "Activo" : "Inactivo";
  }
}