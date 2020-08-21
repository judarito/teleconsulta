import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountriesResponseModel } from '../../models/countries/countriesModel';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private UlrBaseApi:String;
  constructor(private httpClient: HttpClient) { 
    this.UlrBaseApi=environment.UrlBaseApi;
  }

  getCountries():Observable<CountriesResponseModel[]>{
    return this.httpClient.get<CountriesResponseModel[]>(`${this.UlrBaseApi}countries`);
  }
}
