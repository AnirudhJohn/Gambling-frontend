import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Auth/login-service.service';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-dashlayout',
  templateUrl: './dashlayout.component.html',
  styleUrls: ['./dashlayout.component.css']
})
export class DashlayoutComponent implements OnInit {
  a = 0 ;
  b = 0  ;
  c = 0  ;
  d = 0  ; 
  e = 0  ;
  f = 0  ;
  g = 0  ;
  i = 1  ;
  h = 0  ;
  t = localStorage.getItem('token')  
  isCreator: boolean
  constructor(private loginService: LoginServiceService,
    private router: Router,
    private service: DataserviceService,
    private activatedRoute: ActivatedRoute) { 
      this.validateSession(this.t)
      this.isCreator = false
      this.getData()
  }

  ngOnInit(): void {
    if(this.t === null){
      this.router.navigate(['/login'])
    }
    this.validateSession(this.t)
  }

  activ(q: any){

    // this.a = 0  ;
    // this.b = 0  ;
    // this.c = 0  ;
    // this.d = 0  ; 
    // this.e = 0  ;
    // this.f = 0  ;
    // this.g = 0  ;
    // this.h = 0  ;
    // this.i = 0  ;
  }
 
  getData(){
    this.service.wallet()
    .subscribe(
      data => {
        let arr = JSON.parse(JSON.stringify(data))
        if(arr['role'] === 'creator'){
          this.isCreator = true
        }
      }
    )
  }
  
  validateSession(token: any){
  this.loginService.valid(token)
    .subscribe(
      res => {
        console.log(this.t)
        if (res === false){
          console.log('value of esponse from valid',res)
          this.router.navigate(['/login'])
        } else{
          this.router.navigate(['/dash'])
        }
        
      }
    )
  }

  logout(){
    console.log('in logout')
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}

