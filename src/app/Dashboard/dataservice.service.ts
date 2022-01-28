import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  baseUrl: String
  token: any 
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:4000'
    this.token = localStorage.getItem('token') || []


   }

   wallet(){
    return this.http.get(this.baseUrl+'/api/data/wallet',{
      headers: new HttpHeaders().append('authorization',this.token)
    })
  }
  getUser(){
    return this.http.get(this.baseUrl+'/api/data/getchild',{
      headers: new HttpHeaders().append('authorization',this.token)
  })}
  getChild(username: any){
    return this.http.post(this.baseUrl+'/api/data/getchilddata',{'username': username} ,{
      headers: new HttpHeaders().append('authorization',this.token)
  })}
  genCoin(body: any){
    let token = localStorage.getItem('token')||''
    return this.http.post(this.baseUrl+'/api/data/gencoin',body,{
      headers: new HttpHeaders().append('authorization',token)
    })
  }
  transfer(_rec: string, _amount: any){
    let token = localStorage.getItem('token')||''
    return this.http.post(this.baseUrl+'/api/data/transfer', {'rec':_rec,'amount':_amount},{
      headers: new HttpHeaders().append('authorization', token)
    })
  }
  getTransactions(){
    let token = localStorage.getItem('token')||''
    return this.http.get(this.baseUrl+'/api/data/gettrans',{
      headers: new HttpHeaders().append('authorization', token)
    })
  }

  getIsValid(){
    
    let token = localStorage.getItem('token')||''
    return this.http.get(this.baseUrl+'/api/data/isvaliduser',{
      headers: new HttpHeaders().append('authorization', token)
    })
  }

  async changeValidity(username: String){
    console.log('in api method '+username)
    return this.http.put(this.baseUrl+'/api/data/block',{'username': username} ,{
      headers: new HttpHeaders().append('authorization',this.token)
  })}

  one(){
    return this.http.get(this.baseUrl+'/api/one')
  }

  two(){
    return this.http.get(this.baseUrl+'/api/two')
  }
  three(){
    return this.http.get(this.baseUrl+'/api/three')
  }
  four(){
    return this.http.get(this.baseUrl+'/api/four')
  }
  five(){
    return this.http.get(this.baseUrl+'/api/five')
  }

}
