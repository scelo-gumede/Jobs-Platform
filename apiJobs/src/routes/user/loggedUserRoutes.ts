import { Router } from "express";
import schemaValidation from "../../middleware/user/userProfileValidate";
import { userprofile,updateprofile } from "../../controllers/users/loggedUsers";
import userRoleAuth from "../../middleware/user/userRole";

const router = Router()


router.route("/userProfile/update").post(userRoleAuth,schemaValidation,userprofile)
router.route("/userProfile/update/:id").post(userRoleAuth,schemaValidation,updateprofile)


export default router