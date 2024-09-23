import {Router} from "express"
import userValidSchema from "../middleware/userValidatemiddleware"

const router = Router()


router.route("/login").post((req,res)=> res.send("login"))
router.route("/register").post(userValidSchema,(req,res)=> res.json({data:req.body}))

export default router


