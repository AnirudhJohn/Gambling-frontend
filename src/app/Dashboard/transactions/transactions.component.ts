import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  sent: []
  received: {}
  sender: [] = [];
  id: never[] = [];
  reciever: [] = [];
  amount: [] = [];
  time: [] = [];
  constructor(
    private router: Router,
    private service: DataserviceService
  ) { 
    this.sent = []
    this.received = {}
    this.sentTrans()
  }

  ngOnInit(): void {
  }

  sentTrans(){
    this.service.getTransactions()
    .subscribe({
      next: (res) => {
        this.sent = JSON.parse(JSON.stringify(res));
        let l =JSON.parse(JSON.stringify(res)).length
        for(let i = 0; i< l; i++){
        console.log('inside res'+res)
        console.log(JSON.stringify(res))
        console.log(JSON.parse(JSON.stringify(res)))
        this.id = JSON.parse(JSON.stringify(res))[0]['_id']
        this.sender = JSON.parse(JSON.stringify(res))[0]['sender']
        this.reciever = JSON.parse(JSON.stringify(res))[0]['receiver']
        this.amount = JSON.parse(JSON.stringify(res))[0]['amount']
        this.time = JSON.parse(JSON.stringify(res))[0]['createdAt']
        }
      },
      error: (err) => {
        console.log('inside err'+err)
      },
      complete: () =>{
        console.log('completed')
      } 
    })
  }

}
