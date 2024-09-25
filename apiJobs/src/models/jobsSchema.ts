import mongoose,{Schema} from "mongoose";
import Joi from "joi"




const jobsSchema = new Schema({
    title :String,
    description:{
        type:String,
        minlength:[10,"the minimum characters is 10"],
        maxlength:[200,"the maximum length of the characters is 200"],
        required:true
    },
    location:String,
    salary:Number,
    requirements:{
        type:[String]
    },
    isActive:{
        type:Boolean,
        default:false
    },
    tags:[String]
},{
    timestamps:true
})


export const applicationSchema = Joi.object({
    title:Joi.string().required(),
    description:Joi.string().min(10).max(200).required(),
    location:Joi.string().required(),
    salary:Joi.number().required(),
    requirement:Joi.array().items(Joi.string().required()).min(1),
    isActive:Joi.boolean(),
    tags:Joi.array().items(Joi.string())
})


export const Job = mongoose.model("Job",jobsSchema)