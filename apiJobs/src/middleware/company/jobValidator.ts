import { StatusCodes } from "http-status-codes";
import { generateError } from "../../errors/customError";
import { jobsValidSchema } from "../../models/company/jobsSchema";



const jobsMiddleware = async(req,res,next)=>{
    const{error}=jobsValidSchema.validate(req.body)

    if(error){
        return next(generateError(error.details[0].message,StatusCodes.BAD_REQUEST))
    }
    next()
}

export default jobsMiddleware