import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { getMe } from "../controllers/userController.js";
import User from "../models/User.js";

const router = express.Router();

// Get logged-in user
router.get("/me", authMiddleware, getMe);

// Get all users
router.get("/", authMiddleware, async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
