import { StatusCodes } from "http-status-codes"
import jsonwebtoken from "jsonwebtoken"
import {User} from "../models/userSchema"
import { unauthenticated } from "../errors/unathenticated"

const jwt =jsonwebtoken

const auth =async(req,res,next)=>{

    const authorization = req.headers

    if(!authorization || !authorization.startsWith("Bearer ")){
        next(unauthenticated)
    }
    const token = authorization.split(" ")[1]
    const decoded = await jwt.verify(token,"scelostoken")
    const{userId}=decoded

    const user = User.findById({_id:userId})

    if(!user){
        next(unauthenticated)
    }else{
        req.user=user
        next()
    }

}

export default auth