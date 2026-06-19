"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const doList = [
  "Provide structural feedback on your own drafted work",
  "Review and improve academic language, tone, and clarity",
  "Advise on research methodology and design",
  "Check citation formats for APA, Harvard, Vancouver, OSCOLA",
  "Explain subject concepts and guide your own analysis",
  "Proofread grammar, punctuation, and sentence structure",
]

const dontList = [
  "Write, generate, or author any portion of your assessment",
  "Submit work on your behalf or impersonate you academically",
  "Produce custom essays, theses, or assignments for submission",
  "Advise students to conceal our involvement from their institution",
]

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden className="shrink-0 mt-0.5">
      <circle cx="10" cy="10" r="9.5" fill="rgba(34,197,94,0.15)" stroke="#22C55E" strokeWidth="1.2"/>
      <path d="M6 10 L9 13 L14 7" stroke="#22C55E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function CrossIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden className="shrink-0 mt-0.5">
      <circle cx="10" cy="10" r="9.5" fill="rgba(239,68,68,0.07)" stroke="rgba(239,68,68,0.3)" strokeWidth="1.2"/>
      <path d="M7 7 L13 13 M13 7 L7 13" stroke="rgba(239,68,68,0.6)" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}

function ShieldSVG() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
      <path d="M20 4 L36 10 L36 22 Q36 32 20 38 Q4 32 4 22 L4 10 Z"
        fill="rgba(34,197,94,0.1)" stroke="#22C55E" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M14 20 L18 24 L27 15" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function IntegritySection() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--color-navy-800)" }}
    >
      {/* Subtle bg accent */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(34,197,94,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* ── Centered heading ── */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{
              background: "rgba(34,197,94,0.08)",
              border: "1px solid rgba(34,197,94,0.2)",
            }}
          >
            <ShieldSVG />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#22C55E", fontFamily: "var(--font-body)", letterSpacing: "0.13em" }}
            >
              Academic Integrity Policy
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold leading-tight mb-5"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              color: "#F8FAFC",
            }}
          >
            We operate within your institution's academic guidelines{" "}
            <span style={{ color: "#22C55E" }}>— always.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.6 }}
            className="text-base leading-relaxed"
            style={{ color: "#94A3B8", fontFamily: "var(--font-body)" }}
          >
            TutorsHive operates as a professional academic editing and consultation service.
            We do not engage in contract cheating, custom writing, or any form of academic
            fraud. Our services complement and strengthen your own work — never replace it.
          </motion.p>
        </div>

        {/* ── Two cards ── */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">

          {/* WHAT WE DO */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.22, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl p-8"
            style={{
              background: "linear-gradient(145deg, rgba(22,163,74,0.09) 0%, rgba(11,22,41,0.6) 100%)",
              border: "1px solid rgba(34,197,94,0.2)",
            }}
          >
            {/* Card header */}
            <div className="flex items-center gap-3 mb-7 pb-5" style={{ borderBottom: "1px solid rgba(34,197,94,0.12)" }}>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)" }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                  <path d="M4 9 L7.5 12.5 L14 5.5" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#22C55E", letterSpacing: "0.12em", fontFamily: "var(--font-body)" }}>
                  What We Do
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#475569", fontFamily: "var(--font-body)" }}>
                  Compliant academic support services
                </p>
              </div>
            </div>

            <ul className="flex flex-col gap-4">
              {doList.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <CheckIcon />
                  <span
                    className="text-sm leading-snug"
                    style={{ color: "#CBD5E1", fontFamily: "var(--font-body)" }}
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* WE NEVER */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl p-8 flex flex-col"
            style={{
              background: "rgba(11,22,41,0.5)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Card header */}
            <div className="flex items-center gap-3 mb-7 pb-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(239,68,68,0.07)", border: "1px solid rgba(239,68,68,0.2)" }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                  <path d="M5 5 L13 13 M13 5 L5 13" stroke="rgba(239,68,68,0.7)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#64748B", letterSpacing: "0.12em", fontFamily: "var(--font-body)" }}>
                  We Never
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#334155", fontFamily: "var(--font-body)" }}>
                  Strict boundaries we will not cross
                </p>
              </div>
            </div>

            <ul className="flex flex-col gap-5">
              {dontList.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.38 + i * 0.08, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <CrossIcon />
                  <span
                    className="text-sm leading-snug"
                    style={{ color: "#475569", fontFamily: "var(--font-body)" }}
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Spacer + note */}
            <div
              className="mt-auto pt-7"
              style={{ borderTop: "1px solid rgba(255,255,255,0.04)", marginTop: "2rem" }}
            >
              <p
                className="text-xs leading-relaxed"
                style={{
                  color: "#334155",
                  fontFamily: "var(--font-body)",
                  fontStyle: "italic",
                }}
              >
                Producing any of the above would constitute academic fraud under most university codes of conduct.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Compliance banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 px-8 py-6 rounded-2xl text-center sm:text-left"
          style={{
            background: "rgba(34,197,94,0.04)",
            border: "1px solid rgba(34,197,94,0.1)",
          }}
        >
          <div className="shrink-0">
            <ShieldSVG />
          </div>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "#64748B", fontFamily: "var(--font-body)" }}
          >
            <span style={{ color: "#94A3B8", fontWeight: 600 }}>Our commitment to you: </span>
            We encourage all students to review their institution's academic integrity policy
            and to use our consultation services in full compliance with their university's guidelines.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
