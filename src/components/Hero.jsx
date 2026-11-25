import { Sparkles, ShieldCheck, Clock, ArrowRight } from "lucide-react";

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-800/60 bg-gradient-to-b from-[#0c1424] via-[#090d16] to-[#090d16] py-20 sm:py-28">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300">
          <Sparkles className="h-3.5 w-3.5" />
          Opening Offer: 20% Off First Week • 6th Wash Free
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          Every Ride Deserves to{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">
            Shine.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Professional two-wheeler &amp; four-wheeler washing, snow foam spa,
          interior deep cleaning, and ceramic detailing under one roof.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => onOpenBooking()}
            className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-cyan-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400 sm:w-auto"
          >
            Book Your Slot
            <ArrowRight className="h-4 w-4" />
          </button>
          <a
            href="#packages"
            className="inline-flex w-full items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-500/50 hover:text-cyan-300 sm:w-auto"
          >
            Explore Packages &amp; Rates
          </a>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex items-center justify-center gap-2.5 rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-3 text-sm text-slate-300">
            <ShieldCheck className="h-5 w-5 text-cyan-400" />
            <span>pH-Neutral Safe Chemicals</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-3 text-sm text-slate-300">
            <Sparkles className="h-5 w-5 text-cyan-400" />
            <span>Bikes, Hatchbacks &amp; SUVs</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-3 text-sm text-slate-300">
            <Clock className="h-5 w-5 text-cyan-400" />
            <span>45-Min Express Turnaround</span>
          </div>
        </div>
      </div>
    </section>
  );
}
