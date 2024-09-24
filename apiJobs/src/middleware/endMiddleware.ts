import { StatusCodes } from "http-status-codes"


const errMiddleware = (err, req,res,next)=>{
    res.status(err.status|| 400).json({msg:err.message})
}


export default errMiddleware