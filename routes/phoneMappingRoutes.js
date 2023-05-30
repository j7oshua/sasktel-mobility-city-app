import express from "express";
const router = express.Router();
import { createPhoneMapping, getAllPhoneMappings, deletePhoneMapping } from "../controllers/phoneMappingController.js";

// Current routes for viewing, creating, and deleting phone mappings.
router.route("/phone-mapping").post(createPhoneMapping);
router.route("/view-phone-mappings").get(getAllPhoneMappings);
router.route("/:phonenumber").delete(deletePhoneMapping)

export default router;