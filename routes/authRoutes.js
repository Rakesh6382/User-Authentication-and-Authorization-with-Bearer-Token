import express from "express";
import { body } from "express-validator";
import { register, login } from "../controllers/authController.js";

const router = express.Router();

router.post("/register",
  [
    body("username").trim().isLength({ min: 2 }).withMessage("username min 2 chars"),
    body("email").isEmail().withMessage("valid email required"),
    body("password").isLength({ min: 6 }).withMessage("password min 6 chars")
  ],
  register
);

router.post("/login",
  [
    body("email").isEmail().withMessage("valid email required"),
    body("password").exists().withMessage("password required")
  ],
  login
);

export default router;
