import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PackagesSection from "./components/PackagesSection";
import WorkflowSection from "./components/WorkflowSection";
import BookingModal from "./components/BookingModal";
import Footer from "./components/Footer";

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("Premium Car Spa");

  const handleOpenBooking = (pkgName) => {
    if (pkgName) setSelectedPackage(pkgName);
    setBookingOpen(true);
  };

  // Dev 2 can replace or extend this function with backend/API persistence
  const handleBookingSubmit = (bookingData) => {
    console.log("New AquaShine Booking:", bookingData);
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100">
      <Navbar onOpenBooking={() => handleOpenBooking()} />
      <main>
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <PackagesSection onSelectPackage={handleOpenBooking} />
        <WorkflowSection onOpenBooking={() => handleOpenBooking()} />
      </main>
      <Footer />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultPackage={selectedPackage}
        onBookingSubmit={handleBookingSubmit}
      />
    </div>
  );
}