import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-homedash',
  templateUrl: './homedash.component.html',
  styleUrls: ['./homedash.component.css']
})
export class HomedashComponent implements OnInit {
  
  
  name!: Observable<String>;
  role = '';
  wallet = 0;
  constructor(private service: DataserviceService) {
    
    
    this.role = '';
    this.wallet = 0;
    this.getData()
    
   }

  ngOnInit(): void {
    console.log('in init')
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
