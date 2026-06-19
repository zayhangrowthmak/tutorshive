"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ClipboardList, MessageSquare, CheckCircle2 } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    title: "Share Your Academic Requirements",
    desc: "Fill out our brief form with your study area, support type, and what you are trying to achieve.",
  },
  {
    icon: MessageSquare,
    title: "Get Matched with a Specialist",
    desc: "We review your brief and connect you with a PhD-qualified consultant suited to your subject and level.",
  },
  {
    icon: CheckCircle2,
    title: "Receive Expert Guidance & Feedback",
    desc: "Your specialist delivers professional feedback, subject-specific insights, and editorial support.",
  },
]

const stats = [
  { value: "4.9/5",  label: "Quality Score",        desc: "Rated by students across UK, AU & CA" },
  { value: "100%",   label: "Satisfaction Promise",  desc: "Revision support until you are fully satisfied" },
  { value: "24/7",   label: "Instant Support",       desc: "Our team is available around the clock" },
]

export default function PhDSection() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--color-navy-900)" }}
    >
      {/* Subtle bg glow */}
      <div
        aria-hidden
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #16A34A 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ── Left: copy + steps ── */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#22C55E", fontFamily: "var(--font-body)", letterSpacing: "0.14em" }}
            >
              100% Student-Focused Support
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-bold leading-tight mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
                color: "#F8FAFC",
              }}
            >
              Guidance From Experienced<br />
              <span style={{ color: "#22C55E" }}>PhD Specialists</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-base leading-relaxed mb-10 max-w-lg"
              style={{ color: "#94A3B8", fontFamily: "var(--font-body)" }}
            >
              Our academic guidance services give students access to experienced PhD and
              subject-matter specialists who understand university assessment standards and
              marking criteria — from dissertation consultation and research methodology to
              editing, data analysis, and academic quality review.
            </motion.p>

            <div className="flex flex-col gap-7">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-4"
                >
                  <div
                    className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(22,163,74,0.1)",
                      border: "1px solid rgba(22,163,74,0.2)",
                    }}
                  >
                    <step.icon size={18} color="#22C55E" />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm mb-1"
                      style={{ color: "#F8FAFC", fontFamily: "var(--font-body)" }}
                    >
                      {step.title}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#64748B", fontFamily: "var(--font-body)" }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right: visual + stats ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-8"
          >
            {/* Central illustration */}
            <div className="relative w-72 h-72 flex items-center justify-center">
              {/* Outer ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{ border: "1px solid rgba(34,197,94,0.12)" }}
              />
              {/* Mid ring */}
              <div
                className="absolute inset-6 rounded-full"
                style={{ border: "1px dashed rgba(34,197,94,0.08)" }}
              />
              {/* Glow */}
              <div
                className="absolute inset-8 rounded-full blur-2xl opacity-20"
                style={{ background: "radial-gradient(circle, #16A34A, transparent)" }}
              />

              {/* Central hex card */}
              <div
                className="relative z-10 w-44 h-44 rounded-3xl flex flex-col items-center justify-center gap-2 shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #132647 0%, #0F2040 100%)",
                  border: "1px solid rgba(34,197,94,0.2)",
                  boxShadow: "0 0 60px rgba(34,197,94,0.08), 0 24px 48px rgba(0,0,0,0.4)",
                }}
              >
                {/* Cap SVG */}
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden>
                  {/* Board base */}
                  <polygon points="32,10 58,24 32,38 6,24" fill="rgba(34,197,94,0.15)" stroke="#22C55E" strokeWidth="1.5" strokeLinejoin="round" />
                  {/* Top shine */}
                  <polygon points="32,10 58,24 32,24" fill="rgba(34,197,94,0.08)" />
                  {/* Vertical stem */}
                  <line x1="58" y1="24" x2="58" y2="42" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Tassel ball */}
                  <circle cx="58" cy="44" r="3" fill="#22C55E" />
                  {/* Left gown curve */}
                  <path d="M16 32 Q12 44 20 52 Q32 58 44 52 Q52 44 48 32" stroke="#22C55E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  {/* Stars */}
                  <circle cx="32" cy="24" r="3" fill="#22C55E" opacity="0.9" />
                </svg>

                <p
                  className="text-xs font-semibold tracking-widest text-center uppercase"
                  style={{ color: "#4ADE80", fontFamily: "var(--font-body)", letterSpacing: "0.1em" }}
                >
                  PhD<br />Specialist
                </p>
              </div>

              {/* Orbiting badges */}
              {[
                { label: "Research", angle: -60 },
                { label: "Editing",  angle:  60 },
                { label: "Data",     angle: 180 },
              ].map(({ label, angle }) => {
                const r = 120
                const rad = (angle * Math.PI) / 180
                const x = 50 + (r / 2.88) * Math.cos(rad)
                const y = 50 + (r / 2.88) * Math.sin(rad)
                return (
                  <div
                    key={label}
                    className="absolute px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                      background: "rgba(19,38,71,0.9)",
                      border: "1px solid rgba(34,197,94,0.2)",
                      color: "#94A3B8",
                      fontFamily: "var(--font-body)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {label}
                  </div>
                )
              })}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 w-full">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center text-center p-4 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <span
                    className="text-xl font-bold mb-1"
                    style={{ color: "#22C55E", fontFamily: "var(--font-display)" }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="text-xs font-semibold mb-1"
                    style={{ color: "#F8FAFC", fontFamily: "var(--font-body)" }}
                  >
                    {s.label}
                  </span>
                  <span
                    className="text-xs leading-snug"
                    style={{ color: "#475569", fontFamily: "var(--font-body)" }}
                  >
                    {s.desc}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
