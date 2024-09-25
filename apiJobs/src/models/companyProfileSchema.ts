import mongoose,{Schema} from "mongoose";
import Joi from "joi"

const companyProfileSchema= new Schema({
    companyName:{
        type:String,
        required:true,
        minlength:[2,"the company name cant have less than 3 characters"],
        maxlength:[50,"the company name can't have more than 50 characters"]
    },
    description:{
        type:String,
        required:true,
        minlength:[10,"your description should have atleast 10 characters"],
        maxlength:[400,"your description should have atmost 100 characters"],
    },
    location:{
        type:String,
        required:true
    },
    website:{
        type:String,
    },
    companyId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
        unique:true
    }
},{
    timestamps:true
})


export const schemaProfile = Joi.object({
    companyName:Joi.string().min(3).max(50).required(),
    description:Joi.string().min(10).max(300).required(),
    location:Joi.string().required(),
    website:Joi.string().required(),
})



export const CompanyProfile= mongoose.model("CompanyProfile",companyProfileSchema)