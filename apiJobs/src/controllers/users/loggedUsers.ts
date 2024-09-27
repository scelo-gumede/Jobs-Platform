import { User } from "../../models/auth/userSchema";
import { UserProfile } from "../../models/users/userProfileSchema";
import { StatusCodes } from "http-status-codes";



export const userprofile = async(req,res)=>{
    const{_id}=req.user

    const createdProfile = await UserProfile.create({...req.body,userId:_id})

    res.status(StatusCodes.CREATED).json({createdProfile})
}


export const updateprofile =async(req,res)=>{

    const{_id}=req.user

    const userpro = await UserProfile.findByIdAndUpdate({_id:req.params.id},{...req.body},{new:true,runValidators:true})

    res.status(StatusCodes.OK).json({userpro})
}