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

  user: User
  userData: Array<User>
  detailedView: Array<User> = []
  viewmode: boolean = false
  usure: boolean = false
  todelete: User = new User('',false,[],0,'','')
  constructor(
      private service: DataserviceService, 
      private login: LoginServiceService,
      private router: Router
    ) { 
    this.userData = []
    this.user = new User('', false, [], 0, '','') 
    this.getChild()
  }
  ngOnInit(): void {
    
  }

  async getChild(){
    
    ;(this.service.getUser())
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

  async getChildData(){
    this.userData = []
    
    for(let child in this.user.children){
      console.log('in riteshs function '+ child+ ' '+this.user.children[child])
    
    this.service.getChild(this.user.children[child])
        .subscribe(data => {

          let temp = {
            'username': JSON.parse(JSON.stringify(data))['data']['username'],
            'isActive': JSON.parse(JSON.stringify(data))['data']['isActive'],
            'parent': JSON.parse(JSON.stringify(data))['data']['parent'],
            'children': JSON.parse(JSON.stringify(data))['data']['child'],
            'money': JSON.parse(JSON.stringify(data))['data']['wallet'],
            'role': JSON.parse(JSON.stringify(data))['data']['role'],
          };
          console.log(temp);

          this.userData.push(temp);


        })
  }
  
  
  }

  async toogleBlock(data: User){
    
    
    console.log(this.userData)
    data.isActive = !data.isActive
    ;(await this.service.changeValidity(data.username))
    .subscribe( dat =>{
      
      
    })
    this.blockEveryone(data)
      this.getChild()
    

  }

  async blockEveryone(user: User){
  // must block the calling user seperatly 
  if( user.children === []){
    // console.log('inside block everyone if '+user.role)
    return
  } else{

    for(let child in user.children)
    {
      // console.log('first for loop '+user.children[child])
      this.service.getChild(user.children[child])
        .subscribe(async (data) => {
          // console.log('inside for loop subscribe '+JSON.stringify(data))
          let temp = {
            'username': JSON.parse(JSON.stringify(data))['data']['username'],
            'isActive': JSON.parse(JSON.stringify(data))['data']['isActive'],
            'parent': JSON.parse(JSON.stringify(data))['data']['parent'],
            'children': JSON.parse(JSON.stringify(data))['data']['child'],
            'money': JSON.parse(JSON.stringify(data))['data']['wallet'],
            'role': JSON.parse(JSON.stringify(data))['data']['role'],
          };

          // The main login happening here
          console.log('name: ' + temp['username'] + ' role: ' + temp['role']); (await
            // temp.isActive = !temp.isActive
            this.service.changeValidity(temp.username))
            .subscribe(data => {
              console.log(data);
            });
          this.blockEveryone(temp);

        })
      
    }
  }
  }

  viewEveryone(user: User){
   
    this.detailedView = []
    this.viewEveryoneforme(user)
    console.log(this.detailedView)
    

  }
  viewEveryoneforme(user: User){
    if( user.children === []){
      // console.log('inside block everyone if '+user.role)
      return
    } else{
  
      for(let child in user.children)
      {
        // console.log('first for loop '+user.children[child])
        this.service.getChild(user.children[child])
          .subscribe(async (data) => {
            // console.log('inside for loop subscribe '+JSON.stringify(data))
            let temp = {
              'username': JSON.parse(JSON.stringify(data))['data']['username'],
              'isActive': JSON.parse(JSON.stringify(data))['data']['isActive'],
              'parent': JSON.parse(JSON.stringify(data))['data']['parent'],
              'children': JSON.parse(JSON.stringify(data))['data']['child'],
              'money': JSON.parse(JSON.stringify(data))['data']['wallet'],
              'role': JSON.parse(JSON.stringify(data))['data']['role'],
            };
  
            // The main login happening here
            console.log('name: ' + temp['username'] + ' role: ' + temp['role'])
            // console.log(this.detailedView)
            this.detailedView.push(temp)
            this.viewEveryoneforme(temp);
  
          })
        
      }
    }
  }


  remove(user: User){
    this.login.removeUser(user.username)
    .subscribe(data =>{
      console.log('User deleted')
      this.usure = false
    })
    console.log(user.username)
    this.removeEveryone(user)
    this.router.navigate(['/dash'])
  }


  removeEveryone(user: User){
    // must block the calling user seperatly 
  if( user.children === []){
    // console.log('inside block everyone if '+user.role)
    return
  } else{

    for(let child in user.children)
    {
      // console.log('first for loop '+user.children[child])
      this.service.getChild(user.children[child])
        .subscribe(async (data) => {
          // console.log('inside for loop subscribe '+JSON.stringify(data))
          let temp = {
            'username': JSON.parse(JSON.stringify(data))['data']['username'],
            'isActive': JSON.parse(JSON.stringify(data))['data']['isActive'],
            'parent': JSON.parse(JSON.stringify(data))['data']['parent'],
            'children': JSON.parse(JSON.stringify(data))['data']['child'],
            'money': JSON.parse(JSON.stringify(data))['data']['wallet'],
            'role': JSON.parse(JSON.stringify(data))['data']['role'],
          };

          // The main login happening here
          console.log('name: ' + temp['username'] + ' role: ' + temp['role'])

          this.login.removeUser(temp.username)
          .subscribe( data => {
            console.log(data)
          })
          this.removeEveryone(temp);

        })
      
    }
  }
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
