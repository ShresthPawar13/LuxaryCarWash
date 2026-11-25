import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import DspLogo from "./DspLogo";
import { buildWhatsAppBookingUrl } from "../utils/whatsapp";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-[28px] bg-[#0b2d6b] px-8 py-12 text-center text-white shadow-lg sm:flex-row sm:text-left">
          <div>
            <h3 className="text-2xl font-extrabold sm:text-3xl">
              Ready for a cleaner, sanitized ride?
            </h3>
            <p className="mt-2 text-sm text-sky-100">
              Clean Today. Healthy Tomorrow. Chat directly on WhatsApp to confirm your doorstep slot.
            </p>
          </div>
          <a
            href={buildWhatsAppBookingUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-extrabold text-white shadow-sm transition hover:bg-emerald-400"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp ↗
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <DspLogo variant="compact" />
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Doorstep Sanitization Providers (DSP) — Bringing convenience,
              hygiene, and a fresh showroom clean directly to your parking spot.
            </p>
          </div>

          <div className="space-y-2.5 text-sm text-slate-600">
            <h4 className="font-extrabold text-slate-900">Contact &amp; Booking</h4>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-[#0b2d6b]" />
              Doorstep Service Across Pune &amp; PCMC
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-[#0b2d6b]" />
              +91 98765 43210
            </p>
            <p className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-[#0b2d6b]" />
              Mon – Sun: 8:00 AM – 8:30 PM
            </p>
          </div>

          <div className="space-y-2.5 text-sm text-slate-600">
            <h4 className="font-extrabold text-slate-900">Explore</h4>
            <div className="flex flex-col space-y-1.5 font-medium">
              <a href="#packages" className="hover:text-[#0b2d6b]">
                Packages
              </a>
              <a href="#addons" className="hover:text-[#0b2d6b]">
                Add-on Cart
              </a>
              <a href="#workflow" className="hover:text-[#0b2d6b]">
                How It Works
              </a>
              <a href="#about" className="hover:text-[#0b2d6b]">
                About DSP
              </a>
              <a href="#location" className="hover:text-[#0b2d6b]">
                Google Maps &amp; Areas
              </a>
              <a href="#faqs" className="hover:text-[#0b2d6b]">
                FAQs
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs font-medium text-slate-500">
          © {new Date().getFullYear()} Doorstep Sanitization Providers (DSP). All Rights Reserved. Clean Today. Healthy Tomorrow.
        </div>
      </div>
    </footer>
  );
}