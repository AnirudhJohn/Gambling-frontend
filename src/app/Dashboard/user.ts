import { LoginServiceService } from "../Auth/login-service.service"
import { DataserviceService } from "./dataservice.service"


export class User {
    username: String
    isActive: Boolean
    children: Array<String>
    money: number
    parent: string

    constructor(username: string, isActive: boolean, children: [], money: number, parent: string,
    ){
        this.username = username
        this.isActive = isActive
        this.children = children
        this.money = money
        this.parent = parent
    }

}