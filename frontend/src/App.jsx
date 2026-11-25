import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PackagesSection from "./components/PackagesSection";
import WorkflowSection from "./components/WorkflowSection";
import AboutSection from "./components/AboutSection";
import FaqSection from "./components/FaqSection";
import BookingModal from "./components/BookingModal";
import Footer from "./components/Footer";

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(
    "Standard Car Care & Sanitization"
  );

  const handleOpenBooking = (pkgName) => {
    if (pkgName) setSelectedPackage(pkgName);
    setBookingOpen(true);
  };

  // Dev 2: Connect backend/API booking logic here
  // Receives: { customerName, phone, vehicleType, vehicleModel, packageName, address, date, timeSlot }
  const handleBookingSubmit = (bookingData) => {
    console.log("New DSP Booking:", bookingData);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Navbar onOpenBooking={() => handleOpenBooking()} />
      <main>
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <PackagesSection onSelectPackage={handleOpenBooking} />
        <WorkflowSection onOpenBooking={() => handleOpenBooking()} />
        <AboutSection onOpenBooking={() => handleOpenBooking()} />
        <FaqSection />
      </main>
      <Footer onOpenBooking={() => handleOpenBooking()} />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultPackage={selectedPackage}
        onBookingSubmit={handleBookingSubmit}
      />
    </div>
  );
}
