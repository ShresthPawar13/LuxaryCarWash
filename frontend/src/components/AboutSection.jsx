import { motion } from "framer-motion";
import { Target, Compass, CheckCircle2, Clock, Navigation, ExternalLink } from "lucide-react";
import DspLogo from "./DspLogo";
import { SERVICE_AREAS } from "../data/servicesData";

export default function AboutSection({ onOpenCart }) {
  const objectives = [
    "Specialize in doorstep snow-foam car washing, bike spa, and interior cabin sanitization.",
    "Provide rooftop solar panel cleaning plus sofa shampooing & residential sanitization under Others.",
    "Follow a documented 6-point pre-wash and post-wash quality inspection on every visit.",
    "Build lasting customer trust through transparent ₹ pricing, monthly plans, and 6th-wash-free rewards.",
  ];

  return (
    <section id="about" className="border-t border-slate-200/80 bg-[#f8fafc] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              Cars • Bikes • Solar Panels • Sofas &amp; Others
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
              Showroom Vehicle Care &amp; Sanitization at Your Doorstep
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              <strong>Doorstep Sanitization Providers (DSP)</strong> is a dedicated
              doorstep car and bike washing, detailing, and sanitization company
              built to make vehicle maintenance effortless. From family cars and
              SUVs to sports cars, scooties, and superbikes, you get a spa-grade
              foam wash right at your parking spot.
            </p>

            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Alongside our core vehicle packages, DSP also offers spot-free
              Solar Panel Cleaning and Sofa &amp; Home Sanitization services—all
              bookable together in one combined cart.
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
              To become India’s most trusted doorstep car &amp; bike washing, solar
              care, and sanitization brand—recognized for consistent quality,
              water-smart practices, and transparent pricing.
            </p>
          </div>

          <div className="rounded-[24px] border border-slate-200 bg-white p-8 shadow-2xs">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-600 text-white">
              <Compass className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-extrabold text-slate-900">Our Mission</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
              To deliver professional vehicle cleaning, solar panel efficiency care,
              and upholstery hygiene using modern equipment, safe pH-neutral
              products, and skilled technicians right at your doorstep.
            </p>
          </div>
        </div>

        {/* Location & Slot Card */}
        <div
          id="location"
          className="mt-14 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm"
        >
          <div className="grid lg:grid-cols-12">
            <div className="flex flex-col justify-between p-8 sm:p-10 lg:col-span-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700">
                  Find us on Google Maps
                </span>
                <h3 className="mt-1.5 text-2xl font-extrabold text-slate-900">
                  DSP Doorstep Coverage &amp; Hub
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  We bring our mobile washing &amp; sanitization setup directly to residential societies, apartments, and office parking lots across Pune &amp; PCMC.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {SERVICE_AREAS.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
                    >
                      📍 {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-6">
                <button
                  onClick={onOpenCart}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#0b2d6b] px-6 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-sky-700 sm:text-sm"
                >
                  <Clock className="h-4 w-4" />
                  Select Slot &amp; Drop Pin
                </button>
                <a
                  href="https://maps.google.com/?q=Pune,Maharashtra"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-5 py-3 text-xs font-bold text-slate-800 transition hover:border-[#0b2d6b] hover:text-[#0b2d6b] sm:text-sm"
                >
                  <Navigation className="h-4 w-4 text-[#0b2d6b]" />
                  Open Google Maps
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="min-h-[300px] border-t border-slate-200 bg-slate-100 lg:col-span-6 lg:border-t-0 lg:border-l">
              <iframe
                title="DSP Pune Service Coverage Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=73.7600%2C18.4500%2C73.9600%2C18.5900&layer=mapnik&marker=18.5204%2C73.8567"
                className="h-full min-h-[320px] w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}