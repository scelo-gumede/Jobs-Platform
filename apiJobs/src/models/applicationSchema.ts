
import mongoose,{Schema} from "mongoose";
import Joi from "joi"


const applicationSchema = new Schema({
    userApplied : {
        type : Schema.Types.ObjectId,
        ref:"User",
        required:true,
        unique:true
    },
    job:{
        type:Schema.Types.ObjectId,
        ref:"Job",
        required:true
    },
    coverLetter:{
        type:String,
    },
    status:{
        type:String,
        enum:["applied","interview","rejected","hired"],
        default:"applied"
    }
},
{
    timestamps:true
})


export const applicationJoi = Joi.object({
    coverLetter:Joi.string().required()
})


export const Application = mongoose.model("application",applicationSchema)