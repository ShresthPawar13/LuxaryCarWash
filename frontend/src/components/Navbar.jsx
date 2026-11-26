import { useState } from "react";
import { Menu, X, ShoppingBag, User, LogOut } from "lucide-react";
import DspLogo from "./DspLogo";
import { useAuth } from "../context/AuthContext";

export default function Navbar({ cartCount, onOpenCart, onOpenAuth }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const navLinks = [
    { label: "Packages", href: "#packages" },
    { label: "Add-ons", href: "#addons" },
    { label: "How it works", href: "#workflow" },
    { label: "About Us", href: "#about" },
    { label: "Location", href: "#location" },
    { label: "FAQs", href: "#faqs" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur-md">
      {/* Clean Top Announcement Bar */}
      <div className="border-b border-slate-100 bg-sky-50/90 px-4 py-1.5 text-center text-xs font-medium text-slate-700">
        Doorstep Car &amp; Bike Wash + Sanitization &bull; Serving Pune &amp; PCMC &bull; 6th Wash Free
      </div>

      {/* Main Navigation Row */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" aria-label="Doorstep Sanitization Providers Home" className="shrink-0">
          <DspLogo variant="compact" />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-semibold text-slate-600 transition hover:text-[#0b2d6b]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          {/* Customer Auth Pill / Login Button */}
          {user ? (
            <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 py-1.5 pr-2 pl-3.5 sm:flex">
              <span className="whitespace-nowrap text-xs font-bold text-[#0b2d6b]">
                Hi, {user.name.split(" ")[0]}
              </span>
              <span className="whitespace-nowrap rounded-full bg-lime-400 px-2.5 py-0.5 text-[11px] font-extrabold text-[#0b2d6b]">
                {user.washCount % 6}/5 Washes
              </span>
              <button
                onClick={logout}
                title="Logout"
                className="cursor-pointer rounded-full p-1 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
              >
                <LogOut className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAuth}
              className="hidden cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-[#0b2d6b] transition hover:bg-slate-50 sm:inline-flex"
            >
              <User className="h-3.5 w-3.5" />
              Login
            </button>
          )}

          {/* Unified Service Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#0b2d6b] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-sky-700 sm:px-5 sm:text-sm"
          >
            <ShoppingBag className="h-4 w-4 shrink-0" />
            <span>Service Cart</span>
            {cartCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-lime-400 px-1.5 text-[11px] font-extrabold text-[#0b2d6b]">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                {link.label}
              </a>
            ))}

            {user ? (
              <div className="mt-2 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5">
                <div>
                  <p className="text-sm font-bold text-[#0b2d6b]">{user.name}</p>
                  <p className="text-xs text-slate-500">
                    Loyalty Progress: {user.washCount % 6}/5 washes
                  </p>
                </div>
                <button
                  onClick={() => { logout(); setMenuOpen(false); }}
                  className="rounded-lg bg-slate-200 px-3 py-1.5 text-xs font-bold text-slate-700"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => { setMenuOpen(false); onOpenAuth(); }}
                className="mt-2 flex items-center justify-center gap-2 rounded-full border border-[#0b2d6b] py-2.5 text-sm font-bold text-[#0b2d6b]"
              >
                <User className="h-4 w-4" />
                Customer Login / Sign Up
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
