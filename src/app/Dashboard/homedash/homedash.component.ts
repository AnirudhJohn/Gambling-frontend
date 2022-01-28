import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-homedash',
  templateUrl: './homedash.component.html',
  styleUrls: ['./homedash.component.css']
})
export class HomedashComponent implements OnInit {
  
  
  name = '';
  role = '';
  wallet = 0;
  constructor(private service: DataserviceService) {
    this.getData()
    this.name = '';
    this.role = '';
    this.wallet = 0;
    
   }

  ngOnInit(): void {
    console.log('in init')
    this.name = '';
    this.role = '';
    this.wallet = 0;
    this.getData()
  }


  getData(){
    this.service.wallet()
    .subscribe(
      data => {
        let arr = JSON.parse(JSON.stringify(data))
        this.name = arr['username']
        this.role = arr['role']
        this.wallet = arr['wallet']
      }
    )
  }

}
