import { StatusCodes } from "http-status-codes";


class CustomError extends Error{
    status:number
    constructor(message,status:number){
        super(message)
        this.status= status
        Object.setPrototypeOf(this,CustomError.prototype)
    }

}

export const generateError= (msg,code)=>{
    return new CustomError(msg,code)
}

