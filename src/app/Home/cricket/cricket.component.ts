import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { BetData } from '../../betdata';
import { DataserviceService } from '../../Dashboard/dataservice.service';
import { Leagues } from '../../leagues';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css']
})
export class CricketComponent implements OnInit {

  @Output() childToParent = new EventEmitter<String>()

  results: any;
  betdata: Array<BetData> 
  leagues: Array<Leagues>
  activeElement: Array<BetData> = []
  pressed = false 
  pressed2 = false
  back: Array<number> = []
  tmp_odds_back: Array<number> = []
  selectedLeague:String = ''
  detail: BetData = {
    'league_name':'',
    'match_name':'',
    'event_date_start':'',
    'fancy':false,
    'sportbook':false,
    'in_play':false,
    'event_key': 0,
    'event_time': '',
    'away_team': '',
    'home_team': '',
    'back': []
  }
  betForm: FormGroup

  selectedodds = 0
  constructor(
    private service: DataserviceService,
    ) { 
    this.results = [] 
    this.betdata = []
    this.leagues = []
    this.three()

    this.betForm = new FormGroup({
      odds: new FormControl(null, Validators.required),
      stakes: new FormControl(null, Validators.required)
    });
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
          if(data['league_name'] === ''){
            continue
          } else {
            this.tmp_odds_back = [0,0,0]
            
            // console.log('before tmp'+this.tmp_odds_back)
            // this.getOdds2(data['event_key'], data['event_live'] ?true:false)
            // console.log('after tmp'+this.tmp_odds_back)
            let temp = {
              'league_name': data['league_name'],
              'match_name': data['event_home_team'] + ' vs ' + data['event_away_team'],
              'event_date_start': data['event_date_start'],
              'fancy': data['event_live'] ? true : false,
              'sportbook': data['event_live'] ? true : false,
              'in_play': data['event_live'] ? true : false,
              'event_key': data['event_key'],
              'event_time': data['event_time'],
              'home_team': data['event_home_team'],
              'away_team': data['event_away_team'],
              'back': this.tmp_odds_back
            }
            // console.log(temp['back'])
            this.betdata.push(temp)
          }
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
                matches: [],
                odds: []
              }
              
              const index = this.leagues.findIndex((element) => element.name === array_of_leagues[lea])
              
              if( index !== -1)
              {
                this.leagues[index].matches.push(this.betdata[bets])
              }
              else
              {
                this.leagues.push(temp)
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
  
  details(data: BetData){
    
    this.detail=data
    // this.getOdds(data.event_key)

  }
  
  removeDuplicate(l: Array<String>){
    return [... new Set(l)]
  }

  getOdds(id: number){
    console.log(id)
    
    this.service.getodds(id)
    .subscribe(data => {
      let one, two, x
      one = JSON.parse(JSON.stringify(data))['result'][id]['1X2 - Full Time'][1]['888sport']
      two = JSON.parse(JSON.stringify(data))['result'][id]['1X2 - Full Time'][2]['888sport']
      x = JSON.parse(JSON.stringify(data))['result'][id]['1X2 - Full Time']['X']['888sport']

      this.back.push(one)
      this.back.push(two)
      this.back.push(x)

    })
  }

  getOdds2(id: number, live: boolean){
    console.log(id)
    this.service.getodds(id)
    .subscribe(data => {
      
      let one, two, x

      console.log(JSON.parse(JSON.stringify(data))['result'][id])
      console.log(JSON.parse(JSON.stringify(data))['result'][id])
      console.log(JSON.parse(JSON.stringify(data))['result'][id])

      one = JSON.parse(JSON.stringify(data))['result'][id]['1X2 - Full Time'][1]['888sport']
      two = JSON.parse(JSON.stringify(data))['result'][id]['1X2 - Full Time'][2]['888sport']
      x = JSON.parse(JSON.stringify(data))['result'][id]['1X2 - Full Time']['X']['888sport']
      this.tmp_odds_back.push(one)
      this.tmp_odds_back.push(two)
      this.tmp_odds_back.push(x)

    })
  }
  setodds(data: Leagues){
    for(let d of data.matches)
    {
      // console.log(d)
      this.service.getodds(d.event_key)
      .subscribe(data => {
        let one, two, x

        if(JSON.parse(JSON.stringify(data))['result'] === undefined){
          console.log('me undefined hun' + d.event_key)
        }else {

          if(JSON.parse(JSON.stringify(data))['result'][d.event_key]['1X2 - Full Time'] === undefined)
          {

            console.log('me defined hun '+ d.event_key+ ' '+JSON.parse(JSON.stringify(data))['result'][d.event_key]['Home/Away - FT including OT'][1]['10Bet'])
            if(JSON.parse(JSON.stringify(data))['result'][d.event_key]['Home/Away - FT including OT'][1]['10Bet'] === undefined){
              d.back[0] = JSON.parse(JSON.stringify(data))['result'][d.event_key]['Home/Away - FT including OT'][1]['1xBet']
              d.back[1] = JSON.parse(JSON.stringify(data))['result'][d.event_key]['Home/Away - FT including OT'][1]['1xBet']
              d.back[2] = JSON.parse(JSON.stringify(data))['result'][d.event_key]['Home/Away - FT including OT'][1]['1xBet']
            }else {
              
              d.back[0] = JSON.parse(JSON.stringify(data))['result'][d.event_key]['Home/Away - FT including OT'][1]['10Bet']
              d.back[1] = JSON.parse(JSON.stringify(data))['result'][d.event_key]['Home/Away - FT including OT'][1]['10Bet']
              d.back[2] = JSON.parse(JSON.stringify(data))['result'][d.event_key]['Home/Away - FT including OT'][1]['10Bet']
            }
          }else if(JSON.parse(JSON.stringify(data))['result'][d.event_key]['Home/Away - FT including OT'] === undefined){
            console.log('me fir undefined hun '+d.event_key+' ' + JSON.parse(JSON.stringify(data))['result'][d.event_key]['Home/Away - FT including OT'][1]['10Bet'])

          } else{

            // console.log(data)
            // console.log(JSON.parse(JSON.stringify(data))['result'][d.event_key]['1X2 - Full Time'][1]['888sport'])
            // console.log(JSON.parse(JSON.stringify(data))['result'][d.event_key]['1X2 - Full Time'][2]['888sport'])
            // console.log(JSON.parse(JSON.stringify(data))['result'][d.event_key]['1X2 - Full Time']['X']['888sport'])
            console.log('me defined hun '+ d.event_key)
            d.back[0] = JSON.parse(JSON.stringify(data))['result'][d.event_key]['1X2 - Full Time'][1]['888sport']
            d.back[1] = JSON.parse(JSON.stringify(data))['result'][d.event_key]['1X2 - Full Time'][2]['888sport']
            d.back[2] = JSON.parse(JSON.stringify(data))['result'][d.event_key]['1X2 - Full Time']['X']['888sport']
          }
            
        }

      })
    }
  }


}
