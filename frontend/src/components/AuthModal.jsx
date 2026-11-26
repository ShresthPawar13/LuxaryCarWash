import { useState } from "react";
import { X, Mail, Lock, User, Phone, Sparkles } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const { saveAuth } = useAuth();

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const endpoint = isLogin
      ? "http://localhost:5000/api/auth/login"
      : "http://localhost:5000/api/auth/register";

    const payload = isLogin
      ? { email: formData.email, password: formData.password }
      : formData;

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Authentication failed");
      }

      saveAuth(data.token, data.user);
      setFormData({ name: "", email: "", phone: "", password: "" });
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
      <div className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-5">
          <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-[#0b2d6b]">
            <Sparkles className="h-3.5 w-3.5 text-sky-600" />
            DSP Loyalty Club · 6th Wash Free
          </div>
          <h2 className="text-2xl font-extrabold text-[#0b2d6b]">
            {isLogin ? "Welcome Back" : "Create Your Account"}
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            {isLogin
              ? "Sign in to track your washes and unlock your free wash."
              : "Register to save your contact details and track wash rewards."}
          </p>
        </div>

        <div className="mb-5 grid grid-cols-2 gap-1 rounded-xl bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => { setIsLogin(true); setError(""); }}
            className={`cursor-pointer rounded-lg py-2 text-sm font-bold transition ${
              isLogin
                ? "bg-[#0b2d6b] text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => { setIsLogin(false); setError(""); }}
            className={`cursor-pointer rounded-lg py-2 text-sm font-bold transition ${
              !isLogin
                ? "bg-[#0b2d6b] text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Sign Up
          </button>
        </div>

        {error && (
          <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm font-medium text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3.5">
          {!isLogin && (
            <>
              <div>
                <label className="mb-1 block text-xs font-bold text-slate-700">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute top-2.5 left-3 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 py-2 pr-3 pl-10 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0b2d6b] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-slate-700">
                  WhatsApp / Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute top-2.5 left-3 h-4 w-4 text-slate-400" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 py-2 pr-3 pl-10 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0b2d6b] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>
            </>
          )}

          <div>
            <label className="mb-1 block text-xs font-bold text-slate-700">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute top-2.5 left-3 h-4 w-4 text-slate-400" />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 py-2 pr-3 pl-10 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0b2d6b] focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-bold text-slate-700">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute top-2.5 left-3 h-4 w-4 text-slate-400" />
              <input
                type="password"
                name="password"
                required
                minLength={6}
                value={formData.password}
                onChange={handleChange}
                placeholder="Min. 6 characters"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 py-2 pr-3 pl-10 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0b2d6b] focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 w-full cursor-pointer rounded-xl bg-[#0b2d6b] py-2.5 text-sm font-extrabold text-white shadow-sm transition hover:bg-sky-700 disabled:opacity-50"
          >
            {submitting
              ? "Please wait..."
              : isLogin
              ? "Login to Account"
              : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}
