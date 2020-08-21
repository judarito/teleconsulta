export interface LoginRequestModel {
    identifier: string;
    password: string;
  }

  export interface LoginResponseModel {
    jwt: string;
    user: UserLoginModel;
  }

  export interface UserLoginModel {
    confirmed: boolean;
    blocked: boolean;
    id: string;
    username: string;
    email: string;
    provider: string;
    createdAt: string;
    updatedAt: string;
  }