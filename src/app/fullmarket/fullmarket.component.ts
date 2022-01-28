import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../Dashboard/dataservice.service';

@Component({
  selector: 'app-fullmarket',
  templateUrl: './fullmarket.component.html',
  styleUrls: ['./fullmarket.component.css']
})
export class FullmarketComponent implements OnInit {
  results: any;
  
  constructor(
    private service: DataserviceService
  ) { 
    this.results = [] 
    

    this.three()
  }

  ngOnInit(): void {
  }

  one(){
    this.service.one().subscribe({
      next: res => {
        console.log(res)
      },
      error: err => {
        console.log(err)
      },
      complete: () => {
        console.log('completed !!')
      }
    })
  }
  three(){
    this.service.three().subscribe({
      next: res => {
        console.log(res)
        this.results = JSON.stringify(JSON.parse(JSON.stringify(res))['result'][0])
        console.log(JSON.parse(JSON.stringify(res))['result'].length)

        // this.obj = JSON.parse(JSON.stringify(res))['result']
        // this.length = JSON.parse(JSON.stringify(res))['result'].length
        // for(let i = 0; i< this.length; i++){
        //   this.obj[i]
        // }
      },
      error: err => {
        console.log(err)
      },
      complete: () => {
        console.log('completed !!')
      }
    })
  }
}
