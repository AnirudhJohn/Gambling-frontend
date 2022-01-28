import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Auth/login-service.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  loginForm: FormGroup
  showErrorMessage: boolean;
  showSuccessMessage: boolean;
  constructor(private loginService: LoginServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { 
      
      this.showSuccessMessage = false
      this.showErrorMessage = false
      this.loginForm = new FormGroup({
        username: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
      }); }

  ngOnInit(): void {
  }
  add(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      this.loginService.add(this.loginForm.value)
      .subscribe({
        next: (res) => {
          this.showSuccessMessage = true
        },
        error: (e) => {
          console.log('in user failed response error',e['message'])
          this.showErrorMessage = true
          
        },
        complete: () => {
          this.showSuccessMessage = true

        }
    }
         
        
      )
  }
}

 onSubmit() {
   console.log("haa ho gya  ")
   this.loginForm.reset()
  
 }

}
