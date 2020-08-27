export interface LoginRequestModel {
    Username: string;
    Password: string;
  }

  export interface LoginResponseModel {
    jwt: string;
    user: UserLoginModel;
  }

  export interface UserLoginModel {
    id: number;
    username: boolean;
    firstName: string;
    lastName: string;
    token: string;
    
  }