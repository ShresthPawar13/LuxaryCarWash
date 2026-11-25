import Booking from "../models/Booking.js";
import { SERVICES_CATALOG, TIME_SLOTS } from "../data/servicesCatalog.js";
import { generateBookingWhatsAppUrl } from "../utils/whatsappHelper.js";

const MAX_BAYS_PER_SLOT = 3; // Max vehicles handled per time slot

// @desc    Create a new booking & return WhatsApp redirect link
// @route   POST /api/bookings
export const createBooking = async (req, res) => {
  try {
    const {
      customerName,
      phone,
      vehicleType,
      vehicleNumber,
      packageId,
      bookingDate,
      timeSlot,
      pickupRequired,
      pickupAddress,
      notes,
    } = req.body;

    // 1. Validate packageId against official catalog
    const selectedService = SERVICES_CATALOG.find((s) => s.packageId === packageId);
    if (!selectedService) {
      return res.status(400).json({
        success: false,
        message: "Invalid service package selected.",
      });
    }

    // 2. Validate time slot
    if (!TIME_SLOTS.includes(timeSlot)) {
      return res.status(400).json({
        success: false,
        message: "Invalid time slot selected.",
      });
    }

    // 3. Validate pickup address if pickup is requested
    if (pickupRequired && (!pickupAddress || pickupAddress.trim().length < 5)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid pickup address.",
      });
    }

    // 4. Check slot availability (prevent overbooking)
    const existingSlotCount = await Booking.countDocuments({
      bookingDate,
      timeSlot,
      status: { $ne: "Cancelled" },
    });

    if (existingSlotCount >= MAX_BAYS_PER_SLOT) {
      return res.status(409).json({
        success: false,
        message: `Sorry, the ${timeSlot} slot on ${bookingDate} is full. Please choose another slot.`,
      });
    }

    // 5. Check Loyalty Program: 6th wash free after 5 completed washes
    const completedWashes = await Booking.countDocuments({
      phone,
      status: "Completed",
    });
    const isLoyaltyFreeWash = completedWashes > 0 && completedWashes % 5 === 0;

    // 6. Save booking to MongoDB
    const booking = await Booking.create({
      customerName,
      phone,
      vehicleType,
      vehicleNumber,
      packageId: selectedService.packageId,
      packageName: selectedService.name,
      estimatedPrice: isLoyaltyFreeWash ? 0 : selectedService.basePrice,
      bookingDate,
      timeSlot,
      pickupRequired: Boolean(pickupRequired),
      pickupAddress: pickupRequired ? pickupAddress : "",
      isLoyaltyFreeWash,
      notes,
    });

    // 7. Generate pre-filled WhatsApp confirmation URL
    const whatsappUrl = generateBookingWhatsAppUrl(booking);

    res.status(201).json({
      success: true,
      message: isLoyaltyFreeWash
        ? "Booking created! Congratulations, your 6th Loyalty Wash is FREE!"
        : "Booking created successfully!",
      loyaltyStatus: {
        completedWashes,
        isSixthWashFree: isLoyaltyFreeWash,
      },
      booking,
      whatsappUrl,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ success: false, message: messages.join(", ") });
    }
    res.status(500).json({ success: false, message: "Server error while creating booking." });
  }
};

// @desc    Get available time slots for a specific date
// @route   GET /api/bookings/slots?date=YYYY-MM-DD
export const getAvailableSlots = async (req, res) => {
  try {
    const { date } = req.query;
    if (!date) {
      return res.status(400).json({ success: false, message: "Query parameter 'date' (YYYY-MM-DD) is required." });
    }

    const bookingsOnDate = await Booking.find({
      bookingDate: date,
      status: { $ne: "Cancelled" },
    }).select("timeSlot");

    const slotCounts = bookingsOnDate.reduce((acc, b) => {
      acc[b.timeSlot] = (acc[b.timeSlot] || 0) + 1;
      return acc;
    }, {});

    const availability = TIME_SLOTS.map((slot) => {
      const booked = slotCounts[slot] || 0;
      return {
        timeSlot: slot,
        bookedCount: booked,
        remainingBays: Math.max(0, MAX_BAYS_PER_SLOT - booked),
        isAvailable: booked < MAX_BAYS_PER_SLOT,
      };
    });

    res.status(200).json({ success: true, date, slots: availability });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching slot availability." });
  }
};

// @desc    Check customer loyalty progress by phone number
// @route   GET /api/bookings/loyalty/:phone
export const checkLoyaltyProgress = async (req, res) => {
  try {
    const { phone } = req.params;
    const completedWashes = await Booking.countDocuments({ phone, status: "Completed" });
    const washesUntilFree = 5 - (completedWashes % 5);

    res.status(200).json({
      success: true,
      phone,
      completedWashes,
      nextWashIsFree: completedWashes > 0 && completedWashes % 5 === 0,
      washesRemainingForFreeReward: washesUntilFree === 5 && completedWashes > 0 ? 0 : washesUntilFree,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error checking loyalty progress." });
  }
};
// @desc    Admin: Get all bookings (with optional ?date=YYYY-MM-DD & ?status=Pending filters)
// @route   GET /api/bookings/admin/all
export const getAllBookingsAdmin = async (req, res) => {
  try {
    const { date, status } = req.query;
    const filter = {};
    if (date) filter.bookingDate = date;
    if (status) filter.status = status;

    const bookings = await Booking.find(filter).sort({ bookingDate: 1, createdAt: -1 });

    // Calculate quick dashboard metrics
    const totalEstimatedRevenue = bookings
      .filter((b) => b.status === "Completed")
      .reduce((sum, b) => sum + b.estimatedPrice, 0);

    res.status(200).json({
      success: true,
      count: bookings.length,
      completedRevenue: totalEstimatedRevenue,
      bookings,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching admin bookings." });
  }
};

// @desc    Admin: Update booking status (Pending | Confirmed | In Progress | Completed | Cancelled)
// @route   PATCH /api/bookings/admin/:id/status
export const updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const validStatuses = ["Pending", "Confirmed", "In Progress", "Completed", "Cancelled"];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Allowed values: ${validStatuses.join(", ")}`,
      });
    }

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking not found." });
    }

    res.status(200).json({
      success: true,
      message: `Booking ${booking.bookingCode} updated to ${status}.`,
      booking,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating booking status." });
  }
};