import { Router } from "express";
import schemaValidation from "../middleware/userProfileValidate";
import { userprofile,updateprofile } from "../controllers/loggedUsers";
import userRoleAuth from "../middleware/userRole";

const router = Router()


router.route("/userProfile/update").post(userRoleAuth,schemaValidation,userprofile)
router.route("/userProfile/update/:id").post(userRoleAuth,schemaValidation,updateprofile)


export default router