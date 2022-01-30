import { Component, Input, OnInit } from '@angular/core';
import { BetData } from 'src/app/betdata';

@Component({
  selector: 'app-cricket-detail',
  templateUrl: './cricket-detail.component.html',
  styleUrls: ['./cricket-detail.component.css']
})
export class CricketDetailComponent implements OnInit {

  @Input() event_id: number = 0

  constructor() { 
    console.log(this.event_id)
  }

  ngOnInit(): void {
  }

}
