import {Router} from "express"
import userValidSchema from "../middleware/userValidatemiddleware"
import { register,signIn,resetLinkPass } from "../controllers/user"
import { emailUniqueness } from "../middleware/emailUniqueness"

const router = Router()


router.route("/login").post(signIn)
router.route("/reset-link").post(resetLinkPass)
router.route("/register").post(emailUniqueness,userValidSchema,register)

export default router


