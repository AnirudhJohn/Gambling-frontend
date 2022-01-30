import { Component, OnInit } from '@angular/core';
import { BetData } from '../betdata';
import { DataserviceService } from '../Dashboard/dataservice.service';
import { Leagues } from '../leagues';

@Component({
  selector: 'app-fullmarket',
  templateUrl: './fullmarket.component.html',
  styleUrls: ['./fullmarket.component.css']
})
export class FullmarketComponent implements OnInit {
  results: any;
  betdata: Array<BetData> 
  leagues: Array<Leagues>
  activeElement: Array<BetData> = []
  pressed = false
  constructor(
    private service: DataserviceService
  ) { 
    this.results = [] 
    this.betdata = []
    this.leagues = []
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
        
        this.results = JSON.parse(JSON.stringify(res))['result']

        for(let data of this.results){
          let temp = {
            'league_name': data['league_name'],
            'match_name': data['event_home_team'] + ' vs ' + data['event_away_team'],
            'event_date_start': data['event_date_start'],
            'fancy': false,
            'sportbook': false,
            'in_play': false
          }
          // this.betdata.push(temp)
        }
        
        let l = []
        for(let data of this.betdata){
          l.push(data.league_name)
        }
        let array_of_leagues = this.removeDuplicate(l)
        
        for(let lea in array_of_leagues)
        {
          for(let bets in this.betdata)
          {
            if(this.betdata[bets].league_name === array_of_leagues[lea])
            {
              let temp = {
                name: array_of_leagues[lea],
                matches: []
              }
              
              const index = this.leagues.findIndex((element) => element.name === array_of_leagues[lea])
              
              if( index !== -1)
              {
                this.leagues[index].matches.push(this.betdata[bets])
              }
              else
              {
                // this.leagues.push(temp)
                this.leagues[this.leagues.findIndex((element) => element.name === array_of_leagues[lea])].matches.push(this.betdata[bets])
                
              }
            }
          }
        }

      },
      error: err => {
        console.log(err)
      },
      complete: () => {
        console.log(this.leagues)
        console.log('completed !!')
      }
    })
  }
  
  
  removeDuplicate(l: Array<String>){
    return [... new Set(l)]
  }
}
