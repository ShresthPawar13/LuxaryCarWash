import { useState } from "react";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import DspLogo from "./DspLogo";

export default function Navbar({ onOpenBooking }) {
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
      {/* Top Announcement Bar like WasherBuddy */}
      <div className="border-b border-slate-100 bg-sky-50/90 px-4 py-1.5 text-center text-xs font-medium text-slate-700">
        🚗 Doorstep car &amp; bike wash + sanitization service · Serving Pune &amp; PCMC ·{" "}
        <button
          onClick={() => onOpenBooking()}
          className="cursor-pointer font-bold text-[#0b2d6b] underline underline-offset-2 hover:text-sky-700"
        >
          Instant Slot Booking
        </button>
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

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            <Phone className="h-3.5 w-3.5 text-[#0b2d6b]" />
            +91 98765 43210
          </a>
          <button
            onClick={() => onOpenBooking()}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-[#0b2d6b] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-700"
          >
            Book a Wash
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
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
            <button
              onClick={() => {
                setMenuOpen(false);
                onOpenBooking();
              }}
              className="mt-2 w-full rounded-full bg-[#0b2d6b] py-2.5 text-sm font-bold text-white"
            >
              Book a Wash
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
