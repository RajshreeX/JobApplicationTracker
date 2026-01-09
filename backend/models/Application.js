// models/Application.js
import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    role: { type: String, required: true },
    status: {
      type: String,
      enum: ["Applied", "Interview", "Offer", "Rejected"],
      default: "Applied",
    },
    source: { type: String, required: true },
    appliedDate: { type: Date, default: Date.now },
    notes: { type: String },
  },
  { timestamps: true }
);

const Application = mongoose.model("Application", applicationSchema);
export default Application;
