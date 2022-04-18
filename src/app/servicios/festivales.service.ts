import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FestivalesService {

  constructor(private http: HttpClient) { }

  getFestivales(){
    this.http.get('src/assets/json/festivales.JSON');
  }
}
