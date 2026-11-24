import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"],
    },
    vehicleType: {
      type: String,
      default: "General",
    },
    message: {
      type: String,
      required: [true, "Enquiry message is required"],
      trim: true,
      maxlength: 1000,
    },
    isResolved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Enquiry", enquirySchema);