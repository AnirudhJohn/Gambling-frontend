import { LoginServiceService } from "../Auth/login-service.service"
import { DataserviceService } from "./dataservice.service"


export class User {
    username: String
    isActive: Boolean
    children: Array<String>
    money: number
    parent: String
    role: String

    constructor(username: String, isActive: boolean, children: [], money: number, parent: String,role: String
    ){
        this.username = username
        this.isActive = isActive
        this.children = children
        this.money = money
        this.parent = parent
        this.role = role
    }

}