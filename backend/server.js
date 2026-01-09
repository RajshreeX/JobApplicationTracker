// server.js
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import applicationRoutes from "./routes/applications.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Routes
app.use("/api/applications", applicationRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
