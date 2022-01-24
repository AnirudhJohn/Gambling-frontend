import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  baseUrl: String
  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:4000'
  }
 
  login(body: any) {
    
    return this.http.post(this.baseUrl+'/api/login',body,{
      observe: 'body'
    });
  }

  valid(token: any) {
    
    return this.http.get(this.baseUrl+'/api/data/valid', {
      headers: new HttpHeaders().append('authorization',token)
    })
  }
}
