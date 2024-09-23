import mongoose,{Schema} from "mongoose";


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
        maxlength:[100,"your description should have atmost 100 characters"],
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
        required:true
    }
},{
    timestamps:true
})


export default mongoose.model("CompanyProfile",companyProfileSchema)