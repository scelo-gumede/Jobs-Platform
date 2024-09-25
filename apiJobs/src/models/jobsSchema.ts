import mongoose,{Schema} from "mongoose";
import Joi, { required } from "joi"




const jobsSchema = new Schema({
    title :{type:String,
            required:true
    },
    description:{
        type:String,
        minlength:[10,"the minimum characters is 10"],
        maxlength:[200,"the maximum length of the characters is 200"],
        required:true
    },
    location:String,
    salary:{
        type:Number,
        required:true
    },
    requirements:{
        type:[String],
        required:true
    },
    isActive:{
        type:Boolean,
        default:false
    },
    tags:[String],
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{
    timestamps:true
})


export const jobsValidSchema = Joi.object({
    title:Joi.string().required(),
    description:Joi.string().min(10).max(200).required(),
    location:Joi.string().required(),
    salary:Joi.number().required(),
    requirements:Joi.array().items(Joi.string().required()).min(1),
    isActive:Joi.boolean(),
    tags:Joi.array().items(Joi.string())
})


export const Job = mongoose.model("Job",jobsSchema)