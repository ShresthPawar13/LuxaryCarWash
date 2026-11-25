import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "../data/servicesData";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" className="border-t border-slate-200/80 bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700">
            Need to know
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fafc]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="flex w-full cursor-pointer items-center justify-between px-6 py-4 text-left text-sm font-bold text-slate-900 sm:text-base"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${
                      isOpen ? "rotate-180 text-[#0b2d6b]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-slate-200/80 bg-white px-6 py-4 text-sm leading-relaxed text-slate-600">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
