// controllers/applicationController.js
import Application from "../models/Application.js";

// Create new application
export const createApplication = async (req, res) => {
  try {
    const newApp = new Application(req.body);
    const savedApp = await newApp.save();
    res.status(201).json(savedApp);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all applications
export const getApplications = async (req, res) => {
  try {
    const apps = await Application.find().sort({ appliedDate: -1 });
    res.json(apps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
