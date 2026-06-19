"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"
import HexGrid from "./HexGrid"

const STUDY_AREAS = [
  "Sciences & Engineering",
  "Business & Management",
  "Health Sciences",
  "Law & Social Studies",
  "Arts & Humanities",
  "Computing & Technology",
]

const SUPPORT_TYPES = [
  "Dissertation Structure Review",
  "Research Methodology Coaching",
  "Academic Language Polish",
  "Citation & Reference Alignment",
  "Data Analysis Guidance",
]

const fadeUp = {
  hidden:  { y: 28, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Hero() {
  const [area, setArea]    = useState("")
  const [support, setSupport] = useState("")
  const [email, setEmail]  = useState("")
  const [name, setName]    = useState("")
  const [sent, setSent]    = useState(false)

  function handleHexSelect(subject: string) {
    // Map hex subjects to study area dropdown values
    const mapping: Record<string, string> = {
      Research:    "Sciences & Engineering",
      Finance:     "Business & Management",
      Law:         "Law & Social Studies",
      Nursing:     "Health Sciences",
      MBA:         "Business & Management",
      Engineering: "Sciences & Engineering",
      Thesis:      "Sciences & Engineering",
      Maths:       "Sciences & Engineering",
      Psychology:  "Law & Social Studies",
      Science:     "Sciences & Engineering",
      Economics:   "Business & Management",
      Computing:   "Computing & Technology",
    }
    setArea(mapping[subject] ?? "")
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !email || !area || !support) return
    // WhatsApp handoff (compliant: form → private channel)
    const msg = encodeURIComponent(
      `Hi TutorsHive! I'd like a consultation.\n\nName: ${name}\nArea: ${area}\nSupport needed: ${support}`
    )
    window.open(`https://wa.me/918219682177?text=${msg}`, "_blank")
    setSent(true)
  }

  return (
    <section className="relative overflow-hidden bg-arch-pattern" style={{ backgroundColor: "var(--color-navy-950)", minHeight: "100svh" }}>

      {/* Background gradient blobs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #16A34A 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #234073 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ── Left: copy + form ── */}
          <div className="flex flex-col">

            {/* Eyebrow tag */}
            <motion.div
              custom={0} variants={fadeUp} initial="hidden" animate="visible"
              className="inline-flex items-center gap-2 mb-6 self-start"
            >
              <span
                className="px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase"
                style={{
                  background: "rgba(22,163,74,0.12)",
                  color: "#4ADE80",
                  border: "1px solid rgba(22,163,74,0.25)",
                  fontFamily: "var(--font-body)",
                  letterSpacing: "0.12em",
                }}
              >
                Academic Consultation &amp; Editorial Support
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1} variants={fadeUp} initial="hidden" animate="visible"
              className="font-bold leading-[1.08] tracking-tight mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
                color: "#F8FAFC",
              }}
            >
              Academic guidance{" "}
              <span style={{ color: "#22C55E" }}>from specialists</span>{" "}
              who understand your journey.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="text-lg leading-relaxed mb-10 max-w-xl"
              style={{ fontFamily: "var(--font-body)", color: "#94A3B8" }}
            >
              Dissertation review, research methodology coaching, citation
              alignment, and academic language polish — from PhD-qualified
              consultants who know UK and Australian university standards.
            </motion.p>

            {/* Lead capture form */}
            <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible">
              {sent ? (
                <div
                  className="flex flex-col items-start gap-3 p-6 rounded-2xl"
                  style={{ background: "rgba(22,163,74,0.1)", border: "1px solid rgba(22,163,74,0.2)" }}
                >
                  <span className="text-green-400 font-semibold text-lg" style={{ fontFamily: "var(--font-display)" }}>
                    Opening WhatsApp…
                  </span>
                  <p className="text-slate-400 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                    A consultant will follow up within the hour. You can also reach us at{" "}
                    <a href="mailto:project@tutorshive.com" className="text-green-400 underline">
                      project@tutorshive.com
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="px-4 py-3 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-600"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        fontFamily: "var(--font-body)",
                      }}
                    />
                    <input
                      type="email"
                      placeholder="University email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="px-4 py-3 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-600"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        fontFamily: "var(--font-body)",
                      }}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <select
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      required
                      className="px-4 py-3 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-green-600"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        fontFamily: "var(--font-body)",
                        color: area ? "#F8FAFC" : "#64748B",
                      }}
                    >
                      <option value="" disabled style={{ background: "#0F2040" }}>Area of study</option>
                      {STUDY_AREAS.map((a) => (
                        <option key={a} value={a} style={{ background: "#0F2040" }}>{a}</option>
                      ))}
                    </select>
                    <select
                      value={support}
                      onChange={(e) => setSupport(e.target.value)}
                      required
                      className="px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        fontFamily: "var(--font-body)",
                        color: support ? "#F8FAFC" : "#64748B",
                      }}
                    >
                      <option value="" disabled style={{ background: "#0F2040" }}>Support needed</option>
                      {SUPPORT_TYPES.map((t) => (
                        <option key={t} value={t} style={{ background: "#0F2040" }}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 mt-1">
                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-100"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Connect with a Specialist
                      <ArrowRight size={16} />
                    </button>
                    <a
                      href="https://wa.me/918219682177"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-white/10"
                      style={{
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "#94A3B8",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      <MessageCircle size={15} />
                      WhatsApp us directly
                    </a>
                  </div>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "#475569", fontFamily: "var(--font-body)" }}
                  >
                    No payment required. We review your requirements first and provide a free consultation.
                  </p>
                </form>
              )}
            </motion.div>
          </div>

          {/* ── Right: Hex grid ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-center gap-5"
          >
            {/* Header label */}
            <div
              className="text-xs tracking-widest uppercase text-center"
              style={{ color: "#64748B", fontFamily: "var(--font-body)", letterSpacing: "0.15em" }}
            >
              Select your subject area
            </div>

            <HexGrid onSelect={handleHexSelect} />

            {/* Footer label */}
            <div
              className="flex items-center gap-2 text-xs"
              style={{ color: "#475569", fontFamily: "var(--font-body)" }}
            >
              <span
                className="inline-block w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#22C55E" }}
              />
              2,100+ specialists available now
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, var(--color-navy-900))" }}
      />
    </section>
  )
}
