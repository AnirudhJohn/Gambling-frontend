import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  
  t = localStorage.getItem('token')
  loginError = ''
  showErrorMessage = false

  constructor(private loginService: LoginServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { 
      this.loginError = ''
      this.showErrorMessage = false
       
      
      this.loginForm = new FormGroup({
        username: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
      });
    
      if(localStorage.getItem('token') !== undefined || localStorage.getItem('token') !== null){
        this.validateSession(this.t)
      }else {
        console.log('session not validated')
      }
     }
    //  constructor closed

  ngOnInit(): void {
    
  }
  isValid(controlName: any){
    return this.loginForm.get(controlName)?.invalid && this.loginForm.get(controlName)?.touched;
  }

  login(){
      if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value)
      .subscribe({
        next: (res) => {
          console.log(res)
          if(JSON.parse(JSON.stringify(res))['token'] !== undefined){

            localStorage.setItem('token','Bearer '+JSON.parse(JSON.stringify(res))['token'])
          }
          
        },
        error: (e) => {
          console.log('in user failed response error',e['message'])
          this.loginError = e['message']
          this.showErrorMessage = true
          
        },
        complete: () => {
          console.info('complete') 
          
          this.router.navigate(['/dash'])
          

        }
    }
         
        
      )
    }
  }

  validateSession(token: any){
    
    this.loginService.valid(token)
    .subscribe(
      res => {
        if (res === true){
          this.router.navigate(['/dash'])
        }else {
          console.log('session not validated')
        }
        
      }
    )
  }
}

//     .subscribe({
  // next: (res) => {
  //   console.log('in res',res)
  // },
  // error: (e) => {
  //   console.log('in err', e)
    
  // },
  // complete: () => {
  //   console.log('in complete')
    

  // }
