import express from "express";
import { addBlog } from "../controllers/blogController.js";
import upload from "../middleware/multler.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/add", auth, upload.single("image"), addBlog);

export default router