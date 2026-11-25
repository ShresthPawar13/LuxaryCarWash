import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Bike, Car, Plus, Info, ShoppingBag } from "lucide-react";
import {
  BIKE_PACKAGES,
  CAR_PACKAGES,
  ADDON_SERVICES,
} from "../data/servicesData";

export default function PackagesSection({
  selectedPackage,
  onSelectPackage,
  selectedAddons,
  onToggleAddon,
  onOpenCart,
}) {
  const [activeTab, setActiveTab] = useState("car");
  const packages = activeTab === "bike" ? BIKE_PACKAGES : CAR_PACKAGES;

  const isAddonSelected = (id) => selectedAddons.some((item) => item.id === id);

  return (
    <section id="packages" className="bg-[#f8fafc] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700">
            Step 1 · Choose your clean
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Doorstep Wash &amp; Sanitization Packages
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
            Select a base package below, add any optional detailing treatments, and review everything together in your Service Cart.
          </p>

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

        {/* Package Cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, idx) => {
            const isSelected = selectedPackage?.id === pkg.id;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className={`flex flex-col justify-between overflow-hidden rounded-[26px] border bg-white transition duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                  isSelected
                    ? "border-emerald-600 ring-2 ring-emerald-500/25 shadow-lg"
                    : pkg.featured
                    ? "border-[#0b2d6b] ring-2 ring-[#0b2d6b]/15 shadow-lg"
                    : "border-slate-200/90 shadow-sm"
                }`}
              >
                <div>
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
                    {isSelected && (
                      <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-emerald-600 px-3 py-1 text-xs font-extrabold text-white shadow">
                        <Check className="h-3.5 w-3.5" /> Selected
                      </span>
                    )}
                  </div>

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
                    onClick={() => onSelectPackage(pkg)}
                    className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold transition ${
                      isSelected
                        ? "bg-emerald-600 text-white hover:bg-emerald-700"
                        : pkg.featured
                        ? "bg-[#0b2d6b] text-white shadow-sm hover:bg-sky-700"
                        : "border border-slate-300 bg-white text-slate-900 hover:border-[#0b2d6b] hover:text-[#0b2d6b]"
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="h-4 w-4" /> Selected in Cart
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="h-4 w-4" /> Select Package
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Add-on Cart Builder Section */}
        <div id="addons" className="mt-24">
          <div className="text-center">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700">
              Step 2 · Extra attention (Optional)
            </span>
            <h3 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Add-on Sanitization &amp; Detailing Cart
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">
              Tap <strong>+ Add to Cart</strong> on any extra treatment below to bundle it with your wash.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ADDON_SERVICES.map((addon, idx) => {
              const added = isAddonSelected(addon.id);
              return (
                <motion.div
                  key={addon.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className={`group overflow-hidden rounded-2xl border bg-white shadow-xs transition hover:-translate-y-1 hover:shadow-md ${
                    added
                      ? "border-emerald-600 ring-2 ring-emerald-500/20"
                      : "border-slate-200/90"
                  }`}
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
                      onClick={() => onToggleAddon(addon)}
                      className={`mt-4 inline-flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-full py-2.5 text-xs font-bold transition ${
                        added
                          ? "bg-emerald-600 text-white hover:bg-emerald-700"
                          : "border border-slate-200 bg-slate-50 text-[#0b2d6b] hover:border-[#0b2d6b] hover:bg-sky-50"
                      }`}
                    >
                      {added ? (
                        <>
                          <Check className="h-3.5 w-3.5" /> Added to Cart (Tap to Remove)
                        </>
                      ) : (
                        <>
                          <Plus className="h-3.5 w-3.5" /> Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-xs sm:flex-row">
            <p className="flex items-center gap-2 text-xs font-medium text-slate-600">
              <Info className="h-4 w-4 shrink-0 text-sky-600" />
              All selected packages and add-ons combine automatically in your Service Cart with 1-click WhatsApp checkout.
            </p>
            <button
              onClick={onOpenCart}
              className="shrink-0 cursor-pointer rounded-full bg-[#0b2d6b] px-5 py-2.5 text-xs font-bold text-white hover:bg-sky-700"
            >
              Review Cart &amp; Pick Slot →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}