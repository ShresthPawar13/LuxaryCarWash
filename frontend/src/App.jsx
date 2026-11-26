import { useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  ShoppingBag,
  X,
  Send,
  Sparkles,
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PackagesSection from "./components/PackagesSection";
import WorkflowSection from "./components/WorkflowSection";
import AboutSection from "./components/AboutSection";
import FaqSection from "./components/FaqSection";
import CartDrawer from "./components/CartDrawer";
import AuthModal from "./components/AuthModal";
import Footer from "./components/Footer";
import { buildWhatsAppBookingUrl } from "./utils/whatsapp";
import { useAuth } from "./context/AuthContext";

const QUICK_ANSWERS = [
  {
    q: "How does the 6th Wash Free offer work?",
    a: "Every completed wash booked with your account adds +1 to your loyalty counter. On your 6th wash, your basic exterior wash is 100% free!",
  },
  {
    q: "Which areas in Pune do you serve?",
    a: "We provide doorstep car & bike wash across Pune & PCMC—including Wagholi, Kharadi, Viman Nagar, Wakad, Baner, Hinjewadi, and Hadapsar.",
  },
  {
    q: "Do you bring water and electricity?",
    a: "Yes! Our mobile unit carries pressurized water tanks and power backup—you only need to provide parking access.",
  },
];

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [whatsappMenuOpen, setWhatsappMenuOpen] = useState(false);
  const [deskView, setDeskView] = useState("menu"); // "menu" | "support"
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [supportForm, setSupportForm] = useState({ name: "", phone: "", message: "" });
  const [supportSent, setSupportSent] = useState(false);
  const [sendingSupport, setSendingSupport] = useState(false);

  const [selectedPackages, setSelectedPackages] = useState([]);
  const [selectedAddons, setSelectedAddons] = useState([]);

  const { user } = useAuth();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 25,
    restDelta: 0.001,
  });

  const handleTogglePackage = (pkg) => {
    setSelectedPackages((prev) =>
      prev.some((item) => item.id === pkg.id)
        ? prev.filter((item) => item.id !== pkg.id)
        : [...prev, { ...pkg, qty: 1 }]
    );
  };

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

  const handleBookingSubmit = (bookingPayload) => {
    console.log("DSP Booking Payload:", bookingPayload);
  };

  const cartCount =
    selectedPackages.reduce((sum, p) => sum + p.qty, 0) + selectedAddons.length;

  const totalAmount =
    selectedPackages.reduce((sum, p) => sum + p.numericPrice * p.qty, 0) +
    selectedAddons.reduce((sum, a) => sum + a.numericPrice, 0);

  // 1. Instant Booking handler: Opens CartDrawer if items exist, else scrolls to Packages
  const handleInstantBookingClick = () => {
    setWhatsappMenuOpen(false);
    if (cartCount > 0) {
      setCartOpen(true);
    } else {
      const pkgSection = document.getElementById("packages");
      if (pkgSection) {
        pkgSection.scrollIntoView({ behavior: "smooth" });
      }
      setTimeout(() => setCartOpen(true), 450);
    }
  };

  // 2. Open interactive Support view inside popup
  const handleOpenSupport = () => {
    setSupportForm({
      name: user?.name || "",
      phone: user?.phone || "",
      message: "",
    });
    setSelectedFaq(null);
    setSupportSent(false);
    setDeskView("support");
  };

  // 3. Submit enquiry to backend MongoDB (/api/enquiries)
  const handleSupportSubmit = async (e) => {
    e.preventDefault();
    setSendingSupport(true);
    try {
      await fetch("http://localhost:5000/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: supportForm.name || "Website Visitor",
          phone: supportForm.phone,
          message: supportForm.message,
        }),
      });
    } catch {
      // Even if offline, show confirmation so UX stays smooth
    } finally {
      setSendingSupport(false);
      setSupportSent(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 right-0 left-0 z-50 h-1 origin-left bg-gradient-to-r from-[#0b2d6b] via-sky-500 to-lime-500"
      />

      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenAuth={() => setAuthOpen(true)}
      />

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

      {/* Floating Bottom Cart Pill + Interactive DSP Support & Booking Desk */}
      <div className="fixed right-5 bottom-5 z-30 flex flex-col items-end gap-3">
        <AnimatePresence>
          {whatsappMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.95 }}
              className="w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
            >
              {/* Header */}
              <div className="bg-emerald-600 px-4 py-3 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {deskView === "support" && (
                      <button
                        onClick={() => setDeskView("menu")}
                        className="cursor-pointer rounded-lg p-1 text-emerald-100 hover:bg-emerald-700 hover:text-white"
                      >
                        <ArrowLeft className="h-4 w-4" />
                      </button>
                    )}
                    <span className="text-sm font-extrabold">
                      {deskView === "menu" ? "DSP Quick Desk" : "Ask DSP Support"}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setWhatsappMenuOpen(false);
                      setDeskView("menu");
                    }}
                    className="cursor-pointer rounded-lg p-1 text-emerald-100 hover:bg-emerald-700 hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <p className="mt-0.5 text-xs text-emerald-100">
                  {deskView === "menu"
                    ? "Book instantly or get answers in seconds"
                    : "Tap a quick question or send us a message"}
                </p>
              </div>

              {/* View 1: Main Two-Option Menu */}
              {deskView === "menu" && (
                <div className="space-y-2.5 p-3.5">
                  <button
                    onClick={handleInstantBookingClick}
                    className="flex w-full cursor-pointer items-center justify-between rounded-xl bg-emerald-50 px-3.5 py-3 text-left text-xs font-bold text-emerald-950 transition hover:bg-emerald-100"
                  >
                    <div>
                      <span className="flex items-center gap-2 text-emerald-900">
                        <Sparkles className="h-4 w-4 text-emerald-600" />
                        Instant Booking
                      </span>
                      <span className="mt-0.5 block pl-6 text-[11px] font-medium text-emerald-700">
                        {cartCount > 0
                          ? `Complete your ${cartCount} selected service(s)`
                          : "Choose a wash package & book slot"}
                      </span>
                    </div>
                    <Send className="h-3.5 w-3.5 shrink-0 text-emerald-700" />
                  </button>

                  <button
                    onClick={handleOpenSupport}
                    className="flex w-full cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-left text-xs font-bold text-slate-800 transition hover:bg-slate-100"
                  >
                    <div>
                      <span className="flex items-center gap-2">
                        <MessageCircle className="h-4 w-4 text-[#0b2d6b]" />
                        Ask a Question / Support
                      </span>
                      <span className="mt-0.5 block pl-6 text-[11px] font-medium text-slate-500">
                        Instant FAQ answers or direct callback
                      </span>
                    </div>
                    <Send className="h-3.5 w-3.5 shrink-0 text-slate-500" />
                  </button>
                </div>
              )}

              {/* View 2: Interactive In-App Support & FAQ */}
              {deskView === "support" && (
                <div className="max-h-96 overflow-y-auto p-3.5 space-y-3">
                  {/* Instant FAQ Chips */}
                  <div className="space-y-1.5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Instant Answers
                    </p>
                    {QUICK_ANSWERS.map((item, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedFaq(selectedFaq === idx ? null : idx)}
                        className="w-full cursor-pointer rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-left text-xs font-semibold text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50/50"
                      >
                        {item.q}
                        {selectedFaq === idx && (
                          <p className="mt-1.5 border-t border-slate-200 pt-1.5 font-normal text-slate-600">
                            {item.a}
                          </p>
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Direct Enquiry Form (Saves to MongoDB /api/enquiries) */}
                  {supportSent ? (
                    <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-center">
                      <CheckCircle2 className="mx-auto h-6 w-6 text-emerald-600" />
                      <p className="mt-1 text-xs font-bold text-emerald-900">
                        Question Received!
                      </p>
                      <p className="mt-0.5 text-[11px] text-emerald-700">
                        Our Pune support team will reach out shortly.
                      </p>
                      <a
                        href={buildWhatsAppBookingUrl()}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 underline"
                      >
                        Or chat live on WhatsApp <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  ) : (
                    <form onSubmit={handleSupportSubmit} className="space-y-2 border-t border-slate-100 pt-2.5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Send Us a Message
                      </p>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={supportForm.name}
                        onChange={(e) => setSupportForm({ ...supportForm, name: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 px-2.5 py-1.5 text-xs focus:border-emerald-600 focus:outline-none"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Phone / WhatsApp Number"
                        value={supportForm.phone}
                        onChange={(e) => setSupportForm({ ...supportForm, phone: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 px-2.5 py-1.5 text-xs focus:border-emerald-600 focus:outline-none"
                      />
                      <textarea
                        rows={2}
                        required
                        placeholder="How can we help with your car/bike?"
                        value={supportForm.message}
                        onChange={(e) => setSupportForm({ ...supportForm, message: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 px-2.5 py-1.5 text-xs focus:border-emerald-600 focus:outline-none"
                      />
                      <button
                        type="submit"
                        disabled={sendingSupport}
                        className="w-full cursor-pointer rounded-xl bg-emerald-600 py-2 text-xs font-bold text-white transition hover:bg-emerald-700 disabled:opacity-50"
                      >
                        {sendingSupport ? "Sending..." : "Send Question"}
                      </button>
                    </form>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-3">
          <AnimatePresence>
            {cartCount > 0 && (
              <motion.button
                initial={{ opacity: 0, scale: 0.85, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 16 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setCartOpen(true)}
                className="flex cursor-pointer items-center gap-2.5 whitespace-nowrap rounded-full bg-[#0b2d6b] px-5 py-3 text-xs font-extrabold text-white shadow-xl transition hover:bg-sky-700 sm:text-sm"
              >
                <ShoppingBag className="h-4 w-4 text-lime-400" />
                <span>
                  {cartCount} {cartCount === 1 ? "Service" : "Services"} &bull; ₹
                  {totalAmount.toLocaleString("en-IN")}
                </span>
                <span className="rounded-full bg-lime-400 px-2.5 py-0.5 text-[11px] font-extrabold text-[#0b2d6b]">
                  Checkout
                </span>
              </motion.button>
            )}
          </AnimatePresence>

          <div className="relative">
            {!whatsappMenuOpen && (
              <motion.span
                animate={{ scale: [1, 1.35, 1], opacity: [0.55, 0, 0.55] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-0 rounded-full bg-emerald-500"
              />
            )}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setWhatsappMenuOpen((prev) => !prev);
                setDeskView("menu");
              }}
              aria-label="DSP Quick Desk"
              className="relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl transition hover:bg-emerald-700"
            >
              {whatsappMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <MessageCircle className="h-6 w-6" />
              )}
            </motion.button>
          </div>
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

      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
}
