// routes/applications.js
import express from "express";
import { createApplication, getApplications } from "../controllers/applicationController.js";

const router = express.Router();

router.post("/", createApplication); // Create
router.get("/", getApplications);    // Read all

export default router;
