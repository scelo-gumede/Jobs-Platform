import { StatusCodes } from "http-status-codes";
import { Job } from "../models/jobsSchema";



export const postJob = async(req,res)=>{
    const{_id}=req.user

    const jobPosted = await Job.create({...req.body,createdBy:_id})


    res.status(StatusCodes.CREATED).json({jobPosted})

}

export const updateJOb = async(req,res)=>{
    
    const updated= await Job.findByIdAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})

    res.status(StatusCodes.ACCEPTED).json({updated})
}