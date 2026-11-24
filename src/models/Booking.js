import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    bookingCode: {
      type: String,
      unique: true,
    },
    customerName: {
      type: String,
      required: [true, "Customer name is required"],
      trim: true,
      minlength: 2,
    },
    phone: {
      type: String,
      required: [true, "10-digit mobile number is required"],
      match: [/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"],
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["Bike", "Hatchback", "Sedan", "SUV", "Luxury"],
    },
    vehicleNumber: {
      type: String,
      trim: true,
      uppercase: true,
      default: "",
    },
    packageId: {
      type: String,
      required: [true, "Service package is required"],
    },
    packageName: {
      type: String,
      required: true,
    },
    estimatedPrice: {
      type: Number,
      required: true,
    },
    bookingDate: {
      type: String, // Stored as YYYY-MM-DD for clean slot querying
      required: [true, "Booking date is required"],
    },
    timeSlot: {
      type: String,
      required: [true, "Time slot is required"],
    },
    pickupRequired: {
      type: Boolean,
      default: false,
    },
    pickupAddress: {
      type: String,
      trim: true,
      default: "",
    },
    isLoyaltyFreeWash: {
      type: Boolean,
      default: false,
    },
    notes: {
      type: String,
      trim: true,
      default: "",
    },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "In Progress", "Completed", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

// Auto-generate a short booking reference code before saving
bookingSchema.pre("save", function (next) {
  if (!this.bookingCode) {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    this.bookingCode = `AQS-${randomNum}`;
  }
  next();
});

export default mongoose.model("Booking", bookingSchema);