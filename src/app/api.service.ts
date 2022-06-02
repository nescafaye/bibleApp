import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGospel } from './gospel';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  headers: HttpHeaders;

  constructor(public http: HttpClient) 
  {
    this.headers = new HttpHeaders();
    this.headers.append("Accept", 'application/json');
    this.headers.append("Content-Type", 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');

  }

  getGospel(): Observable<IGospel[]> {

    return this.http.get<IGospel[]>('http://localhost/bible_app/php/displayList.php')
  }



}
