export const WHATSAPP_NUMBER = "919876543210";

export function buildWhatsAppBookingUrl({
  selectedPackages = [],
  addons = [],
  totalAmount = 0,
  customerName = "",
  itemDetails = "",
  address = "",
  mapsLink = "",
  date = "",
  timeSlot = "",
} = {}) {
  if (selectedPackages.length === 0 && addons.length === 0 && !customerName) {
    const defaultMsg =
      "Hello Doorstep Sanitization Providers (DSP)! ✨\nI would like to book a doorstep Car / Bike Wash or Home Cleaning & Sanitization service. Please share available slots.";
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMsg)}`;
  }

  const lines = [
    "Hello *Doorstep Sanitization Providers (DSP)*! ✨",
    "I would like to confirm my doorstep booking:",
    "",
  ];

  if (selectedPackages.length > 0) {
    lines.push("*Selected Packages:*");
    selectedPackages.forEach((pkg) => {
      const qtyText = pkg.qty > 1 ? ` x${pkg.qty}` : "";
      lines.push(
        `  • [${pkg.category}] ${pkg.name}${qtyText} — ₹${(
          pkg.numericPrice * pkg.qty
        ).toLocaleString("en-IN")}`
      );
    });
  }

  if (addons.length > 0) {
    lines.push("*Selected Add-ons:*");
    addons.forEach((item) => {
      lines.push(`  • ${item.title} (${item.price})`);
    });
  }

  if (totalAmount > 0) {
    lines.push("", `*Estimated Total:* ₹${totalAmount.toLocaleString("en-IN")}`);
  }

  lines.push("");
  if (customerName) lines.push(`*Name:* ${customerName}`);
  if (itemDetails) lines.push(`*Vehicle / Home Details:* ${itemDetails}`);
  if (date) lines.push(`*Preferred Date:* ${date}`);
  if (timeSlot) lines.push(`*Time Slot:* ${timeSlot}`);
  if (address) lines.push(`*Doorstep Address:* ${address}`);
  if (mapsLink) lines.push(`*Google Maps Pin:* ${mapsLink}`);

  lines.push("", "Please confirm my slot. Thank you!");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}