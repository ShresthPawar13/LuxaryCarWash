import { useState, useEffect } from "react";
import { X, CheckCircle2 } from "lucide-react";

export default function BookingModal({
  isOpen,
  onClose,
  defaultPackage = "Premium Car Spa",
  onBookingSubmit,
}) {
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    vehicleType: "Car",
    vehicleModel: "",
    packageName: defaultPackage,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl border border-slate-800 bg-[#0d1320] p-6 shadow-2xl sm:p-8">
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-cyan-400" />
            <h3 className="mt-4 text-2xl font-bold text-white">
              Booking Request Received!
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Thank you, <span className="font-semibold text-white">{formData.customerName}</span>. Your{" "}
              <span className="text-cyan-400">{formData.packageName}</span> slot for{" "}
              <span className="font-semibold text-white">{formData.date}</span> at{" "}
              <span className="font-semibold text-white">{formData.timeSlot}</span> is reserved.
            </p>
            <button
              onClick={handleResetAndClose}
              className="mt-6 rounded-xl bg-cyan-500 px-6 py-2.5 text-sm font-bold text-slate-950 hover:bg-cyan-400"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-bold text-white">Book Your AquaShine Spa</h3>
            <p className="mt-1 text-xs text-slate-400">
              Reserve your bay in 30 seconds. Pay after quality inspection.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-slate-300">
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
                    className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300">
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
                    className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-slate-300">
                    Vehicle Type
                  </label>
                  <select
                    value={formData.vehicleType}
                    onChange={(e) =>
                      setFormData({ ...formData, vehicleType: e.target.value })
                    }
                    className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="Car">Car (Hatchback / Sedan / SUV)</option>
                    <option value="Bike">Bike / Scooter / Superbike</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300">
                    Vehicle Model
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Hyundai Creta / Royal Enfield"
                    value={formData.vehicleModel}
                    onChange={(e) =>
                      setFormData({ ...formData, vehicleModel: e.target.value })
                    }
                    className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300">
                  Selected Package
                </label>
                <select
                  value={formData.packageName}
                  onChange={(e) =>
                    setFormData({ ...formData, packageName: e.target.value })
                  }
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
                >
                  <option>Basic Bike Wash</option>
                  <option>Premium Bike Spa</option>
                  <option>Complete Bike Detailing</option>
                  <option>Basic Car Wash</option>
                  <option>Premium Car Spa</option>
                  <option>Ultimate Car Detailing</option>
                </select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-slate-300">
                    Preferred Date
                  </label>
                  <input
                    required
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300">
                    Preferred Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) =>
                      setFormData({ ...formData, timeSlot: e.target.value })
                    }
                    className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
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
                className="mt-2 w-full cursor-pointer rounded-xl bg-cyan-500 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-400"
              >
                Confirm Appointment
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}