import { StatusCodes } from "http-status-codes"
import { generateError } from "../errors/customError"
import { User } from "../models/userSchema"


export const emailUniqueness = async(req,res,next)=>{
    const{email}=req.body
    const existingEmail = await User.findOne({email})
    if(existingEmail){
        throw generateError("email already exist",StatusCodes.BAD_REQUEST)
    }
    next()
}