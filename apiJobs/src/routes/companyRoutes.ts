import { Router } from "express";
import {shemaCompanyProfile} from "../middleware/profilemiddleware"
import { createProfile,updateProfile } from "../controllers/company";

const router = Router()




router.route("/company-profile").post(shemaCompanyProfile,createProfile)
router.route("/updateProfile").put(shemaCompanyProfile,updateProfile)

export default router