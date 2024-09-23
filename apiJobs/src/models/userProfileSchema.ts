import mongoose,{mongo, Schema} from "mongoose";


const userProfile = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
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




export default mongoose.model("Userprofile",userProfile)