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
  makeme: boolean =false
  results: any;
  betdata: Array<BetData> 
  leagues: Array<Leagues>
  activeElement: Array<BetData> = []
  pressed = false 
  pressed2 = false
  back: Array<number> = []
  tmp_odds_back: Array<number> = []
  selectedLeague:String = ''
  detail!: BetData 
  amount: number = 100
  betForm: FormGroup 
  oddsData: Array<object> = [{id: 0, one:0, two: 0, x:0}]

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
        // console.log(this.results[0])
        
        for(let data of this.results)
        {
          if(data['league_name'] === '')
          {
            continue
          } 
          else 
          {
            this.tmp_odds_back = [0,0,0]
            data['back'] = this.tmp_odds_back
            this.betdata.push(data)
          }
        }


        console.log(this.betdata[0])
        let l = []
        
        
        for(let data of this.betdata)
        {
          l.push(data.league_name)
        }

        let array_of_leagues = this.removeDuplicate(l)
        
// got array of leagues above

        for(let lea in array_of_leagues)
        {
          for(let bets in this.betdata)
          {
            
            if(this.betdata[bets].league_name === array_of_leagues[lea] &&  true)
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


  
  setodds(data: Leagues){
    console.log('i am here')
    for(let d of data.matches)
    {
      // console.log(d)
      this.service.getodds(d.event_key)
      .subscribe(data => {
        let one, two, x
        let result = JSON.parse(JSON.stringify(data))['result']

        if( result === undefined)
        {
          console.log('me undefined hun' + d.event_key)

        }else {

          if(result[d.event_key]['1X2 - Full Time'] === undefined)
          {

            console.log('me defined hun '+ d.event_key+ ' '+result[d.event_key]['Home/Away - FT including OT'][1]['10Bet'])

            if(result[d.event_key]['Home/Away - FT including OT'][1]['10Bet'] === undefined){
              one = result[d.event_key]['Home/Away - FT including OT'][1]['1xBet']
              two = result[d.event_key]['Home/Away - FT including OT'][1]['1xBet']
              x = result[d.event_key]['Home/Away - FT including OT'][1]['1xBet']
            }else {
              
              one = result[d.event_key]['Home/Away - FT including OT'][1]['10Bet']
              two = result[d.event_key]['Home/Away - FT including OT'][1]['10Bet']
              x = result[d.event_key]['Home/Away - FT including OT'][1]['10Bet']
            }
          }else if(result[d.event_key]['Home/Away - FT including OT'] === undefined){
            console.log('me fir undefined hun '+d.event_key+' ' + result[d.event_key]['Home/Away - FT including OT'][1]['10Bet'])

          } else{

            // console.log(data)
            // console.log(result[d.event_key]['1X2 - Full Time'][1]['888sport'])
            // console.log(result[d.event_key]['1X2 - Full Time'][2]['888sport'])
            // console.log(result[d.event_key]['1X2 - Full Time']['X']['888sport'])
            console.log('me defined hun '+ d.event_key)



            one = JSON.parse(JSON.stringify(data))['result'][d.event_key]['1X2 - Full Time'][1]['888sport']
            two = JSON.parse(JSON.stringify(data))['result'][d.event_key]['1X2 - Full Time'][2]['888sport']
            x = JSON.parse(JSON.stringify(data))['result'][d.event_key]['1X2 - Full Time']['X']['888sport']
          }
            
        }

        d.back[0] = one
        d.back[1] = two
        d.back[2] = x
        
        


      })

    }
    

    
  }
  
 
}
