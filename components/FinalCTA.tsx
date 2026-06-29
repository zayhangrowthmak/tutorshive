"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, MessageCircle, Mail, Phone } from "lucide-react"

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
  "Subject-Matter Tutoring",
  "CV & Personal Statement Review",
]

export default function FinalCTA() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  const [name, setName]       = useState("")
  const [email, setEmail]     = useState("")
  const [area, setArea]       = useState("")
  const [support, setSupport] = useState("")
  const [sent, setSent]       = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !email || !area || !support) return
    const msg = encodeURIComponent(
      `Hi TutorsHive! I'd like a consultation.\n\nName: ${name}\nArea: ${area}\nSupport needed: ${support}\nEmail: ${email}`
    )
    window.open(`https://wa.me/918219682177?text=${msg}`, "_blank")
    setSent(true)
  }

  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    padding: "12px 16px",
    color: "#F8FAFC",
    fontSize: "0.875rem",
    fontFamily: "var(--font-body)",
    width: "100%",
    outline: "none",
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 relative overflow-hidden bg-arch-pattern"
      style={{ background: "var(--color-navy-950)" }}
    >
      {/* Green radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(22,163,74,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: "#22C55E", fontFamily: "var(--font-body)", letterSpacing: "0.14em" }}
          >
            Get started
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold leading-tight mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            color: "#F8FAFC",
          }}
        >
          Your consultation is one form away.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-base mb-12"
          style={{ color: "#64748B", fontFamily: "var(--font-body)" }}
        >
          No payment required. We review your requirements and connect you with a specialist — free.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-left p-8 rounded-3xl"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(12px)",
          }}
        >
          {sent ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: "rgba(22,163,74,0.15)" }}
              >
                <MessageCircle size={24} color="#22C55E" />
              </div>
              <h3
                className="font-bold text-xl text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Connecting you with a specialist…
              </h3>
              <p
                className="text-sm max-w-sm"
                style={{ color: "#64748B", fontFamily: "var(--font-body)" }}
              >
                WhatsApp should have opened. If not,{" "}
                <a href="mailto:project@tutorshive.com" className="text-green-400 underline">
                  email us directly
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs font-medium"
                    style={{ color: "#64748B", fontFamily: "var(--font-body)" }}
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={inputStyle}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs font-medium"
                    style={{ color: "#64748B", fontFamily: "var(--font-body)" }}
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="your@university.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={inputStyle}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-medium"
                  style={{ color: "#64748B", fontFamily: "var(--font-body)" }}
                >
                  Area of study
                </label>
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  required
                  style={{ ...inputStyle, color: area ? "#F8FAFC" : "#64748B" }}
                >
                  <option value="" disabled style={{ background: "#0F2040" }}>Select your area</option>
                  {STUDY_AREAS.map((a) => (
                    <option key={a} value={a} style={{ background: "#0F2040" }}>{a}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-medium"
                  style={{ color: "#64748B", fontFamily: "var(--font-body)" }}
                >
                  How can we help?
                </label>
                <select
                  value={support}
                  onChange={(e) => setSupport(e.target.value)}
                  required
                  style={{ ...inputStyle, color: support ? "#F8FAFC" : "#64748B" }}
                >
                  <option value="" disabled style={{ background: "#0F2040" }}>Type of support needed</option>
                  {SUPPORT_TYPES.map((t) => (
                    <option key={t} value={t} style={{ background: "#0F2040" }}>{t}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.01] active:scale-100 mt-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Connect with a Specialist
                <ArrowRight size={16} />
              </button>

              <p
                className="text-xs text-center"
                style={{ color: "#334155", fontFamily: "var(--font-body)" }}
              >
                By submitting, you agree to our{" "}
                <a href="/privacy-policy" className="underline hover:text-slate-400">Privacy Policy</a>.
                Your details are never shared.
              </p>
            </form>
          )}
        </motion.div>

        {/* Alternative contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-8"
        >
          {[
            { icon: MessageCircle, label: "WhatsApp",  value: "Chat with us",              href: "https://wa.me/918219682177" },
            { icon: Mail,          label: "Email",     value: "project@tutorshive.com",    href: "mailto:project@tutorshive.com" },
            { icon: Phone,         label: "🇬🇧 UK",    value: "+44 20 XXXX XXXX",          href: "tel:+4420XXXXXXXX" },    // TODO: replace with real UK number
            { icon: Phone,         label: "🇦🇺 AU",    value: "+61 2 XXXX XXXX",           href: "tel:+612XXXXXXXX" },     // TODO: replace with real AU number
          ].map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 text-sm transition-colors hover:text-white"
              style={{ color: "#475569", fontFamily: "var(--font-body)" }}
            >
              <Icon size={14} color="#22C55E" />
              <span>{label}: <span className="text-slate-400">{value}</span></span>
            </a>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
