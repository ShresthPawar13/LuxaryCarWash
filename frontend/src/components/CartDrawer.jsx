import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Trash2,
  MapPin,
  Navigation,
  MessageCircle,
  ShoppingBag,
  Sparkles,
  Plus,
  Minus,
} from "lucide-react";
import { buildWhatsAppBookingUrl } from "../utils/whatsapp";

export default function CartDrawer({
  isOpen,
  onClose,
  selectedPackages,
  onUpdatePackageQty,
  onRemovePackage,
  selectedAddons,
  onRemoveAddon,
  onBookingSubmit,
}) {
  const [customerName, setCustomerName] = useState("");
  const [itemDetails, setItemDetails] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("10:30 AM");
  const [address, setAddress] = useState("");
  const [mapsLink, setMapsLink] = useState("");
  const [locating, setLocating] = useState(false);

  const packagesTotal = selectedPackages.reduce(
    (sum, pkg) => sum + pkg.numericPrice * pkg.qty,
    0
  );
  const addonsTotal = selectedAddons.reduce(
    (sum, item) => sum + item.numericPrice,
    0
  );
  const grandTotal = packagesTotal + addonsTotal;

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      setMapsLink("https://maps.google.com/?q=Pune,Maharashtra");
      return;
    }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const pinUrl = `https://www.google.com/maps?q=${latitude.toFixed(6)},${longitude.toFixed(6)}`;
        setMapsLink(pinUrl);
        if (!address) {
          setAddress(`Pinned GPS Location (${latitude.toFixed(4)}, ${longitude.toFixed(4)})`);
        }
        setLocating(false);
      },
      () => {
        setMapsLink("https://maps.google.com/?q=Pune,Maharashtra");
        setLocating(false);
      }
    );
  };

  const whatsappUrl = buildWhatsAppBookingUrl({
    selectedPackages,
    addons: selectedAddons,
    totalAmount: grandTotal,
    customerName,
    itemDetails,
    address,
    mapsLink,
    date,
    timeSlot,
  });

  const handleCheckoutClick = () => {
    if (onBookingSubmit) {
      onBookingSubmit({
        selectedPackages,
        selectedAddons,
        totalAmount: grandTotal,
        customerName,
        itemDetails,
        address,
        mapsLink,
        date,
        timeSlot,
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex justify-end bg-slate-900/50 backdrop-blur-xs"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className="flex h-full w-full max-w-lg flex-col bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0b2d6b] text-white">
                  <ShoppingBag className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    Your DSP Service Cart
                  </h3>
                  <p className="text-xs text-slate-500">
                    Bundle Car, Bike &amp; Home services in one booking
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 space-y-6 overflow-y-auto px-6 py-5">
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Selected Packages &amp; Add-ons
                </h4>

                {selectedPackages.length === 0 && selectedAddons.length === 0 ? (
                  <div className="mt-3 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-center">
                    <Sparkles className="mx-auto h-6 w-6 text-sky-600" />
                    <p className="mt-2 text-xs font-semibold text-slate-700">
                      Your service cart is empty
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Add Car, Bike, or Home Cleaning packages on the page, or message us directly on WhatsApp below.
                    </p>
                  </div>
                ) : (
                  <div className="mt-3 space-y-2.5">
                    {selectedPackages.map((pkg) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={pkg.id}
                        className="flex items-center justify-between gap-3 rounded-2xl border border-sky-200 bg-sky-50/70 px-4 py-3"
                      >
                        <div className="min-w-0 flex-1">
                          <span className="inline-block rounded-full bg-white px-2 py-0.5 text-[10px] font-extrabold uppercase text-[#0b2d6b]">
                            {pkg.category}
                          </span>
                          <p className="mt-1 truncate text-sm font-extrabold text-slate-900">
                            {pkg.name}
                          </p>
                          <p className="text-xs font-bold text-[#0b2d6b]">
                            ₹{(pkg.numericPrice * pkg.qty).toLocaleString("en-IN")}
                            {pkg.qty > 1 && (
                              <span className="ml-1 font-normal text-slate-500">
                                ({pkg.price} × {pkg.qty})
                              </span>
                            )}
                          </p>
                        </div>

                        {/* Quantity Controls for Multiple Vehicles / Rooms */}
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => onUpdatePackageQty(pkg.id, -1)}
                            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                            title="Decrease quantity"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-5 text-center text-xs font-extrabold text-slate-900">
                            {pkg.qty}
                          </span>
                          <button
                            onClick={() => onUpdatePackageQty(pkg.id, 1)}
                            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                            title="Add another vehicle/unit"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                          <button
                            onClick={() => onRemovePackage(pkg.id)}
                            className="ml-1 rounded-lg p-1.5 text-slate-400 hover:bg-white hover:text-rose-600"
                            title="Remove"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </motion.div>
                    ))}

                    {selectedAddons.map((addon) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={addon.id}
                        className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-2.5"
                      >
                        <div>
                          <p className="text-xs font-bold text-slate-900">{addon.title}</p>
                          <p className="text-xs font-semibold text-slate-500">{addon.price}</p>
                        </div>
                        <button
                          onClick={() => onRemoveAddon(addon.id)}
                          className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-rose-600"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Customer, Vehicles/Home & Slot Details */}
              <div className="space-y-3 border-t border-slate-100 pt-5">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Booking &amp; Slot Details
                </h4>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-[#0b2d6b] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700">
                      Vehicles / Home Note
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Creta + Activa + 5kW Solar / Sofa"
                      value={itemDetails}
                      onChange={(e) => setItemDetails(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-[#0b2d6b] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-[#0b2d6b] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700">
                      Preferred Time Slot
                    </label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm focus:border-[#0b2d6b] focus:outline-none"
                    >
                      <option>09:00 AM</option>
                      <option>10:30 AM</option>
                      <option>12:00 PM</option>
                      <option>02:30 PM</option>
                      <option>04:30 PM</option>
                      <option>06:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Doorstep Google Maps Location Picker */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <label className="flex items-center gap-1.5 text-xs font-extrabold text-slate-800">
                      <MapPin className="h-3.5 w-3.5 text-[#0b2d6b]" />
                      Doorstep Location / Parking Pin
                    </label>
                    <button
                      type="button"
                      onClick={handleUseCurrentLocation}
                      className="inline-flex cursor-pointer items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-[#0b2d6b] shadow-2xs ring-1 ring-slate-200 hover:bg-sky-50"
                    >
                      <Navigation className="h-3 w-3" />
                      {locating ? "Locating..." : "Use My GPS Pin"}
                    </button>
                  </div>

                  <input
                    type="text"
                    placeholder="Flat / Society / Street / Landmark in Pune"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-[#0b2d6b] focus:outline-none"
                  />

                  <div className="mt-2 flex items-center gap-2">
                    <input
                      type="url"
                      placeholder="Paste Google Maps link (optional)"
                      value={mapsLink}
                      onChange={(e) => setMapsLink(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-700 focus:border-[#0b2d6b] focus:outline-none"
                    />
                    <a
                      href={mapsLink || "https://maps.google.com/?q=Pune,Maharashtra"}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-[#0b2d6b] hover:bg-sky-50"
                    >
                      Map ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-slate-200 bg-slate-50 px-6 py-4">
              {grandTotal > 0 && (
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-600">Estimated Total</span>
                  <span className="text-xl font-extrabold text-slate-900">
                    ₹{grandTotal.toLocaleString("en-IN")}
                  </span>
                </div>
              )}

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={handleCheckoutClick}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 py-3.5 text-sm font-extrabold text-white shadow-md transition hover:bg-emerald-700"
              >
                <MessageCircle className="h-5 w-5" />
                Send Booking on WhatsApp ↗
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}