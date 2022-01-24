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
  constructor(private loginService: LoginServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { 
      
      this.validateSession(this.t) 
      
      this.loginForm = new FormGroup({
        username: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
      });
    

     }

  ngOnInit(): void {
  }
  isValid(controlName: any){
    return this.loginForm.get(controlName)?.invalid && this.loginForm.get(controlName)?.touched;
  }

  login(){
      if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value)
      .subscribe(
        res => {
          localStorage.setItem('token','Bearer '+JSON.parse(JSON.stringify(res))['token'])
          this.router.navigate(['/dash'])
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
        }
        
      }
    )
  }
}

