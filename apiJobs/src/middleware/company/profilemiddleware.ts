import { StatusCodes } from "http-status-codes";
import { schemaProfile } from "../../models/company/companyProfileSchema";
import { generateError } from "../../errors/customError";


export const shemaCompanyProfile =(req,res,next)=>{
    const{error}=schemaProfile.validate(req.body)

    if(error){
        return next(generateError(error.details[0].message,StatusCodes.BAD_REQUEST))
    }
    next()
}