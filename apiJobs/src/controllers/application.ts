import { StatusCodes } from "http-status-codes";
import { generateError } from "../errors/customError";
import { Application,applicationJoi } from "../models/applicationSchema";



export const apply = async(req,res,next)=>{

    const{error}=applicationJoi.validate(req.body)
    
    if(error){
        return next(generateError(error.details[0].message,StatusCodes.BAD_REQUEST))
    }

    const{_id}=req.user

    const jobAppliedFor = await Application.create({userApplied:_id,job:req.params.id,...req.body})

    res.status(StatusCodes.CREATED).json({jobAppliedFor})
}