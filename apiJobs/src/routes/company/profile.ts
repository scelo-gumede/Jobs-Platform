import { Router } from "express";
import {shemaCompanyProfile} from "../../middleware/company/profilemiddleware"
import { createProfile,updateProfile } from "../../controllers/company/company";
import userRole from "../../middleware/company/companyUserRole";

const router = Router()




router.route("/company-profile").post(userRole,shemaCompanyProfile,createProfile)
router.route("/updateProfile").put(userRole,shemaCompanyProfile,updateProfile)

export default router