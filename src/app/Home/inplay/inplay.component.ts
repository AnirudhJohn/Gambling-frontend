import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BetData } from 'src/app/betdata';
import { DataserviceService } from 'src/app/Dashboard/dataservice.service';

@Component({
  selector: 'app-inplay',
  templateUrl: './inplay.component.html',
  styleUrls: ['./inplay.component.css']
})
export class InplayComponent implements OnInit {

  pressed: boolean = false
  activeElement!: BetData
  allData: Array<BetData> = []
  allEventKeys: Array<number> = []
  noLiveMatches: boolean = false
  constructor(private service: DataserviceService,
              private router: Router) { 

  }

  ngOnInit(): void {
    this.getAllLiveData()
    
    
  }

  details(data: BetData){

  }
  getAllLiveData(){
    
    this.service.four()
    .subscribe( data =>{
      if(JSON.parse(JSON.stringify(data))['success'] == 1){
        
        let arr = JSON.parse(JSON.stringify(data))['result']
        
        if(arr === undefined) {
          this.noLiveMatches = true
        } else {

          for(let data of arr ){
            data['back'] = [0,0,0]   
          }
          
          this.allData = arr
          
          console.log("all data recieved and added with back "+this.allData)
          this.getAllOdds()

        }
      } else {
          this.router.navigate(['/dash'])
        
      }
    })
    
  }
  getAllOdds(){
    console.log(this.allData)
    for(let d of this.allData)
    {

      this.service.getodds(d.event_key)
      .subscribe( data => {
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
    console.log(this.allData)
  }
}
