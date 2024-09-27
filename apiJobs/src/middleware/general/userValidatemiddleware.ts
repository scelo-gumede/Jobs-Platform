import { StatusCodes } from "http-status-codes";
import { generateError } from "../../errors/customError";
import {schema} from "../../models/auth/userSchema"


const userValidSchema = async(req,res,next)=>{
    const {error}=schema.validate(req.body)
    if(error){
        next(generateError(error.details[0].message,StatusCodes.BAD_REQUEST))
    }
    next()
}

export default userValidSchema