import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private UlrBaseApi:String;

  constructor(private http:HttpClient) { 

    this.UlrBaseApi=environment.UrlBaseApi;

  }

  registerCompany(company:any){
    return this.http.post(`${this.UlrBaseApi}company/register`,company);
  }
}
