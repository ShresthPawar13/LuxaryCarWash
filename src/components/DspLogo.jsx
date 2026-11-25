import { motion } from "framer-motion";

export default function DspLogo({ variant = "full", className = "" }) {
  if (variant === "compact") {
    return (
      <div className={`inline-flex items-center gap-3 select-none ${className}`}>
        <motion.svg
          viewBox="0 0 220 200"
          className="h-12 w-13 shrink-0"
          whileHover={{ scale: 1.05 }}
        >
          <defs>
            <linearGradient id="dspGreenCompact" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#65a30d" />
              <stop offset="55%" stopColor="#84cc16" />
              <stop offset="100%" stopColor="#a3e635" />
            </linearGradient>
            <linearGradient id="dspBlueCompact" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0b2d6b" />
            </linearGradient>
          </defs>

          <motion.path
            d="M 28 128 A 86 86 0 0 1 188 78 A 82 82 0 0 0 36 126 Z"
            fill="url(#dspGreenCompact)"
            animate={{ opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <path
            d="M 38 125 A 74 74 0 0 1 118 46 A 70 70 0 0 0 45 124 Z"
            fill="url(#dspBlueCompact)"
          />
          <path
            d="M 186 72 A 84 84 0 0 1 178 132 L 166 128 A 74 74 0 0 0 182 72 Z"
            fill="url(#dspBlueCompact)"
          />

          <g fill="#0b2d6b">
            <path d="M 88 39 C 88 28, 112 28, 114 39 L 128 43 C 129 45, 124 47, 114 45 L 88 43 Z" />
            <circle cx="100" cy="49" r="9.5" />
            <rect x="93" y="56" width="10" height="8" rx="3" />
            <path d="M 70 74 C 74 63, 108 62, 116 74 L 128 84 L 142 79 L 146 88 L 126 98 L 114 91 L 110 124 L 66 124 L 68 92 C 66 84, 67 78, 70 74 Z" />
            <path
              d="M 88 63 L 98 67 L 105 62"
              fill="none"
              stroke="#ffffff"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M 84 67 L 89 102 M 104 68 L 102 102"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path d="M 142 73 L 158 73 L 158 81 L 148 81 L 146 91 L 140 90 Z" />
            <path
              d="M 143 90 L 118 124"
              stroke="#0b2d6b"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </g>

          <motion.g
            fill="#0284c7"
            animate={{ opacity: [0.55, 1, 0.55], x: [0, 3, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <circle cx="166" cy="77" r="2.2" />
            <circle cx="175" cy="75" r="2.8" />
            <circle cx="185" cy="73" r="3.4" />
            <circle cx="172" cy="82" r="2" />
            <circle cx="182" cy="85" r="2.6" />
            <circle cx="192" cy="89" r="3.2" />
          </motion.g>

          <motion.path
            d="M 152 44 L 155 53 L 164 56 L 155 59 L 152 68 L 149 59 L 140 56 L 149 53 Z"
            fill="#0284c7"
            animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.7, 1, 0.7] }}
            style={{ transformOrigin: "152px 56px" }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M 164 98 L 166 105 L 173 107 L 166 109 L 164 116 L 162 109 L 155 107 L 162 105 Z"
            fill="#0284c7"
            animate={{ scale: [1.1, 0.85, 1.1], opacity: [1, 0.65, 1] }}
            style={{ transformOrigin: "164px 107px" }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />

          <path
            d="M 24 122 Q 110 138 196 122 L 190 156 Q 110 172 30 156 Z"
            fill="#0b2d6b"
          />
          <text
            x="110"
            y="150"
            textAnchor="middle"
            fill="#ffffff"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontWeight="800"
            fontStyle="italic"
            fontSize="33"
            letterSpacing="3"
          >
            DSP
          </text>
        </motion.svg>

        <div className="leading-tight">
          <span className="block text-sm font-extrabold tracking-tight text-[#0b2d6b] sm:text-base">
            Doorstep Sanitization Providers
          </span>
          <span className="mt-0.5 inline-block rounded-full bg-[#0b2d6b] px-2.5 py-0.5 text-[10px] font-semibold italic tracking-wide text-white">
            Clean Today. Healthy Tomorrow.
          </span>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`inline-flex flex-col items-center select-none ${className}`}
    >
      <svg
        viewBox="0 0 360 355"
        className="h-auto w-64 sm:w-72 drop-shadow-sm"
        role="img"
        aria-label="Doorstep Sanitization Providers (DSP) - Clean Today. Healthy Tomorrow."
      >
        <defs>
          <linearGradient id="dspGreenFull" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4d7c0f" />
            <stop offset="45%" stopColor="#84cc16" />
            <stop offset="100%" stopColor="#bef264" />
          </linearGradient>
          <linearGradient id="dspBlueFull" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#0b2d6b" />
          </linearGradient>
          <linearGradient id="dspNavyRibbon" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#123d8a" />
            <stop offset="100%" stopColor="#082254" />
          </linearGradient>
        </defs>

        <circle cx="180" cy="135" r="118" fill="#ffffff" />

        <motion.path
          d="M 56 178 A 128 128 0 0 1 298 106 A 122 122 0 0 0 68 175 Z"
          fill="url(#dspGreenFull)"
          animate={{ opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />

        <path
          d="M 70 174 A 110 110 0 0 1 190 58 A 104 104 0 0 0 80 172 Z"
          fill="url(#dspBlueFull)"
        />

        <path
          d="M 294 98 A 126 126 0 0 1 282 184 L 266 178 A 110 110 0 0 0 288 98 Z"
          fill="url(#dspBlueFull)"
        />

        <g fill="#0b2d6b">
          <path d="M 145 50 C 145 34, 180 34, 183 50 L 204 56 C 205 59, 198 62, 183 59 L 145 56 Z" />
          <circle cx="163" cy="65" r="14" />
          <path d="M 152 75 L 168 75 L 166 88 L 150 86 Z" />
          <path d="M 116 102 C 122 86, 174 84, 186 102 L 204 117 L 225 110 L 231 123 L 201 138 L 183 128 L 177 176 L 108 176 L 112 130 C 108 118, 111 109, 116 102 Z" />
          <rect x="103" y="136" width="18" height="28" rx="5" transform="rotate(-8 103 136)" />
          <path
            d="M 144 86 L 160 92 L 170 85"
            fill="none"
            stroke="#ffffff"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M 138 92 L 146 144 M 168 93 L 165 144"
            stroke="#ffffff"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path d="M 164 148 C 174 146, 184 150, 188 158 L 176 164 L 162 158 Z" />
          <path d="M 225 101 L 249 101 L 249 113 L 234 113 L 231 128 L 222 126 Z" />
          <path
            d="M 226 126 L 189 176"
            stroke="#0b2d6b"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </g>

        <motion.g
          fill="#0284c7"
          animate={{ opacity: [0.5, 1, 0.5], x: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="258" cy="106" r="2.8" />
          <circle cx="271" cy="103" r="3.6" />
          <circle cx="285" cy="100" r="4.5" />
          <circle cx="299" cy="97" r="3" />
          <circle cx="266" cy="113" r="2.6" />
          <circle cx="280" cy="117" r="3.5" />
          <circle cx="295" cy="122" r="4.4" />
          <circle cx="308" cy="126" r="2.8" />
          <circle cx="262" cy="120" r="2.2" />
          <circle cx="274" cy="129" r="3" />
          <circle cx="286" cy="138" r="3.8" />
        </motion.g>

        <motion.path
          d="M 240 56 L 245 70 L 259 75 L 245 80 L 240 94 L 235 80 L 221 75 L 235 70 Z"
          fill="#0284c7"
          animate={{ scale: [0.85, 1.18, 0.85], opacity: [0.7, 1, 0.7] }}
          style={{ transformOrigin: "240px 75px" }}
          transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M 258 138 L 261 148 L 271 151 L 261 154 L 258 164 L 255 154 L 245 151 L 255 148 Z"
          fill="#0284c7"
          animate={{ scale: [1.15, 0.85, 1.15], opacity: [1, 0.65, 1] }}
          style={{ transformOrigin: "258px 151px" }}
          transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
        />

        <path
          d="M 48 172 Q 180 196 312 172 L 303 224 Q 180 248 57 224 Z"
          fill="url(#dspNavyRibbon)"
        />
        <text
          x="180"
          y="215"
          textAnchor="middle"
          fill="#ffffff"
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontWeight="800"
          fontStyle="italic"
          fontSize="50"
          letterSpacing="5"
        >
          DSP
        </text>

        <text
          x="180"
          y="266"
          textAnchor="middle"
          fill="#0b2d6b"
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontWeight="800"
          fontSize="24"
          letterSpacing="-0.3"
        >
          Doorstep Sanitization
        </text>
        <text
          x="180"
          y="294"
          textAnchor="middle"
          fill="#0b2d6b"
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontWeight="800"
          fontSize="24"
          letterSpacing="-0.3"
        >
          Providers
        </text>

        <rect x="34" y="308" width="292" height="32" rx="16" fill="#0b2d6b" />
        <text
          x="180"
          y="329"
          textAnchor="middle"
          fill="#ffffff"
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontWeight="600"
          fontStyle="italic"
          fontSize="15.5"
          letterSpacing="0.3"
        >
          Clean Today. Healthy Tomorrow.
        </text>
      </svg>
    </motion.div>
  );
}
