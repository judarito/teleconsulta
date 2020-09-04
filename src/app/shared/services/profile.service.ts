import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  constructor(private http: HttpClient) { 
    
  }


  getToken(){

  }

  getProfile(id:string){
    return this.http.get(`http://18.222.231.56:3000/Company/${id}`)
  }
}
