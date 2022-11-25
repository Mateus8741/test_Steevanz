import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Countries } from '../models/countries.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  apiUrl = 'https://restcountries.com/v3.1/all';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  public getCountries(): Observable<Countries> {
    return this.httpClient.get<Countries>(this.apiUrl)
  }
}
