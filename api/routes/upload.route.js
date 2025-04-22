import express from "express";
import multer from "multer";
import { uploadImage } from "../controllers/upload.controller.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/image", upload.single("image"), uploadImage);

export default router; 
