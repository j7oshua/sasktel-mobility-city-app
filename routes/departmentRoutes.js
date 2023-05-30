import express from "express";
const router = express.Router();
import { getAllDepartments, deleteDepartment, createDepartment } from "../controllers/departmentController.js";

// Current routes for viewing, creating, and deleting departments.
router.route("/department").post(createDepartment);
router.route("/view-departments").get(getAllDepartments);
router.route("/:id").delete(deleteDepartment);

export default router;