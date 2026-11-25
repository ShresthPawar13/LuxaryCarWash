import { useState } from "react";
import { Menu, X, ShoppingBag, MessageCircle } from "lucide-react";
import DspLogo from "./DspLogo";
import { buildWhatsAppBookingUrl } from "../utils/whatsapp";

export default function Navbar({ cartCount, onOpenCart }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Packages", href: "#packages" },
    { label: "Add-ons", href: "#addons" },
    { label: "How it works", href: "#workflow" },
    { label: "About Us", href: "#about" },
    { label: "Location", href: "#location" },
    { label: "FAQs", href: "#faqs" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur-md">
      <div className="border-b border-slate-100 bg-sky-50/90 px-4 py-1.5 text-center text-xs font-medium text-slate-700">
        🚗 Doorstep car &amp; bike wash + sanitization · Serving Pune &amp; PCMC ·{" "}
        <a
          href={buildWhatsAppBookingUrl()}
          target="_blank"
          rel="noreferrer"
          className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
        >
          Instant WhatsApp Booking ↗
        </a>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" aria-label="Doorstep Sanitization Providers Home">
          <DspLogo variant="compact" />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-[#0b2d6b]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          {/* Direct WhatsApp Button */}
          <a
            href={buildWhatsAppBookingUrl()}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </a>

          {/* Single Unified Service Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#0b2d6b] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-sky-700 sm:px-5 sm:text-sm"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Service Cart</span>
            {cartCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-lime-400 px-1.5 text-[11px] font-extrabold text-[#0b2d6b]">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href={buildWhatsAppBookingUrl()}
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-emerald-600 py-2.5 text-sm font-bold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}