import { InformationUser } from "./user"


export interface Store {
    logged: boolean
    user: InformationUser
}
