import { StatusCodes } from "http-status-codes"
import jsonwebtoken from "jsonwebtoken"
import {User} from "../models/userSchema"
import { unauthenticated } from "../errors/unathenticated"

const jwt =jsonwebtoken

const auth =async(req,res,next)=>{

    const authorization = req.headers['authorization'];
    
    if (!authorization || !authorization.startsWith("Bearer ")) {
        return res.status(401).json({ message: "User not authenticated" });
    }
    
    const token = authorization.split(" ")[1]
    const decoded = await jwt.verify(token,process.env.JWT_TOKEN)
    const{userId}=decoded

    const user =await User.findById({_id:userId})

    

    if(!user){
        throw new Error("user not authenticated")
    }else{
        req.user=user
        next()
    }

}

export default auth