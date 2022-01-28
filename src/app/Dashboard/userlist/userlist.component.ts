import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Auth/login-service.service';
import { DataserviceService } from '../dataservice.service';
import { User } from '../user';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  money: any;

  user: User
  
  
  userData: Array<User>
  constructor(
      private service: DataserviceService, 
      private login: LoginServiceService,
      private router: Router
    ) { 
    this.userData = []
    this.user = new User('', false, [], 0, '') 
    this.getChild()
  }
  ngOnInit(): void {
    
  }

  getChild(){
    
    this.service.getUser()
    .subscribe(data => {
      
      // this.users = JSON.parse(JSON.stringify(data))['children']
      // this.money = JSON.parse(JSON.stringify(data))['money'

      this.user.username = JSON.parse(JSON.stringify(data))['data']['username']
      this.user.isActive = JSON.parse(JSON.stringify(data))['data']['isActive']
      this.user.parent = JSON.parse(JSON.stringify(data))['data']['parent']
      this.user.children = JSON.parse(JSON.stringify(data))['data']['child']
      this.user.money = JSON.parse(JSON.stringify(data))['data']['wallet']
      // console.log(JSON.parse(JSON.stringify(data))['data'])
      

      this.getChildData()

      // if(JSON.parse(JSON.stringify(data))['parent']){
      //   // this.users.push(JSON.parse(JSON.stringify(data))['parent']) in case of coin transfer
      //   this.parent = JSON.parse(JSON.stringify(data))['parent']
      // }

      
    })
  }

  getChildData(){
    console.log('me yahan hu')
    
    for(let child in this.user.children){
      console.log('in riteshs function '+ child+ ' '+this.user.children[child])
    
    this.service.getChild(this.user.children[child])
    .subscribe(data => {
      
    let temp = {
      'username':JSON.parse(JSON.stringify(data))['data']['username'],
      'isActive':JSON.parse(JSON.stringify(data))['data']['isActive'],
      'parent':JSON.parse(JSON.stringify(data))['data']['parent'],
      'children':JSON.parse(JSON.stringify(data))['data']['child'],
      'money':JSON.parse(JSON.stringify(data))['data']['wallet'],
    }
    console.log(temp)
    
    this.userData.push(temp)
   
      
    })
  }
  
  
}
toogleBlock(data: any){
    
    data.isActive = !data.isActive
    console.log(this.userData)

}

//   remove(user: String){

//     console.log(this.users.indexOf(user))
//     let a = this.users[this.users.indexOf(user)]
//     this.login.removeUser(a)
//     .subscribe({
//       next: (res) => {
//         console.log('in res',res)
//       },
//       error: (e) => {
//         console.log('in err', e)
//         this.router.navigate(['/dash'])
        
//       },
//       complete: () => {
//         console.log('in complete')
        

//       }
//   })
// }

}
