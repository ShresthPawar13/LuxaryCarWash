import Enquiry from "../models/Enquiry.js";
import { generateEnquiryWhatsAppUrl } from "../utils/whatsappHelper.js";

// @desc    Submit a new customer enquiry
// @route   POST /api/enquiries
export const createEnquiry = async (req, res) => {
  try {
    const { name, phone, vehicleType, message } = req.body;

    const enquiry = await Enquiry.create({
      name,
      phone,
      vehicleType: vehicleType || "General",
      message,
    });

    const whatsappUrl = generateEnquiryWhatsAppUrl(enquiry);

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully! Our team will contact you shortly.",
      enquiry,
      whatsappUrl,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ success: false, message: messages.join(", ") });
    }
    res.status(500).json({ success: false, message: "Server error while submitting enquiry." });
  }
};

// @desc    Admin: Get all enquiries
// @route   GET /api/enquiries
export const getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: enquiries.length,
      enquiries,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching enquiries." });
  }
};

// @desc    Admin: Mark an enquiry as resolved
// @route   PATCH /api/enquiries/:id/resolve
export const resolveEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { isResolved: true },
      { new: true }
    );

    if (!enquiry) {
      return res.status(404).json({ success: false, message: "Enquiry not found." });
    }

    res.status(200).json({ success: true, enquiry });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating enquiry." });
  }
};