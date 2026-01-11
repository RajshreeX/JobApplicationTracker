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

// Update application
export const updateApplication = async (req, res) => {
  try {
    const updatedApp = await Application.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedApp) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.json(updatedApp);
  } catch (error) {
  if (error.name === "CastError") {
    return res.status(400).json({ message: "Invalid application ID" });
  }
  res.status(500).json({ message: error.message });
}

};

// Delete application
export const deleteApplication = async (req, res) => {
  try {
    const deletedApp = await Application.findByIdAndDelete(req.params.id);

    if (!deletedApp) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.json({ message: "Application deleted successfully" });
  } catch (error) {
  if (error.name === "CastError") {
    return res.status(400).json({ message: "Invalid application ID" });
  }
  res.status(500).json({ message: error.message });
}

};

