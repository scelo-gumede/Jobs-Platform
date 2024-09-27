import { Router } from "express";
import userRole from "../../middleware/company/companyUserRole";
import { postJob, updateJOb } from "../../controllers/company/jobs";
import jobsMiddleware from "../../middleware/company/jobValidator";


const router = Router()


router.route("/post-job").post(userRole,jobsMiddleware,postJob)
router.route("/update-job/:id").put(userRole,jobsMiddleware,updateJOb)

export default router