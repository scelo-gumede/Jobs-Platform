import { Router } from "express";
import {shemaCompanyProfile} from "../middleware/profilemiddleware"
import { createProfile,updateProfile } from "../controllers/company";
import userRole from "../middleware/companyUserRole";

const router = Router()




router.route("/company-profile").post(userRole,shemaCompanyProfile,createProfile)
router.route("/updateProfile").put(userRole,shemaCompanyProfile,updateProfile)

export default router