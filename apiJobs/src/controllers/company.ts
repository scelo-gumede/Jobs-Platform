import { StatusCodes } from "http-status-codes";
import { CompanyProfile } from "../models/companyProfileSchema";
import { User } from "../models/userSchema";


export const createProfile = async(req,res)=>{

    const{_id}=req.user
    if(req.user.role !== "company"){
        res.status(StatusCodes.BAD_REQUEST).json({msg:"user is not a company"})
    }
    const profile = await CompanyProfile.create({...req.body,companyId:_id})

    res.status(StatusCodes.CREATED).json({profile})
}

export const updateProfile = async(req,res)=>{
    const{_id}=req.user

    const profile = await CompanyProfile.find({companyId:_id})

    console.log(profile[0]._id)
    const profileId= profile[0]._id

    const updated = await CompanyProfile.findByIdAndUpdate({_id:profileId},
        req.body,{
            new:true,
            runValidators:true
        }
    )

    res.status(StatusCodes.OK).json({updated})

}