import { useState } from "react";
import { MessageCircle, ShoppingBag } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PackagesSection from "./components/PackagesSection";
import WorkflowSection from "./components/WorkflowSection";
import AboutSection from "./components/AboutSection";
import FaqSection from "./components/FaqSection";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";
import { buildWhatsAppBookingUrl } from "./utils/whatsapp";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);

  const handleSelectPackage = (pkg) => {
    setSelectedPackage((prev) => (prev?.id === pkg.id ? null : pkg));
  };

  const handleToggleAddon = (addon) => {
    setSelectedAddons((prev) =>
      prev.some((item) => item.id === addon.id)
        ? prev.filter((item) => item.id !== addon.id)
        : [...prev, addon]
    );
  };

  const handleRemoveAddon = (id) => {
    setSelectedAddons((prev) => prev.filter((item) => item.id !== id));
  };

  // Dev 2: Hook backend/database logging here if needed alongside WhatsApp
  const handleBookingSubmit = (bookingPayload) => {
    console.log("DSP WhatsApp Booking Payload:", bookingPayload);
  };

  const cartCount = (selectedPackage ? 1 : 0) + selectedAddons.length;
  const totalAmount =
    (selectedPackage ? selectedPackage.numericPrice : 0) +
    selectedAddons.reduce((sum, a) => sum + a.numericPrice, 0);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Navbar cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />

      <main>
        <Hero />
        <PackagesSection
          selectedPackage={selectedPackage}
          onSelectPackage={handleSelectPackage}
          selectedAddons={selectedAddons}
          onToggleAddon={handleToggleAddon}
          onOpenCart={() => setCartOpen(true)}
        />
        <WorkflowSection />
        <AboutSection onOpenCart={() => setCartOpen(true)} />
        <FaqSection />
      </main>

      <Footer />

      {/* Floating Bottom Bar when items are in Cart + Floating WhatsApp Button */}
      <div className="fixed right-5 bottom-5 z-30 flex items-center gap-3">
        {cartCount > 0 && (
          <button
            onClick={() => setCartOpen(true)}
            className="flex cursor-pointer items-center gap-2.5 rounded-full bg-[#0b2d6b] px-5 py-3 text-xs font-extrabold text-white shadow-xl transition hover:bg-sky-700 sm:text-sm"
          >
            <ShoppingBag className="h-4 w-4 text-lime-400" />
            <span>
              {cartCount} {cartCount === 1 ? "Service" : "Services"} · ₹
              {totalAmount.toLocaleString("en-IN")}
            </span>
            <span className="rounded-full bg-lime-400 px-2.5 py-0.5 text-[11px] font-extrabold text-[#0b2d6b]">
              Checkout
            </span>
          </button>
        )}

        <a
          href={buildWhatsAppBookingUrl({
            selectedPackage,
            addons: selectedAddons,
            totalAmount,
          })}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl transition hover:scale-105 hover:bg-emerald-700"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        selectedPackage={selectedPackage}
        onRemovePackage={() => setSelectedPackage(null)}
        selectedAddons={selectedAddons}
        onRemoveAddon={handleRemoveAddon}
        onBookingSubmit={handleBookingSubmit}
      />
    </div>
  );
}