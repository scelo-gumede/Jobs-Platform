import {Router} from "express"
import userValidSchema from "../../middleware/general/userValidatemiddleware"
import { register,signIn,resetLinkPass } from "../../controllers/auth/user"
import { emailUniqueness } from "../../middleware/general/emailUniqueness"

const router = Router()


router.route("/login").post(signIn)
router.route("/reset-link").post(resetLinkPass)
router.route("/register").post(emailUniqueness,userValidSchema,register)

export default router


