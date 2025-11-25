import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";  // ✅ ADD THIS

dotenv.config(); // MUST BE FIRST

const app = express();
app.use(express.json());

connectDB();

// Home route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Mount Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);   // ✅ ADD THIS LINE

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running at port ${PORT}`));
