import { motion } from "framer-motion";
import { Check, ArrowUpRight, ArrowDown, ShieldCheck, Sparkles, Star } from "lucide-react";
import { HERO_MEDIA } from "../data/servicesData";

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/50 to-[#f8fafc] pt-10 pb-16 sm:pt-16 sm:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* Left WasherBuddy-style Clean Typography */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="lg:col-span-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3.5 py-1.5 text-xs font-bold text-[#0b2d6b] shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-lime-600" />
            20% Opening Offer • 6th Wash Free Loyalty
          </div>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-[56px]">
            Clean ride.{" "}
            <span className="text-[#0b2d6b]">Zero travel.</span>
          </h1>

          <p className="mt-2 text-lg font-bold text-sky-700 sm:text-xl">
            Doorstep Bike &amp; Car Wash + Sanitization in Pune.
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
            Professional doorstep washing &amp; cabin sanitization brought directly
            to your parking spot. Save time, skip the queue, and enjoy a
            cleaner, healthier ride without driving to a wash centre.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#0b2d6b] px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-950/15 transition hover:-translate-y-0.5 hover:bg-sky-700"
            >
              Book Doorstep Wash
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <a
              href="#packages"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-800 shadow-2xs transition hover:border-[#0b2d6b] hover:text-[#0b2d6b]"
            >
              Explore Packages
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-700">
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 stroke-[2.5] text-lime-600" /> At your doorstep
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 stroke-[2.5] text-lime-600" /> Simple ₹ pricing
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 stroke-[2.5] text-lime-600" /> Easy booking
            </span>
          </div>
        </motion.div>

        {/* Right Realistic Multi-Photo Collage with Floating Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative lg:col-span-6"
        >
          <div className="overflow-hidden rounded-[28px] border border-slate-200/90 bg-white p-2 shadow-xl">
            <img
              src={HERO_MEDIA.main}
              alt="Doorstep Sanitization Providers snow foam car wash"
              className="h-[340px] w-full rounded-[22px] object-cover sm:h-[430px]"
            />
          </div>

          {/* Floating Bottom-Left Card */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:left-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-100 text-lime-700">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-extrabold text-slate-900">pH-Neutral Foam &amp; Sanitization</p>
              <p className="text-[11px] font-medium text-slate-500">Safe for bikes, cars &amp; ceramic coats</p>
            </div>
          </motion.div>

          {/* Floating Top-Right Rating Pill */}
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 right-4 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-md sm:right-6"
          >
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="text-xs font-extrabold text-slate-900">4.9/5</span>
            <span className="text-xs font-medium text-slate-500">Pune Doorstep Care</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
