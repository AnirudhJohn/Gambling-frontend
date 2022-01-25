import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from './Auth/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gambling';
  constructor(private login: LoginServiceService,
    private route:Router){
      this.isvalidSession()

  }
  isvalidSession(){
    
    if(localStorage.getItem('token') === undefined || localStorage.getItem('token') === null ){
      this.route.navigate(['/login'])
    }
  }
}
