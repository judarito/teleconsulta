import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class callSessionService {
    private UlrBaseApi:String;
    constructor(private httpClient: HttpClient) { 
      this.UlrBaseApi=environment.UrlBaseApi;
    }
  
    getcallSession(id:string):Observable<any>{
      return this.httpClient.get<any>(`${this.UlrBaseApi}CallSession/${id}`);
    }
  }
  