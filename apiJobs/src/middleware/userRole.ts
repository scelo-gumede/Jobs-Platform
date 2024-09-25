import { StatusCodes } from "http-status-codes"
import { generateError } from "../errors/customError"



const userRoleAuth = async (req,res,next)=>{

    if(req.user.role !== "user"){
        return next(generateError("user is not a user",StatusCodes.BAD_REQUEST))
    }

    next()

}

export default userRoleAuth