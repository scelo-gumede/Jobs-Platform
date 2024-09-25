import { Router } from "express";
import { apply } from "../controllers/application";
import userRoleAuth from "../middleware/userRole";

const router = Router()

router.route("/apply/:id").post(userRoleAuth,apply)

export default router