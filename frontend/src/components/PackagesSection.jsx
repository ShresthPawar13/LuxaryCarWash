import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Bike, Car, Home, Plus, Info, ShoppingBag } from "lucide-react";
import {
  BIKE_PACKAGES,
  CAR_PACKAGES,
  HOME_PACKAGES,
  ADDON_SERVICES,
} from "../data/servicesData";

export default function PackagesSection({
  selectedPackages,
  onTogglePackage,
  selectedAddons,
  onToggleAddon,
  onOpenCart,
}) {
  const [activeTab, setActiveTab] = useState("car");

  const tabs = [
    { id: "car", label: "Car Packages", icon: Car },
    { id: "bike", label: "Bike Packages", icon: Bike },
    { id: "home", label: "Home Cleaning", icon: Home },
  ];

  const packages =
    activeTab === "bike"
      ? BIKE_PACKAGES
      : activeTab === "home"
      ? HOME_PACKAGES
      : CAR_PACKAGES;

  const getPackageQty = (id) =>
    selectedPackages.find((item) => item.id === id)?.qty || 0;

  const isAddonSelected = (id) => selectedAddons.some((item) => item.id === id);

  return (
    <section id="packages" className="bg-[#f8fafc] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700">
            Step 1 · Mix &amp; match across categories
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Car, Bike &amp; Home Sanitization Packages
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
            Add Car Wash, Bike Spa, and Home Cleaning packages together in one single cart — switch tabs freely without losing your selections.
          </p>

          {/* Animated Sliding Pill Tabs with Category Selection Badges */}
          <div className="mt-8 inline-flex flex-wrap justify-center gap-1 rounded-full border border-slate-200 bg-white p-1.5 shadow-xs">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              const categoryCount = selectedPackages
                .filter((p) => p.category.toLowerCase() === tab.id)
                .reduce((sum, p) => sum + p.qty, 0);

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition ${
                    isActive ? "text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activePackageTab"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-[#0b2d6b] shadow-sm"
                    />
                  )}
                  <Icon className="relative z-10 h-4 w-4" />
                  <span className="relative z-10">{tab.label}</span>
                  {categoryCount > 0 && (
                    <span
                      className={`relative z-10 flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] font-extrabold ${
                        isActive
                          ? "bg-lime-400 text-[#0b2d6b]"
                          : "bg-emerald-600 text-white"
                      }`}
                    >
                      {categoryCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Animated Package Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mt-12 grid gap-8 lg:grid-cols-3"
          >
            {packages.map((pkg, idx) => {
              const qty = getPackageQty(pkg.id);
              const isSelected = qty > 0;

              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                    delay: idx * 0.08,
                  }}
                  whileHover={{ y: -8 }}
                  className={`flex flex-col justify-between overflow-hidden rounded-[26px] border bg-white transition-shadow duration-300 hover:shadow-xl ${
                    isSelected
                      ? "border-emerald-600 ring-2 ring-emerald-500/25 shadow-lg"
                      : pkg.featured
                      ? "border-[#0b2d6b] ring-2 ring-[#0b2d6b]/15 shadow-lg"
                      : "border-slate-200/90 shadow-sm"
                  }`}
                >
                  <div>
                    <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                      <motion.img
                        whileHover={{ scale: 1.07 }}
                        transition={{ duration: 0.5 }}
                        src={pkg.image}
                        alt={pkg.name}
                        className="h-full w-full object-cover"
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
                        <motion.span
                          initial={{ scale: 0.7, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-emerald-600 px-3 py-1 text-xs font-extrabold text-white shadow"
                        >
                          <Check className="h-3.5 w-3.5" /> In Cart ({qty})
                        </motion.span>
                      )}
                    </div>

                    <div className="p-7">
                      <h3 className="text-xl font-extrabold text-slate-900">
                        {pkg.name}
                      </h3>
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
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      onClick={() => onTogglePackage(pkg)}
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
                          <Check className="h-4 w-4" /> Added to Cart (Click to Remove)
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="h-4 w-4" /> Add Package to Cart
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Add-on Services Cart Grid */}
        <div id="addons" className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-center"
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700">
              Step 2 · Extra attention (Optional)
            </span>
            <h3 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Home &amp; Vehicle Add-on Services
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">
              Tap <strong>+ Add to Cart</strong> to combine sofa shampooing, bathroom descaling, kitchen degreasing, or car interior treatments.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ADDON_SERVICES.map((addon, idx) => {
              const added = isAddonSelected(addon.id);
              return (
                <motion.div
                  key={addon.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                    delay: idx * 0.06,
                  }}
                  whileHover={{ y: -6 }}
                  className={`group overflow-hidden rounded-2xl border bg-white shadow-xs transition-shadow hover:shadow-md ${
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
                    <motion.button
                      whileTap={{ scale: 0.96 }}
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
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-xs sm:flex-row"
          >
            <p className="flex items-center gap-2 text-xs font-medium text-slate-600">
              <Info className="h-4 w-4 shrink-0 text-sky-600" />
              You can combine multiple Car, Bike, and Home services in a single cart and adjust quantities inside checkout.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenCart}
              className="shrink-0 cursor-pointer rounded-full bg-[#0b2d6b] px-5 py-2.5 text-xs font-bold text-white hover:bg-sky-700"
            >
              Review Cart &amp; Pick Slot →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}