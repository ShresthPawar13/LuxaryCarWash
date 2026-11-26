import { motion } from "framer-motion";

export default function AnimatedBikeArt({ packageId }) {
  if (packageId === "bike-scooty-express" || packageId === "bike-express") {
    return (
      <div className="relative flex h-52 w-full items-center justify-center overflow-hidden bg-gradient-to-br from-sky-100 via-white to-lime-50">
        <motion.div
          animate={{ x: [40, -120], opacity: [0, 0.7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
          className="absolute top-12 right-8 h-0.5 w-16 rounded-full bg-sky-400"
        />
        <motion.div
          animate={{ x: [60, -140], opacity: [0, 0.5, 0] }}
          transition={{ duration: 2.1, repeat: Infinity, ease: "linear", delay: 0.4 }}
          className="absolute top-20 right-4 h-0.5 w-24 rounded-full bg-lime-500"
        />

        <svg viewBox="0 0 280 150" className="h-44 w-full max-w-[290px]">
          <ellipse cx="140" cy="134" rx="88" ry="6" fill="#cbd5e1" opacity="0.65" />

          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "74px 112px" }}
          >
            <circle cx="74" cy="112" r="20" fill="#0f172a" />
            <circle cx="74" cy="112" r="11" fill="#e2e8f0" />
            <line x1="74" y1="101" x2="74" y2="123" stroke="#64748b" strokeWidth="2.5" />
            <line x1="63" y1="112" x2="85" y2="112" stroke="#64748b" strokeWidth="2.5" />
          </motion.g>

          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "208px 112px" }}
          >
            <circle cx="208" cy="112" r="20" fill="#0f172a" />
            <circle cx="208" cy="112" r="11" fill="#e2e8f0" />
            <line x1="208" y1="101" x2="208" y2="123" stroke="#64748b" strokeWidth="2.5" />
            <line x1="197" y1="112" x2="219" y2="112" stroke="#64748b" strokeWidth="2.5" />
          </motion.g>

          <motion.g
            animate={{ y: [0, -3.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M 55 104 L 96 100 L 96 109 L 55 111 Z" fill="#475569" />
            <path
              d="M 60 92 C 62 72, 102 68, 130 74 L 136 98 L 62 100 Z"
              fill="#ffffff"
              stroke="#0b2d6b"
              strokeWidth="2.5"
            />
            <path d="M 70 84 L 122 82" stroke="#0284c7" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M 128 96 L 176 96 L 180 104 L 124 104 Z" fill="#1e293b" />
            <path d="M 68 70 Q 100 63 132 71 L 128 77 L 68 76 Z" fill="#0f172a" />
            <path
              d="M 172 98 L 182 48 L 202 52 L 210 92 L 188 98 Z"
              fill="#ffffff"
              stroke="#0b2d6b"
              strokeWidth="2.5"
            />
            <path d="M 188 94 Q 212 88 224 104 L 194 106 Z" fill="#0284c7" />
            <path d="M 176 46 L 198 34 L 204 48 L 178 52 Z" fill="#0b2d6b" />
            <circle cx="204" cy="45" r="5" fill="#fef08a" />
            <motion.polygon
              points="209,42 256,30 256,60 209,48"
              fill="#fef08a"
              animate={{ opacity: [0.2, 0.65, 0.2] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <path d="M 52 70 L 68 70" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
          </motion.g>

          <motion.circle
            cx="112"
            cy="52"
            r="4"
            fill="#84cc16"
            animate={{ scale: [0.6, 1.35, 0.6], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.7, repeat: Infinity }}
          />
          <motion.circle
            cx="155"
            cy="62"
            r="3.5"
            fill="#0284c7"
            animate={{ scale: [1.3, 0.7, 1.3], opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>

        <span className="absolute right-3.5 bottom-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-extrabold text-[#0b2d6b] shadow-2xs">
          Activa &amp; Scooty
        </span>
      </div>
    );
  }

  if (packageId === "bike-normal-standard" || packageId === "bike-standard") {
    return (
      <div className="relative flex h-52 w-full items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100/80 via-sky-50 to-white">
        <motion.div
          animate={{ x: [50, -140], opacity: [0, 0.7, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
          className="absolute top-14 right-6 h-0.5 w-20 rounded-full bg-[#0b2d6b]/40"
        />

        <svg viewBox="0 0 280 150" className="h-44 w-full max-w-[290px]">
          <ellipse cx="140" cy="134" rx="94" ry="6" fill="#cbd5e1" opacity="0.65" />

          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "68px 110px" }}
          >
            <circle cx="68" cy="110" r="22" fill="#0f172a" />
            <circle cx="68" cy="110" r="14" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="68" y1="96" x2="68" y2="124" stroke="#94a3b8" strokeWidth="2" />
            <line x1="54" y1="110" x2="82" y2="110" stroke="#94a3b8" strokeWidth="2" />
          </motion.g>

          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "212px 110px" }}
          >
            <circle cx="212" cy="110" r="22" fill="#0f172a" />
            <circle cx="212" cy="110" r="14" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="212" y1="96" x2="212" y2="124" stroke="#94a3b8" strokeWidth="2" />
            <line x1="198" y1="110" x2="226" y2="110" stroke="#94a3b8" strokeWidth="2" />
          </motion.g>

          <motion.g
            animate={{ y: [0, -3.5, 0] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
          >
            <line x1="68" y1="110" x2="124" y2="98" stroke="#475569" strokeWidth="5" strokeLinecap="round" />
            <path d="M 114 106 L 154 106 L 162 96 L 122 96 Z" fill="#0f172a" />
            <rect x="122" y="76" width="36" height="24" rx="5" fill="#334155" />
            <line x1="126" y1="82" x2="154" y2="82" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="126" y1="88" x2="154" y2="88" stroke="#94a3b8" strokeWidth="1.5" />
            <path d="M 122 66 C 134 48, 168 50, 182 68 L 166 84 L 124 76 Z" fill="#0b2d6b" />
            <path d="M 156 64 L 184 74 L 172 88 L 152 76 Z" fill="#0284c7" />
            <path d="M 60 60 L 102 68 L 124 66 L 120 74 L 64 68 Z" fill="#1e293b" />
            <path d="M 52 56 L 96 64 L 88 72 L 54 64 Z" fill="#0b2d6b" />
            <line x1="184" y1="54" x2="212" y2="110" stroke="#eab308" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M 180 52 L 204 56 L 198 70 L 182 66 Z" fill="#0f172a" />
            <path d="M 172 44 L 188 48" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
            <motion.polygon
              points="204,57 258,46 258,76 204,67"
              fill="#38bdf8"
              animate={{ opacity: [0.2, 0.58, 0.2] }}
              transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.g>

          <motion.circle
            cx="148"
            cy="40"
            r="4"
            fill="#84cc16"
            animate={{ scale: [0.7, 1.35, 0.7], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </svg>

        <span className="absolute right-3.5 bottom-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-extrabold text-[#0b2d6b] shadow-2xs">
          Pulsar 160 &amp; Street Bikes
        </span>
      </div>
    );
  }

  return (
    <div className="relative flex h-52 w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-[#0b2d6b] to-sky-900">
      <motion.div
        animate={{ x: [80, -180], opacity: [0, 0.85, 0] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
        className="absolute top-12 right-4 h-0.5 w-24 rounded-full bg-lime-400"
      />
      <motion.div
        animate={{ x: [100, -200], opacity: [0, 0.65, 0] }}
        transition={{ duration: 1.35, repeat: Infinity, ease: "linear", delay: 0.35 }}
        className="absolute top-24 right-2 h-0.5 w-28 rounded-full bg-sky-400"
      />

      <svg viewBox="0 0 280 150" className="h-44 w-full max-w-[290px]">
        <ellipse cx="140" cy="134" rx="96" ry="6" fill="#020617" opacity="0.6" />

        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "64px 110px" }}
        >
          <circle cx="64" cy="110" r="22" fill="#020617" />
          <circle cx="64" cy="110" r="14" fill="#1e293b" stroke="#84cc16" strokeWidth="2" />
          <line x1="64" y1="96" x2="64" y2="124" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="50" y1="110" x2="78" y2="110" stroke="#cbd5e1" strokeWidth="2" />
        </motion.g>

        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "216px 110px" }}
        >
          <circle cx="216" cy="110" r="22" fill="#020617" />
          <circle cx="216" cy="110" r="14" fill="#1e293b" stroke="#84cc16" strokeWidth="2" />
          <line x1="216" y1="96" x2="216" y2="124" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="202" y1="110" x2="230" y2="110" stroke="#cbd5e1" strokeWidth="2" />
        </motion.g>

        <motion.g
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M 66 94 L 118 102 L 118 108 L 64 101 Z" fill="#94a3b8" />
          <path d="M 46 48 L 106 66 L 98 74 L 50 56 Z" fill="#38bdf8" />
          <path d="M 94 64 L 126 68 L 122 74 L 92 70 Z" fill="#020617" />
          <path
            d="M 118 66 C 138 46, 176 46, 212 64 L 194 104 L 122 104 L 116 80 Z"
            fill="#ffffff"
          />
          <path d="M 124 78 L 202 66 L 196 76 L 126 88 Z" fill="#84cc16" />
          <path d="M 134 92 L 190 86 L 186 96 L 136 100 Z" fill="#0284c7" />
          <path d="M 176 48 Q 194 34 206 52 L 184 54 Z" fill="#38bdf8" opacity="0.9" />
          <line x1="190" y1="58" x2="216" y2="110" stroke="#e2e8f0" strokeWidth="4.5" strokeLinecap="round" />
          <motion.polygon
            points="212,62 266,52 266,78 212,68"
            fill="#bef264"
            animate={{ opacity: [0.25, 0.7, 0.25] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.g>

        <motion.path
          d="M 164 26 L 166 33 L 173 35 L 166 37 L 164 44 L 162 37 L 155 35 L 162 33 Z"
          fill="#bef264"
          animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.6, 1, 0.6] }}
          style={{ transformOrigin: "164px 35px" }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </svg>

      <span className="absolute right-3.5 bottom-3 rounded-full bg-lime-400 px-3 py-1 text-[11px] font-extrabold text-[#0b2d6b] shadow-2xs">
        Sports Bike &amp; Superbike
      </span>
    </div>
  );
}