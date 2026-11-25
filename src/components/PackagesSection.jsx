import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Bike, Car, ArrowUpRight, Plus, Info } from "lucide-react";
import {
  BIKE_PACKAGES,
  CAR_PACKAGES,
  ADDON_SERVICES,
} from "../data/servicesData";

export default function PackagesSection({ onSelectPackage }) {
  const [activeTab, setActiveTab] = useState("car");
  const packages = activeTab === "bike" ? BIKE_PACKAGES : CAR_PACKAGES;

  return (
    <section id="packages" className="bg-[#f8fafc] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700">
            Choose your clean
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Doorstep Wash &amp; Sanitization Packages
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
            Pick the service your vehicle needs. Clear pricing, convenient doorstep service right in your parking spot.
          </p>

          {/* Car / Bike Switcher */}
          <div className="mt-8 inline-flex rounded-full border border-slate-200 bg-white p-1.5 shadow-xs">
            <button
              onClick={() => setActiveTab("car")}
              className={`flex cursor-pointer items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition ${
                activeTab === "car"
                  ? "bg-[#0b2d6b] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Car className="h-4 w-4" />
              Car Wash Packages
            </button>
            <button
              onClick={() => setActiveTab("bike")}
              className={`flex cursor-pointer items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition ${
                activeTab === "bike"
                  ? "bg-[#0b2d6b] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Bike className="h-4 w-4" />
              Bike Spa Packages
            </button>
          </div>
        </div>

        {/* 3 Package Cards with High-Res Photos */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className={`flex flex-col justify-between overflow-hidden rounded-[26px] border bg-white transition duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                pkg.featured
                  ? "border-[#0b2d6b] ring-2 ring-[#0b2d6b]/15 shadow-lg"
                  : "border-slate-200/90 shadow-sm"
              }`}
            >
              <div>
                {/* Realistic Photo Header */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                  <span
                    className={`absolute top-4 left-4 rounded-full px-3.5 py-1 text-xs font-extrabold shadow-xs ${
                      pkg.featured
                        ? "bg-[#0b2d6b] text-white"
                        : "bg-white/95 text-slate-800"
                    }`}
                  >
                    {pkg.tag}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-7">
                  <h3 className="text-xl font-extrabold text-slate-900">{pkg.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {pkg.description}
                  </p>

                  <div className="mt-5 flex items-baseline gap-1.5 border-y border-slate-100 py-4">
                    <span className="text-3xl font-extrabold text-slate-900">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {pkg.billing} · {pkg.duration}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {pkg.features.map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm font-medium text-slate-700"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 stroke-[2.5] text-lime-600" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-7 pb-7">
                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-full py-3.5 text-sm font-bold transition ${
                    pkg.featured
                      ? "bg-[#0b2d6b] text-white shadow-sm hover:bg-sky-700"
                      : "border border-slate-300 bg-white text-slate-900 hover:border-[#0b2d6b] hover:text-[#0b2d6b]"
                  }`}
                >
                  Book this package
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-on Services Section like WasherBuddy */}
        <div id="addons" className="mt-24">
          <div className="text-center">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700">
              Extra attention
            </span>
            <h3 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Choose Add-on Sanitization &amp; Detailing Services
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">
              Need a little more care? Add targeted deep-cleaning treatments to your Express Wash or Standard Care booking.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ADDON_SERVICES.map((addon, idx) => (
              <motion.div
                key={addon.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="group overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={addon.image}
                    alt={addon.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-base font-extrabold text-slate-900">
                      {addon.title}
                    </h4>
                    <span className="shrink-0 rounded-full bg-sky-50 px-3 py-1 text-xs font-extrabold text-[#0b2d6b]">
                      {addon.price}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {addon.desc}
                  </p>
                  <button
                    onClick={() => onSelectPackage(`${addon.title} (${addon.price})`)}
                    className="mt-4 inline-flex cursor-pointer items-center gap-1 text-xs font-bold text-[#0b2d6b] hover:text-sky-700"
                  >
                    <Plus className="h-3.5 w-3.5" /> Add to booking
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-6 flex items-center justify-center gap-1.5 text-center text-xs font-medium text-slate-500">
            <Info className="h-3.5 w-3.5 text-sky-600" />
            Add-on services are available along with any Express Wash, Standard Care, or Bike Spa booking.
          </p>
        </div>
      </div>
    </section>
  );
}
