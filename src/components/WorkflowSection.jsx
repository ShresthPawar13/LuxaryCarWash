import { Gift, Award, Building2 } from "lucide-react";
import { WORKFLOW_STEPS } from "../data/servicesData";

export default function WorkflowSection({ onOpenBooking }) {
  return (
    <section id="workflow" className="border-t border-slate-800/70 bg-[#0b101b] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            The 6-Step AquaShine Care Process
          </h2>
          <p className="mt-3 text-slate-400">
            Every vehicle goes through a structured inspection and multi-stage spa workflow.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WORKFLOW_STEPS.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <span className="inline-block rounded-lg bg-cyan-500/15 px-3 py-1 text-xs font-bold text-cyan-400">
                STEP {item.step}
              </span>
              <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <div id="offers" className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/40 to-slate-900 p-6">
            <Gift className="h-8 w-8 text-cyan-400" />
            <h4 className="mt-4 text-lg font-bold text-white">20% Opening Offer</h4>
            <p className="mt-1 text-sm text-slate-300">
              Enjoy flat 20% off on your first full bike or car spa booking.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <Award className="h-8 w-8 text-cyan-400" />
            <h4 className="mt-4 text-lg font-bold text-white">6th Wash Free</h4>
            <p className="mt-1 text-sm text-slate-300">
              Join our loyalty card program—complete 5 paid washes and get your 6th wash free.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <Building2 className="h-8 w-8 text-cyan-400" />
            <h4 className="mt-4 text-lg font-bold text-white">Monthly &amp; Family Plans</h4>
            <p className="mt-1 text-sm text-slate-300">
              Custom multi-vehicle discounts and doorstep pickup &amp; drop options.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenBooking()}
            className="cursor-pointer rounded-xl bg-cyan-500 px-8 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-400"
          >
            Claim Offer &amp; Schedule Wash
          </button>
        </div>
      </div>
    </section>
  );
}
