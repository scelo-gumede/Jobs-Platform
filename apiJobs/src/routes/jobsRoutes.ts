import { Router } from "express";
import userRole from "../middleware/companyUserRole";
import { postJob, updateJOb } from "../controllers/jobs";
import jobsMiddleware from "../middleware/jobValidator";


const router = Router()


router.route("/post-job").post(userRole,jobsMiddleware,postJob)
router.route("/update-job/:id").put(userRole,jobsMiddleware,updateJOb)

export default router