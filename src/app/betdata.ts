
export class BetData {
    match_name: String
    event_date_start: String
    fancy: boolean
    sportbook: boolean
    in_play: boolean
    league_name: String 
    event_key: number
    event_time: String   
    home_team: String
    away_team: String
    back: Array<number>

    constructor(
        match_name: String,
        event_date_start: string,
        fancy: boolean, 
        sportbook: boolean, 
        in_play: boolean,
        league_name: String,
        event_key: number,
        event_time: String,
        home_team: String,
        away_team: String,
        back: Array<number>
    )
    {
        this.match_name = match_name
        this.event_date_start = event_date_start
        this.fancy = fancy
        this.sportbook = sportbook
        this.in_play = in_play
        this.league_name = league_name    
        this.event_key = event_key
        this.event_time = event_time
        this.home_team = home_team
        this.away_team = away_team
        this.back = back 
    }
}