import { StatusCodes } from "http-status-codes"
import { generateError } from "../errors/customError"
import { schemaUserProfile } from "../models/userProfileSchema"


const schemaValidation = async(req,res,next)=>{
    const{error}= schemaUserProfile.validate(req.body)

    console.log(error)

    if(error){
        return next(generateError(error.details[0].message,StatusCodes.BAD_REQUEST))
    }
    next()
}

export default schemaValidation