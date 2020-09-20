import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private UlrBaseApi:String;

  constructor(private http : HttpClient) { 

    this.UlrBaseApi = environment.UrlBaseApi

   }

  getProfileById(id : string,){
    
    const token = localStorage.getItem('jwt')

    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `bearer ${token}`
    })

    return this.http.get(`${this.UlrBaseApi}company/${id}`,{headers})

  } 

}
