// Modelo de la solicitud para consultar un usuario.
export interface GetUserRequest {
    username: string;
}

// Modelo de la respuesta al consultar un usuario.
export interface GetUserResponse {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    userStatus: number;
}