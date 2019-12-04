import { User } from './user.class';

export class Request {
    id: number; 
    user: User; 
    description: string; 
    justification: string; 
    dateNeeded: Date; 
    deliveryMode: string; 
    status: string; 
    total: number; 
    reasonForRejection: string; 
    submittedDate: Date;

    constructor(id: number = 0, user: User= new User(), description: string ="",
    justification: string = "", dateNeeded: Date= new Date(), deliveryMode: String = "",status: string= "", total: number =0, reasonForRejection: string="",submittedDate: Date = new Date()){

    }

}
