import { BetData } from "./betdata"

export class Leagues {
    name: String
    matches: Array<BetData>
    odds: Array<{one: number, two:number, x:number}>

    constructor(
    name: String,
    matches: Array<BetData>,
    odds: Array<{one: number, two:number, x:number}>
        )
    {
        this.matches = matches
        this.name = name
        this.odds = odds
    }
}