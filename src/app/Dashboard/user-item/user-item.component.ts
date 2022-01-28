import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Auth/login-service.service';
import { DataserviceService } from '../dataservice.service';
import { User } from '../user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input()
  username!: String; 
  user: User 
  a: String | undefined;
  // user = '';
  constructor(
      private service: DataserviceService, 
      private login: LoginServiceService,
      private router: Router
    ) { 
    
    this.user = new User('', false, [], 0, '') 
    // this.users = []
    // this.parent = ''
    // this.rm ='';
    this.a = this.username
    this.getChild()
    
  }
  ngOnInit(): void {
    
  }
  
  getChild(){
    console.log('inside getchild method in class '+this.username + this.a)
    this.service.getChild(this.username)
    .subscribe(data => {
      
    
      this.user.username = JSON.parse(JSON.stringify(data))['data']['username']
      this.user.isActive = JSON.parse(JSON.stringify(data))['data']['isActive']
      this.user.parent = JSON.parse(JSON.stringify(data))['data']['parent']
      this.user.children = JSON.parse(JSON.stringify(data))['data']['child']
      this.user.money = JSON.parse(JSON.stringify(data))['data']['wallet']
      console.log(JSON.parse(JSON.stringify(data))['data'])
      
      
    })
  }


}
