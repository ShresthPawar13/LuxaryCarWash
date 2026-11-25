export const WHATSAPP_NUMBER = "919876543210";

export function buildWhatsAppBookingUrl({
  selectedPackage = null,
  addons = [],
  totalAmount = 0,
  customerName = "",
  vehicleType = "Car",
  vehicleModel = "",
  address = "",
  mapsLink = "",
  date = "",
  timeSlot = "",
} = {}) {
  if (!selectedPackage && addons.length === 0 && !customerName) {
    const defaultMsg =
      "Hello Doorstep Sanitization Providers (DSP)! 🚗✨\nI would like to book a doorstep wash & sanitization service. Please share available slots.";
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMsg)}`;
  }

  const lines = [
    "Hello *Doorstep Sanitization Providers (DSP)*! 🚗✨",
    "I would like to confirm my doorstep booking:",
    "",
  ];

  if (selectedPackage) {
    lines.push(`*Main Package:* ${selectedPackage.name} (${selectedPackage.price})`);
  } else {
    lines.push("*Main Package:* Custom Add-on Service");
  }

  if (addons.length > 0) {
    lines.push("*Selected Add-ons:*");
    addons.forEach((item) => {
      lines.push(`  • ${item.title} (${item.price})`);
    });
  }

  if (totalAmount > 0) {
    lines.push(`*Estimated Total:* ₹${totalAmount.toLocaleString("en-IN")}`);
  }

  lines.push("");
  if (customerName) lines.push(`*Name:* ${customerName}`);
  lines.push(`*Vehicle:* ${vehicleType}${vehicleModel ? ` - ${vehicleModel}` : ""}`);
  if (date) lines.push(`*Preferred Date:* ${date}`);
  if (timeSlot) lines.push(`*Time Slot:* ${timeSlot}`);
  if (address) lines.push(`*Parking Address:* ${address}`);
  if (mapsLink) lines.push(`*Google Maps Pin:* ${mapsLink}`);

  lines.push("", "Please confirm my slot. Thank you!");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}