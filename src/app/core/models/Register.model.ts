export interface RegisterRequest{
    id:             number;
    username:       string;
    firstName:      string
    lastName:       string;
    email:          string;
    password:       string;
    phone:          string;
    userStatus:     number;
}

export interface RegisterResponse{
    code:           number;
    type:           string;
    message:        string;
}