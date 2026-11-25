import { useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
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
  const [selectedPackages, setSelectedPackages] = useState([]);
  const [selectedAddons, setSelectedAddons] = useState([]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 25,
    restDelta: 0.001,
  });

  // Add or remove a package without overwriting other Car/Bike/Home packages
  const handleTogglePackage = (pkg) => {
    setSelectedPackages((prev) =>
      prev.some((item) => item.id === pkg.id)
        ? prev.filter((item) => item.id !== pkg.id)
        : [...prev, { ...pkg, qty: 1 }]
    );
  };

  // Increment or decrement package quantity inside the Cart Drawer
  const handleUpdatePackageQty = (id, delta) => {
    setSelectedPackages((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + delta } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const handleRemovePackage = (id) => {
    setSelectedPackages((prev) => prev.filter((item) => item.id !== id));
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

  // Dev 2: Hook backend/database logging here alongside WhatsApp
  const handleBookingSubmit = (bookingPayload) => {
    console.log("DSP WhatsApp Booking Payload:", bookingPayload);
  };

  const cartCount =
    selectedPackages.reduce((sum, p) => sum + p.qty, 0) + selectedAddons.length;

  const totalAmount =
    selectedPackages.reduce((sum, p) => sum + p.numericPrice * p.qty, 0) +
    selectedAddons.reduce((sum, a) => sum + a.numericPrice, 0);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 right-0 left-0 z-50 h-1 origin-left bg-gradient-to-r from-[#0b2d6b] via-sky-500 to-lime-500"
      />

      <Navbar cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />

      <main>
        <Hero />
        <PackagesSection
          selectedPackages={selectedPackages}
          onTogglePackage={handleTogglePackage}
          selectedAddons={selectedAddons}
          onToggleAddon={handleToggleAddon}
          onOpenCart={() => setCartOpen(true)}
        />
        <WorkflowSection />
        <AboutSection onOpenCart={() => setCartOpen(true)} />
        <FaqSection />
      </main>

      <Footer />

      {/* Floating Bottom Cart Pill + Pulsing WhatsApp Button */}
      <div className="fixed right-5 bottom-5 z-30 flex items-center gap-3">
        <AnimatePresence>
          {cartCount > 0 && (
            <motion.button
              initial={{ opacity: 0, scale: 0.85, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 16 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
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
            </motion.button>
          )}
        </AnimatePresence>

        <div className="relative">
          <motion.span
            animate={{ scale: [1, 1.35, 1], opacity: [0.55, 0, 0.55] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute inset-0 rounded-full bg-emerald-500"
          />
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href={buildWhatsAppBookingUrl({
              selectedPackages,
              addons: selectedAddons,
              totalAmount,
            })}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="relative flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl transition hover:bg-emerald-700"
          >
            <MessageCircle className="h-6 w-6" />
          </motion.a>
        </div>
      </div>

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        selectedPackages={selectedPackages}
        onUpdatePackageQty={handleUpdatePackageQty}
        onRemovePackage={handleRemovePackage}
        selectedAddons={selectedAddons}
        onRemoveAddon={handleRemoveAddon}
        onBookingSubmit={handleBookingSubmit}
      />
    </div>
  );
}