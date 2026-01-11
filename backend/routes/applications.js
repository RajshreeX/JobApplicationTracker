// routes/applications.js
import express from "express";
import { createApplication, getApplications, updateApplication, deleteApplication } from "../controllers/applicationController.js";

const router = express.Router();

router.post("/", createApplication); // Create
router.get("/", getApplications);    // Read all
router.put("/:id", updateApplication);
router.delete("/:id", deleteApplication);

export default router;
