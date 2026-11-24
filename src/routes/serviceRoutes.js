import express from "express";
import { SERVICES_CATALOG, TIME_SLOTS } from "../data/servicesCatalog.js";

const router = express.Router();

// GET /api/services?category=bike|car
router.get("/", (req, res) => {
  const { category } = req.query;
  const filtered = category
    ? SERVICES_CATALOG.filter((s) => s.category === category.toLowerCase())
    : SERVICES_CATALOG;

  res.status(200).json({
    success: true,
    count: filtered.length,
    timeSlots: TIME_SLOTS,
    services: filtered,
  });
});

export default router;