import { timeLog } from "console";
import mongoose,{Schema} from "mongoose";


const applicationSchema = new Schema({
    userApplied : {
        type : Schema.Types.ObjectId,
        ref:"User",
        required:true
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




export default mongoose.model("application",applicationSchema)