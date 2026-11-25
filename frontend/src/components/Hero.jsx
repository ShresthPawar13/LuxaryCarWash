import { motion } from "framer-motion";
import {
  Check,
  ArrowDown,
  ShieldCheck,
  Sparkles,
  Star,
  MessageCircle,
  Bike,
  Car,
} from "lucide-react";
import { HERO_MEDIA } from "../data/servicesData";
import { buildWhatsAppBookingUrl } from "../utils/whatsapp";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 110, damping: 16 },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/60 to-[#f8fafc] pt-10 pb-16 sm:pt-16 sm:pb-24">
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-sky-200/50 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-20 right-0 h-80 w-80 rounded-full bg-lime-200/45 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* Left Car & Bike Focused Copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3.5 py-1.5 text-xs font-bold text-[#0b2d6b] shadow-2xs"
          >
            <Sparkles className="h-3.5 w-3.5 text-lime-600" />
            Doorstep Car &amp; Bike Wash · Plus Sofa &amp; Home Sanitization
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[54px]"
          >
            Clean ride.{" "}
            <span className="bg-gradient-to-r from-[#0b2d6b] via-sky-600 to-lime-600 bg-clip-text text-transparent">
              Zero travel.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-3 text-lg font-bold text-sky-700 sm:text-xl"
          >
            Doorstep Car &amp; Bike Wash + Sanitization in Pune.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-xl text-base leading-relaxed text-slate-600"
          >
            <strong>Doorstep Sanitization Providers (DSP)</strong> brings professional
            snow-foam car &amp; bike washing, interior cabin detailing, and
            anti-bacterial sanitization right to your parking spot — plus on-demand
            sofa &amp; home cleaning whenever you need it.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={buildWhatsAppBookingUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-900/15 transition hover:bg-emerald-700"
            >
              <MessageCircle className="h-4 w-4" />
              Book on WhatsApp ↗
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#packages"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-800 shadow-2xs transition hover:border-[#0b2d6b] hover:text-[#0b2d6b]"
            >
              Car &amp; Bike Packages
              <ArrowDown className="h-4 w-4" />
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-700"
          >
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 stroke-[2.5] text-lime-600" /> Car Foam &amp; Detailing
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 stroke-[2.5] text-lime-600" /> Bike Spa &amp; Chain Care
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 stroke-[2.5] text-lime-600" /> Sofa &amp; Home Add-ons
            </span>
          </motion.div>
        </motion.div>

        {/* Right Car + Bike Dual Photo Collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative lg:col-span-6"
        >
          {/* Main Car Wash Photo */}
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="overflow-hidden rounded-[28px] border border-slate-200/90 bg-white p-2 shadow-xl"
          >
            <img
              src={HERO_MEDIA.main}
              alt="Doorstep Car Snow Foam Wash"
              className="h-[320px] w-full rounded-[22px] object-cover sm:h-[400px]"
            />
          </motion.div>

          {/* Overlapping Bike Spa Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: 24, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            whileHover={{ scale: 1.04 }}
            className="absolute -right-2 -bottom-7 hidden w-56 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl sm:block"
          >
            <img
              src={HERO_MEDIA.bike}
              alt="Doorstep Bike Spa & Chain Care"
              className="h-28 w-full object-cover"
            />
            <div className="flex items-center gap-2 bg-white px-3 py-2">
              <Bike className="h-4 w-4 shrink-0 text-[#0b2d6b]" />
              <span className="text-[11px] font-extrabold text-slate-900">
                Two-Wheeler Foam Spa
              </span>
            </div>
          </motion.div>

          {/* Floating Bottom-Left Trust Badge */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:left-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-100 text-lime-700">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-extrabold text-slate-900">
                pH-Neutral Foam &amp; Sanitization
              </p>
              <p className="text-[11px] font-medium text-slate-500">
                Safe for cars, bikes &amp; upholstery
              </p>
            </div>
          </motion.div>

          {/* Floating Top-Right Rating Pill */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 right-4 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-md sm:right-6"
          >
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="text-xs font-extrabold text-slate-900">4.9/5</span>
            <span className="text-xs font-medium text-slate-500">
              <Car className="mr-1 inline h-3.5 w-3.5 text-sky-600" />
              Pune Doorstep Care
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}