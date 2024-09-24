import { StatusCodes } from "http-status-codes";
import { schemaProfile } from "../models/companyProfileSchema";


export const shemaCompanyProfile =(req,res,next)=>{
    const{error}=schemaProfile.validate(req.body)

    if(error){
        res.status(StatusCodes.BAD_REQUEST).json({msg:error.details[0].message})
    }
    next()
}