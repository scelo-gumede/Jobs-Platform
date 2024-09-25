import mongoose,{mongo, Schema} from "mongoose";
import Joi from "joi"



const userProfile = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
        unique:true
    },
    cv:{
        type:String
    },
    jobExperirence:[
        {
            jobTitle:String,
            company:String,
            startDate:Date,
            endDate:Date,
            description:String
        }
    ]
},{
    timestamps:true
})

const experience = Joi.object({
    jobTitle:Joi.string(),
    company:Joi.string(),
    startDate:Joi.date(),
    endDate:Joi.date(),
    description:Joi.string()
})

export const schemaUserProfile = Joi.object({
    cv:Joi.string().required(),
    jobExperirence:Joi.array().items(experience)
})





export const UserProfile= mongoose.model("UserProfile",userProfile)