import { useState } from "react";
import { Check, Bike, Car, Sparkles } from "lucide-react";
import {
  BIKE_PACKAGES,
  CAR_PACKAGES,
  PREMIUM_DETAILING,
} from "../data/servicesData";

export default function PackagesSection({ onSelectPackage }) {
  const [activeTab, setActiveTab] = useState("car");
  const packages = activeTab === "bike" ? BIKE_PACKAGES : CAR_PACKAGES;

  return (
    <section id="packages" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Transparent Spa Packages
          </h2>
          <p className="mt-3 text-slate-400">
            Choose a curated package for your two-wheeler or four-wheeler.
          </p>

          <div className="mt-8 inline-flex rounded-xl border border-slate-800 bg-slate-900/80 p-1.5">
            <button
              onClick={() => setActiveTab("car")}
              className={`flex cursor-pointer items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
                activeTab === "car"
                  ? "bg-cyan-500 text-slate-950 shadow"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Car className="h-4 w-4" />
              Car Packages
            </button>
            <button
              onClick={() => setActiveTab("bike")}
              className={`flex cursor-pointer items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
                activeTab === "bike"
                  ? "bg-cyan-500 text-slate-950 shadow"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Bike className="h-4 w-4" />
              Bike Packages
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col justify-between rounded-2xl border p-8 transition ${
                pkg.featured
                  ? "border-cyan-400/60 bg-gradient-to-b from-cyan-950/30 to-slate-900/90 shadow-xl shadow-cyan-500/10"
                  : "border-slate-800 bg-slate-900/50 hover:border-slate-700"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      pkg.featured
                        ? "bg-cyan-500/20 text-cyan-300"
                        : "bg-slate-800 text-slate-300"
                    }`}
                  >
                    {pkg.tag}
                  </span>
                  <span className="text-xs text-slate-400">{pkg.range}</span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-white">{pkg.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">
                    {pkg.price}
                  </span>
                  <span className="text-sm text-slate-400">/ session</span>
                </div>

                <ul className="mt-6 space-y-3">
                  {pkg.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-slate-300"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onSelectPackage(pkg.name)}
                className={`mt-8 w-full cursor-pointer rounded-xl py-3 text-sm font-bold transition ${
                  pkg.featured
                    ? "bg-cyan-500 text-slate-950 hover:bg-cyan-400"
                    : "border border-slate-700 bg-slate-800/80 text-white hover:border-cyan-500/50 hover:text-cyan-300"
                }`}
              >
                Select {pkg.name}
              </button>
            </div>
          ))}
        </div>

        <div id="services" className="mt-24">
          <div className="flex items-center gap-2 text-cyan-400">
            <Sparkles className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-widest">
              Studio Detailing
            </span>
          </div>
          <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Specialized Detailing &amp; Protection
          </h3>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PREMIUM_DETAILING.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-cyan-500/40"
              >
                <h4 className="font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
