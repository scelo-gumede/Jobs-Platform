import { StatusCodes } from "http-status-codes"
import { generateError } from "../../errors/customError"


const userRole = async(req,res,next)=>{

    if(req.user.role !== "company"){
        next(generateError("user is not a company",StatusCodes.BAD_REQUEST))
    }

    next()
}

export default userRole