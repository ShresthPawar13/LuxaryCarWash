import express from "express";
import {
  createBooking,
  getAvailableSlots,
  checkLoyaltyProgress,
  getAllBookingsAdmin,
  updateBookingStatus,
} from "../controllers/bookingController.js";
import { verifyAdminKey } from "../middleware/adminAuth.js";

const router = express.Router();

// --- Public Customer Routes ---
router.post("/", createBooking);
router.get("/slots", getAvailableSlots);
router.get("/loyalty/:phone", checkLoyaltyProgress);

// --- Protected Admin Routes (Requires x-admin-key header) ---
router.get("/admin/all", verifyAdminKey, getAllBookingsAdmin);
router.patch("/admin/:id/status", verifyAdminKey, updateBookingStatus);

export default router;