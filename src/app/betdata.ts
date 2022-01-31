
export class BetData {
    // match_name: String
    // event_date_start: String
    // fancy: boolean
    // sportbook: boolean
    // in_play: boolean
    // league_name: String 
    // event_key: number
    // event_time: String   
    // home_team: String
    // away_team: String
    back: Array<number>

    // event_date_stop: String
    // service_home: String //bowlin or batting
    // service_away: String 
    // home_score: String
    // away_score: String
    // event_status_info: String
    

    event_key: number
    event_date_start: String
    event_date_stop: String
    event_time: String
    event_home_team: String
    home_team_key: String
    event_away_team: String
    away_team_key: String
    event_service_home: String
    event_service_away: String
    event_home_final_result: String
    event_away_final_result: String
    event_home_rr: String
    event_away_rr: String
    event_status: String
    event_status_info: String
    country_name: String
    league_name: String
    league_key: String
    league_round: String
    league_season: String
    event_live: String
    event_home_team_logo: String
    event_away_team_logo: String

    // scorecard: String
    // ball_by_ball: String
    // wickets: String
    // extra: String
    // lineups: String




    constructor(
        // match_name: String,
        // event_date_start: string,
        // fancy: boolean, 
        // sportbook: boolean, 
        // in_play: boolean,
        // league_name: String,
        // event_key: number,
        // event_time: String,
        // home_team: String,
        // away_team: String,
        // back: Array<number>,
        // event_date_stop: String,
        // service_home: String, //bowlin or batting
        // service_away: String, 
        // home_score: String,
        // away_score: String,
        // event_status_info: String,
        event_key: number,
        event_date_start: String,
        event_date_stop: String,
        event_time: String,
        event_home_team: String,
        home_team_key: String,
        event_away_team: String,
        away_team_key: String,
        event_service_home: String,
        event_service_away: String,
        event_home_final_result: String,
        event_away_final_result: String,
        event_home_rr: String,
        event_away_rr: String,
        event_status: String,
        event_status_info: String,
        country_name: String,
        league_name: String,
        league_key: String,
        league_round: String,
        league_season: String,
        event_live: String,
        event_home_team_logo: String,
        event_away_team_logo: String,
        back: Array<number>,

    )
    {
    //     this.match_name = match_name
    //     this.event_date_start = event_date_start
    //     this.fancy = fancy
    //     this.sportbook = sportbook
    //     this.in_play = in_play
    //     this.league_name = league_name    
    //     this.event_key = event_key
    //     this.event_time = event_time
    //     this.home_team = home_team
    //     this.away_team = away_team
        this.back = back 

    //     this.event_date_stop = event_date_stop
    //     this.service_home = service_home //bowlin or batting
    //     this.service_away = service_away 
    //     this.home_score = home_score
    //     this.away_score = away_score
    //     this.event_status_info = event_status_info
            this.event_key = event_key
            this.event_date_start = event_date_start
            this.event_date_stop = event_date_stop
            this.event_time = event_time
            this.event_home_team = event_home_team
            this.home_team_key = home_team_key
            this.event_away_team = event_away_team
            this.away_team_key = away_team_key
            this.event_service_home = event_service_home
            this.event_service_away = event_service_away
            this.event_home_final_result = event_home_final_result
            this.event_away_final_result = event_away_final_result
            this.event_home_rr = event_home_rr
            this.event_away_rr = event_away_rr
            this.event_status = event_status
            this.event_status_info = event_status_info
            this.country_name = country_name
            this.league_name = league_name
            this.league_key = league_key
            this.league_round = league_round
            this.league_season = league_season
            this.event_live = event_live
            this.event_home_team_logo = event_home_team_logo
            this.event_away_team_logo = event_away_team_logo

    }
}


// event_key: '8082',
// event_date_start: '2022-01-31',
// event_date_stop: '2022-01-31',
// event_time: '09:00',
// event_home_team: 'South Africa W',
// home_team_key: '23',
// event_away_team: 'West Indies W',
// away_team_key: '22',
// event_service_home: 'Batting team',
// event_service_away: 'Bowling team',
// event_home_final_result: '48/0 (13.4)',
// event_away_final_result: '',
// event_home_rr: 'RR 3.51',
// event_away_rr: '',
// event_status: 'RSA Innings',
// event_status_info: 'West Indies W won the toss and elected to bowl.',
// country_name: 'World',
// league_name: 'One Day International Women',
// league_key: '9860',
// league_round: '',
// league_season: '2022',
// event_live: '1',
// event_home_team_logo: 'https://api.api-cricket.com/logo/23_south-africa-w.png',
// event_away_team_logo: 'https://api.api-cricket.com/logo/22_west-indies-w.png',
// scorecard: [],
// ball_by_ball: [],
// wickets: [],
// extra: [],
// lineups: { home_team: [Object], away_team: [Object] }
