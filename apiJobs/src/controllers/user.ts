import {User} from "../models/userSchema"
import { StatusCodes } from "http-status-codes"
import { generateError } from "../errors/customError"
import { unauthenticated } from "../errors/unathenticated"
import { transporter } from "../server"


export const register = async (req,res)=>{
    const user = await User.create({...req.body})
    const token = user.generateWT()
    res.status(StatusCodes.CREATED).json({token})
}

export const signIn = async (req,res)=>{
    const{password,email}=req.body
    if(!password || !email ){
        throw generateError("please enter all the require",StatusCodes.BAD_REQUEST)
    }
    const user = await User.findOne({email:email})
    if(!user){
        throw unauthenticated
    }
    const compared =await user.comparePass(password)
    if(!compared){
        throw generateError("passsword entered is incorrect",StatusCodes.BAD_REQUEST)
    }
    const token =user.generateWT()
    res.status(StatusCodes.OK).json({token})
}

export const resetLinkPass = async(req,res)=>{
    const{email}=req.body
    if(!email){
        throw generateError("please provide email",StatusCodes.BAD_REQUEST)
    }

    const user = await User.findOne({email})
    if(!user){
        throw generateError("user does not exist",StatusCodes.BAD_REQUEST)
    }

    
    const token = user.generateWT()

    const resetLink = `<a href="www.facebook.com">https/scelosBackend link ${token}</a>`

    const mailOptions = {
        from:process.env.GMAIL_USER,
        to:email,
        subject:"email reset",
        html:`<p>click the link below</p> <a href="www.facebook.com">${resetLink}</a>`
    }

    await transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            throw generateError("email not sent",StatusCodes.BAD_REQUEST)
        }

        res.status(StatusCodes.OK).json({msg:info.messageId})
    })
    

    

}