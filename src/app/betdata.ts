
export class BetData {
    match_name: String
    event_date_start: String
    fancy: boolean
    sportbook: boolean
    in_play: boolean
    league_name: String    

    constructor(
        match_name: String,
        event_date_start: string,
        fancy: boolean, 
        sportbook: boolean, 
        in_play: boolean,
        league_name: String    

    )
    {
        this.match_name = match_name
        this.event_date_start = event_date_start
        this.fancy = fancy
        this.sportbook = sportbook
        this.in_play = in_play
        this.league_name = league_name    

    }
}