export const generateBookingWhatsAppUrl = (booking) => {
  const shopNumber = process.env.SHOP_WHATSAPP_NUMBER || "919876543210";

  const messageLines = [
    `*NEW BOOKING - AQUASHINE AUTO SPA* 🚿✨`,
    `----------------------------------`,
    `*Booking ID:* ${booking.bookingCode}`,
    `*Customer:* ${booking.customerName}`,
    `*Phone:* ${booking.phone}`,
    `*Vehicle:* ${booking.vehicleType}${booking.vehicleNumber ? ` (${booking.vehicleNumber})` : ""}`,
    `*Package:* ${booking.packageName}`,
    `*Date & Slot:* ${booking.bookingDate} at ${booking.timeSlot}`,
    `*Pickup & Drop:* ${booking.pickupRequired ? `Yes (${booking.pickupAddress})` : "No (Walk-in)"}`,
    booking.isLoyaltyFreeWash
      ? `*Offer Applied:* 🎉 LOYALTY REWARD (6th Wash FREE!)`
      : `*Est. Price:* ₹${booking.estimatedPrice}`,
    booking.notes ? `*Notes:* ${booking.notes}` : null,
    `----------------------------------`,
    `Please confirm my slot!`,
  ].filter(Boolean);

  const encodedMessage = encodeURIComponent(messageLines.join("\n"));
  return `https://wa.me/${shopNumber}?text=${encodedMessage}`;
};

export const generateEnquiryWhatsAppUrl = (enquiry) => {
  const shopNumber = process.env.SHOP_WHATSAPP_NUMBER || "919876543210";

  const messageLines = [
    `*NEW ENQUIRY - AQUASHINE AUTO SPA* 💬`,
    `*Name:* ${enquiry.name}`,
    `*Phone:* ${enquiry.phone}`,
    `*Vehicle:* ${enquiry.vehicleType}`,
    `*Message:* ${enquiry.message}`,
  ];

  return `https://wa.me/${shopNumber}?text=${encodeURIComponent(messageLines.join("\n"))}`;
};