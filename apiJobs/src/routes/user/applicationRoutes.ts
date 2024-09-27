import { Router } from "express";
import { apply } from "../../controllers/users/application";
import userRoleAuth from "../../middleware/user/userRole";

const router = Router()

router.route("/apply/:id").post(userRoleAuth,apply)

export default router