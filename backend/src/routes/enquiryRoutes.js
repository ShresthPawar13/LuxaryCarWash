import express from "express";
import {
  createEnquiry,
  getAllEnquiries,
  resolveEnquiry,
} from "../controllers/enquiryController.js";
import { verifyAdminKey } from "../middleware/adminAuth.js";

const router = express.Router();

// Public route for Contact section form
router.post("/", createEnquiry);

// Protected Admin routes
router.get("/", verifyAdminKey, getAllEnquiries);
router.patch("/:id/resolve", verifyAdminKey, resolveEnquiry);

export default router;