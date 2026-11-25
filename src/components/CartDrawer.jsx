import { useState } from "react";
import {
  X,
  Trash2,
  MapPin,
  Navigation,
  MessageCircle,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { buildWhatsAppBookingUrl } from "../utils/whatsapp";

export default function CartDrawer({
  isOpen,
  onClose,
  selectedPackage,
  onRemovePackage,
  selectedAddons,
  onRemoveAddon,
  onBookingSubmit,
}) {
  const [customerName, setCustomerName] = useState("");
  const [vehicleType, setVehicleType] = useState("Car");
  const [vehicleModel, setVehicleModel] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("10:30 AM");
  const [address, setAddress] = useState("");
  const [mapsLink, setMapsLink] = useState("");
  const [locating, setLocating] = useState(false);

  if (!isOpen) return null;

  const packageTotal = selectedPackage ? selectedPackage.numericPrice : 0;
  const addonsTotal = selectedAddons.reduce((sum, item) => sum + item.numericPrice, 0);
  const grandTotal = packageTotal + addonsTotal;

  // One-click GPS location capture -> generates exact Google Maps link
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
    selectedPackage,
    addons: selectedAddons,
    totalAmount: grandTotal,
    customerName,
    vehicleType,
    vehicleModel,
    address,
    mapsLink,
    date,
    timeSlot,
  });

  const handleCheckoutClick = () => {
    if (onBookingSubmit) {
      onBookingSubmit({
        selectedPackage,
        selectedAddons,
        totalAmount: grandTotal,
        customerName,
        vehicleType,
        vehicleModel,
        address,
        mapsLink,
        date,
        timeSlot,
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/50 backdrop-blur-xs">
      <div className="flex h-full w-full max-w-lg flex-col bg-white shadow-2xl">
        {/* Drawer Header */}
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
                Review services, pick slot &amp; send on WhatsApp
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

        {/* Scrollable Body */}
        <div className="flex-1 space-y-6 overflow-y-auto px-6 py-5">
          {/* Selected Items Summary */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
              Selected Services
            </h4>

            {!selectedPackage && selectedAddons.length === 0 ? (
              <div className="mt-3 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-center">
                <Sparkles className="mx-auto h-6 w-6 text-sky-600" />
                <p className="mt-2 text-xs font-semibold text-slate-700">
                  Your service cart is empty
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Select a Bike/Car package or add-ons from the page, or message us directly on WhatsApp below.
                </p>
              </div>
            ) : (
              <div className="mt-3 space-y-2.5">
                {selectedPackage && (
                  <div className="flex items-center justify-between rounded-2xl border border-sky-200 bg-sky-50/70 px-4 py-3">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase text-sky-700">
                        Main Package
                      </span>
                      <p className="text-sm font-extrabold text-slate-900">
                        {selectedPackage.name}
                      </p>
                      <p className="text-xs font-bold text-[#0b2d6b]">
                        {selectedPackage.price}
                      </p>
                    </div>
                    <button
                      onClick={onRemovePackage}
                      className="rounded-lg p-1.5 text-slate-400 hover:bg-white hover:text-rose-600"
                      title="Remove package"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                )}

                {selectedAddons.map((addon) => (
                  <div
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
                      title="Remove add-on"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Customer & Vehicle Details */}
          <div className="space-y-3 border-t border-slate-100 pt-5">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
              Vehicle &amp; Slot Details
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
                  Vehicle Model
                </label>
                <input
                  type="text"
                  placeholder="e.g. Creta / Activa"
                  value={vehicleModel}
                  onChange={(e) => setVehicleModel(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-[#0b2d6b] focus:outline-none"
                />
              </div>
            </div>

            {/* Slot + Google Maps Location Side-by-Side */}
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
                  Doorstep Parking Location
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
                placeholder="Society / Street / Landmark in Pune"
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

        {/* Sticky Footer with Total + Automated WhatsApp Button */}
        <div className="border-t border-slate-200 bg-slate-50 px-6 py-4">
          {grandTotal > 0 && (
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-600">Estimated Total</span>
              <span className="text-xl font-extrabold text-slate-900">
                ₹{grandTotal.toLocaleString("en-IN")}
              </span>
            </div>
          )}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={handleCheckoutClick}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 py-3.5 text-sm font-extrabold text-white shadow-md transition hover:bg-emerald-700"
          >
            <MessageCircle className="h-5 w-5" />
            Send Booking on WhatsApp ↗
          </a>
        </div>
      </div>
    </div>
  );
}