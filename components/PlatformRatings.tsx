"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star } from "lucide-react"

const platforms = [
  {
    name: "Google Reviews",
    rating: "4.9",
    count: "680+ reviews",
    color: "#1A3055",
    border: "rgba(66,133,244,0.25)",
    iconColor: "#4285F4",
    logo: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
  },
  {
    name: "Facebook Reviews",
    rating: "4.9",
    count: "420+ reviews",
    color: "#0B1629",
    border: "rgba(24,119,242,0.25)",
    iconColor: "#1877F2",
    logo: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="#1877F2" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: "Student Reviews",
    rating: "4.9",
    count: "1,200+ students",
    color: "#0F2040",
    border: "rgba(34,197,94,0.25)",
    iconColor: "#22C55E",
    logo: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
        <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" fill="none" stroke="#22C55E" strokeWidth="1.5" strokeLinejoin="round"/>
        <polygon points="12,5 14,10 19,10 15,13 17,18 12,15 7,18 9,13 5,10 10,10" fill="rgba(34,197,94,0.2)"/>
      </svg>
    ),
  },
]

export default function PlatformRatings() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--color-navy-900)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#22C55E", fontFamily: "var(--font-body)", letterSpacing: "0.14em" }}
          >
            Trusted Globally
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.7rem, 3vw, 2.6rem)",
              color: "#F8FAFC",
            }}
          >
            Rated highly on every platform.
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center p-8 rounded-3xl"
              style={{
                background: p.color,
                border: `1px solid ${p.border}`,
                boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              }}
            >
              {/* Platform logo */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: `1px solid ${p.border}`,
                }}
              >
                {p.logo}
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }, (_, j) => (
                  <Star key={j} size={14} fill={p.iconColor} color={p.iconColor} />
                ))}
              </div>

              {/* Rating */}
              <p
                className="text-4xl font-bold mb-1 leading-none"
                style={{ color: "#F8FAFC", fontFamily: "var(--font-display)" }}
              >
                {p.rating}
                <span className="text-lg font-normal" style={{ color: "#64748B" }}>/5</span>
              </p>

              {/* Platform name */}
              <p
                className="text-xs font-semibold uppercase tracking-widest mt-2 mb-1"
                style={{ color: "#94A3B8", fontFamily: "var(--font-body)", letterSpacing: "0.1em" }}
              >
                {p.name}
              </p>

              <p
                className="text-xs"
                style={{ color: "#475569", fontFamily: "var(--font-body)" }}
              >
                {p.count}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
