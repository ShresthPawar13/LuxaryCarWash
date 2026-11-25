import { useState, useEffect } from "react";
import { X, CheckCircle2 } from "lucide-react";

export default function BookingModal({
  isOpen,
  onClose,
  defaultPackage = "Standard Car Care & Sanitization",
  onBookingSubmit,
}) {
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    vehicleType: "Car",
    vehicleModel: "",
    packageName: defaultPackage,
    address: "",
    date: "",
    timeSlot: "10:30 AM",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, packageName: defaultPackage }));
  }, [defaultPackage]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onBookingSubmit) {
      onBookingSubmit(formData);
    }
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-xs">
      <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl sm:p-8">
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-500" />
            <h3 className="mt-4 text-2xl font-extrabold text-slate-900">
              Doorstep Booking Confirmed!
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Thank you, <span className="font-bold text-slate-900">{formData.customerName}</span>. Our DSP technician will arrive for your{" "}
              <span className="font-bold text-[#0b2d6b]">{formData.packageName}</span> on{" "}
              <span className="font-bold text-slate-900">{formData.date}</span> at{" "}
              <span className="font-bold text-slate-900">{formData.timeSlot}</span>.
            </p>
            <button
              onClick={handleResetAndClose}
              className="mt-6 rounded-full bg-[#0b2d6b] px-7 py-2.5 text-sm font-bold text-white hover:bg-sky-700"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-extrabold text-slate-900">
              Book Doorstep Sanitization &amp; Wash
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Reserve your doorstep slot in 30 seconds. Pay after inspection.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
              <div className="grid gap-3.5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.customerName}
                    onChange={(e) =>
                      setFormData({ ...formData, customerName: e.target.value })
                    }
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0b2d6b] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700">
                    Phone / WhatsApp
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0b2d6b] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-3.5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700">
                    Vehicle Type
                  </label>
                  <select
                    value={formData.vehicleType}
                    onChange={(e) =>
                      setFormData({ ...formData, vehicleType: e.target.value })
                    }
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0b2d6b] focus:outline-none"
                  >
                    <option value="Car">Car (Hatchback / Sedan / SUV)</option>
                    <option value="Bike">Bike / Scooter / Superbike</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700">
                    Vehicle Model
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Hyundai Creta / Activa"
                    value={formData.vehicleModel}
                    onChange={(e) =>
                      setFormData({ ...formData, vehicleModel: e.target.value })
                    }
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0b2d6b] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700">
                  Selected Package / Service
                </label>
                <input
                  required
                  type="text"
                  value={formData.packageName}
                  onChange={(e) =>
                    setFormData({ ...formData, packageName: e.target.value })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:border-[#0b2d6b] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700">
                  Doorstep Parking Address / Society
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. B-402, Magarpatta City, Pune"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0b2d6b] focus:outline-none"
                />
              </div>

              <div className="grid gap-3.5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700">
                    Preferred Date
                  </label>
                  <input
                    required
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0b2d6b] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700">
                    Preferred Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) =>
                      setFormData({ ...formData, timeSlot: e.target.value })
                    }
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0b2d6b] focus:outline-none"
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

              <button
                type="submit"
                className="mt-2 w-full cursor-pointer rounded-full bg-[#0b2d6b] py-3 text-sm font-bold text-white shadow-md transition hover:bg-sky-700"
              >
                Confirm Doorstep Appointment
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
