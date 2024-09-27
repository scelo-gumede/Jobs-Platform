import { StatusCodes } from "http-status-codes"

const notFound = (req,res)=>{
    res.status(StatusCodes.BAD_REQUEST).json({msg:"page not found"})
}

export default notFound