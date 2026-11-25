import { motion } from "framer-motion";
import { MapPin, Sparkles, MessageSquareCheck, ShieldCheck } from "lucide-react";
import { WORKFLOW_STEPS } from "../data/servicesData";

export default function WorkflowSection() {
  const reasons = [
    {
      icon: MapPin,
      title: "Doorstep convenience",
      desc: "No detours or waiting at a wash centre — we clean right at your parking spot.",
    },
    {
      icon: Sparkles,
      title: "Service choices",
      desc: "Choose a quick express exterior wash, bike spa, or deep cabin sanitization.",
    },
    {
      icon: MessageSquareCheck,
      title: "Easy WhatsApp booking",
      desc: "Pick your services in the cart, share your Google Maps pin & slot on WhatsApp.",
    },
    {
      icon: ShieldCheck,
      title: "Hygienic & paint-safe",
      desc: "pH-neutral snow foam, sanitized interiors, and 6th wash free loyalty card.",
    },
  ];

  return (
    <section id="workflow" className="border-t border-slate-200/80 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700">
            Simple as 1–2–3
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            How DSP Doorstep Care Works
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Booking your doorstep wash &amp; sanitization takes just a few moments.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {WORKFLOW_STEPS.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="overflow-hidden rounded-[24px] border border-slate-200/90 bg-[#f8fafc] shadow-xs"
            >
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
                <span className="absolute top-3.5 left-3.5 flex h-9 w-9 items-center justify-center rounded-xl bg-[#0b2d6b] text-xs font-extrabold text-white shadow">
                  {item.step}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-extrabold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 rounded-[28px] border border-sky-100 bg-sky-50/60 p-8 sm:p-12">
          <div className="text-center">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700">
              The easier way to wash
            </span>
            <h3 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Why choose Doorstep Sanitization Providers?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Convenience, hygiene, and showroom shine at the heart of every visit.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-[#0b2d6b]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 font-extrabold text-slate-900">{r.title}</h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                    {r.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}