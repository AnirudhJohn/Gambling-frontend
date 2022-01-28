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
  token = localStorage.getItem('token') || []

  add(body: any){
    

      return this.http.post(this.baseUrl+'/api/register',body,{headers: new HttpHeaders().append('authorization', localStorage.getItem('token') || '')})
    
  }
 
  valid(token: any) {
    console.log('value from api in service')
    return this.http.get(this.baseUrl+'/api/data/valid', {
      headers: new HttpHeaders().append('authorization',token)
    })
  }

  removeUser(body: any){
    console.log('i am body ',body)
    return this.http.post(this.baseUrl+'/api/data/removeUser',{'username':body},{headers: new HttpHeaders().append('authorization', localStorage.getItem('token') || '')})
  }

}
