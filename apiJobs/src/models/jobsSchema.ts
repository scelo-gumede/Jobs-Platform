import mongoose,{Schema} from "mongoose";



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



export default mongoose.model("Job",jobsSchema)