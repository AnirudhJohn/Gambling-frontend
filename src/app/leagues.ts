import { BetData } from "./betdata"

export class Leagues {
    name: String
    matches: Array<BetData>

    constructor(
    name: String,
    matches: Array<BetData>
        )
    {
        this.matches = matches
        this.name = name
    }
}