import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponseModel, LoginRequestModel, UserLoginModel } from 'src/app/models/authLogin/loginModel';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {
  private UlrBaseApi:String;
  constructor(private httpClient: HttpClient) { 
    this.UlrBaseApi=environment.UrlBaseApi;
  }

  Login(loginData:LoginRequestModel):Observable<any>{
    return this.httpClient.post<any>(`${this.UlrBaseApi}Users/authenticate`,loginData);
  }

}
