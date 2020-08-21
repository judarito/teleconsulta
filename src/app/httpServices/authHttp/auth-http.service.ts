import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponseModel, LoginRequestModel } from 'src/app/models/authLogin/loginModel';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {
  private UlrBaseApi:String;
  constructor(private httpClient: HttpClient) { 
    this.UlrBaseApi=environment.UrlBaseApi;
  }

  Login(loginData:LoginRequestModel):Observable<LoginResponseModel>{
    return this.httpClient.post<LoginResponseModel>(`${this.UlrBaseApi}auth/local`,loginData);
  }

}
