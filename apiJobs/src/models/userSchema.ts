import mongoose,{Schema} from "mongoose"
import bcrypt from "bcryptjs"
import jsonwebtoken from "jsonwebtoken"
import joi from "joi"

const jwt = jsonwebtoken
const Joi = joi

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        minlength:[2,"user cannot have less that 2 characters"],
        maxlength:[50,"user cannot have more than 50 characters"],
        trim:true
    },
    role:{
        type:String,
        enum:["user","company","admin"],
        required:true,
        default:"user"
    },
    email:{
        type:String,
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        minlength:[6,"a minimum of 6 characters for the password"],
    }
},{
    methods:{
        generateWT:function(){
            return jwt.sign()
        }
    },
    timestamps:true
})



userSchema.pre("save",async function(next){
    if(!this.isModified("password"))return next()
    const salt = await bcrypt.genSalt(10)
    this.password= await bcrypt.hash(this.password,salt)
    next()
})


export const schema = Joi.object({
    name:Joi.string().min(3).max(20).required(),
    role:Joi.string().valid("user","company","admin").required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(6).required()
})








export const  User = mongoose.model("User",userSchema)