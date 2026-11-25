import { motion } from "framer-motion";
import { Target, Compass, CheckCircle2, MapPin, ExternalLink } from "lucide-react";
import DspLogo from "./DspLogo";
import { SERVICE_AREAS } from "../data/servicesData";

export default function AboutSection({ onOpenBooking }) {
  const objectives = [
    "Deliver reliable, showroom-grade bike and car washing right at your doorstep.",
    "Maintain strict cabin hygiene and vehicle sanitization standards for healthier commutes.",
    "Follow a documented 6-point pre-wash and post-wash quality inspection on every visit.",
    "Build lasting customer trust through transparent ₹ pricing, monthly plans, and 6th-wash-free rewards.",
  ];

  return (
    <section id="about" className="border-t border-slate-200/80 bg-[#f8fafc] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Company Profile + HD Animated DSP Emblem */}
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm lg:col-span-5"
          >
            <DspLogo variant="full" />
            <p className="mt-4 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
              Two-Wheelers • Hatchbacks • Sedans • SUVs • Fleets
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700">
              About Doorstep Sanitization Providers (DSP)
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Clean Today. Healthy Tomorrow.
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              <strong>Doorstep Sanitization Providers (DSP)</strong> is a dedicated
              doorstep bike &amp; car washing, cabin sanitization, and studio detailing
              company built to make vehicle care effortless. Instead of rushing your
              ride through an ordinary roadside rinse, we deliver a structured,
              spa-grade cleaning and sanitization experience right in your parking spot.
            </p>

            <p className="mt-3 text-base leading-relaxed text-slate-600">
              From routine snow-foam exterior washes and bike chain lubrication to
              deep interior vacuuming, steam AC sanitization, headlight restoration,
              and ceramic paint protection, our trained specialists treat every
              vehicle with precision and care.
            </p>

            <ul className="mt-6 space-y-2.5">
              {objectives.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm font-medium text-slate-700"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0b2d6b]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="rounded-[24px] border border-slate-200 bg-white p-8 shadow-2xs">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0b2d6b] text-white">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-extrabold text-slate-900">Our Vision</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
              To become India’s most trusted doorstep vehicle washing, sanitization,
              and detailing brand—recognized for consistent quality, eco-conscious
              water practices, transparent pricing, and unmatched convenience.
            </p>
          </div>

          <div className="rounded-[24px] border border-slate-200 bg-white p-8 shadow-2xs">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-600 text-white">
              <Compass className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-extrabold text-slate-900">Our Mission</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
              To deliver professional vehicle cleaning, sanitization, and paint
              protection using modern equipment, safe pH-neutral products, and
              skilled technicians—ensuring every customer enjoys a cleaner, healthier,
              and shinier ride without leaving home.
            </p>
          </div>
        </div>

        {/* Location & Doorstep Service Areas Card like WasherBuddy */}
        <div
          id="location"
          className="mt-14 rounded-[28px] border border-slate-200 bg-white p-8 shadow-xs sm:p-10"
        >
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700">
                Find us on the map
              </span>
              <h3 className="mt-1 text-2xl font-extrabold text-slate-900">
                DSP Doorstep Service Areas
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                We bring our mobile washing &amp; sanitization setup directly to societies and offices across Pune &amp; PCMC.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=Pune,Maharashtra"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-800 hover:border-[#0b2d6b] hover:text-[#0b2d6b]"
              >
                <MapPin className="h-4 w-4 text-[#0b2d6b]" />
                Open in Google Maps
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <button
                onClick={() => onOpenBooking()}
                className="cursor-pointer rounded-full bg-[#0b2d6b] px-5 py-2.5 text-xs font-bold text-white hover:bg-sky-700"
              >
                Check Slot in Your Area
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {SERVICE_AREAS.map((area) => (
              <span
                key={area}
                className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold text-slate-700"
              >
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
