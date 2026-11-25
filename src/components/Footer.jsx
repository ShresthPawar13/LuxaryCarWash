import { Droplets, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#060910] py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-white">
              <Droplets className="h-6 w-6 text-cyan-400" />
              <span className="text-lg font-bold">
                Aqua<span className="text-cyan-400">Shine</span> Auto Spa
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed">
              Every Ride Deserves to Shine. Complete bike &amp; car washing,
              snow foam spa, and studio detailing center.
            </p>
          </div>

          <div className="space-y-2 text-sm">
            <h4 className="font-semibold text-white">Center Info</h4>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-400" />
              Main Auto Hub Road, Pune, Maharashtra
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-cyan-400" />
              +91 98765 43210
            </p>
            <p className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-cyan-400" />
              Mon – Sun: 8:30 AM – 8:30 PM
            </p>
          </div>

          <div className="space-y-2 text-sm">
            <h4 className="font-semibold text-white">Quick Navigation</h4>
            <div className="flex flex-col space-y-1.5">
              <a href="#packages" className="hover:text-cyan-400">
                Bike &amp; Car Packages
              </a>
              <a href="#services" className="hover:text-cyan-400">
                Ceramic &amp; Detailing Studio
              </a>
              <a href="#workflow" className="hover:text-cyan-400">
                6-Step Care Process
              </a>
              <a href="#offers" className="hover:text-cyan-400">
                Loyalty &amp; Opening Offers
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800/80 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} AquaShine Auto Spa. All rights reserved.
        </div>
      </div>
    </footer>
  );
}