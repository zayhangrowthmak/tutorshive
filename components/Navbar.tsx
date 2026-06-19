"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

const services = [
  { label: "Dissertation & Thesis Review",     desc: "Structure, argument & academic rigour feedback" },
  { label: "Research Methodology Coaching",    desc: "Research design & SPSS/Stata guidance" },
  { label: "Academic Language Polish",         desc: "Grammar, register & clarity for non-native speakers" },
  { label: "Subject-Matter Tutoring",          desc: "Live sessions with PhD-qualified specialists" },
  { label: "Citation & Reference Alignment",   desc: "APA, Harvard, Vancouver & OSCOLA checks" },
  { label: "Programming Concept Coaching",     desc: "Concept walkthroughs for CS & data modules" },
  { label: "CV & Personal Statement Review",   desc: "Postgraduate & scholarship application support" },
]

const navLinks = [
  { label: "How It Works", href: "#process" },
  { label: "Reviews",      href: "#reviews" },
  { label: "About",        href: "#about" },
]

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false)
  const [open, setOpen]               = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-900/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3 shrink-0">
            <Image src="/logo.png" alt="TutorsHive" width={38} height={38} className="w-9 h-9 object-contain" priority />
            <span className="font-bold text-[1.15rem] text-white tracking-tight leading-none" style={{ fontFamily: "var(--font-display)" }}>
              TutorsHive
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">

            {/* Services dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors duration-200 tracking-wide"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Services
                <motion.span animate={{ rotate: servicesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={14} />
                </motion.span>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 rounded-2xl overflow-hidden shadow-2xl shadow-black/40"
                    style={{
                      background: "rgba(11,22,41,0.97)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      backdropFilter: "blur(20px)",
                    }}
                  >
                    {/* Arrow */}
                    <div
                      className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45"
                      style={{ background: "rgba(11,22,41,0.97)", border: "1px solid rgba(255,255,255,0.08)", borderRight: "none", borderBottom: "none" }}
                    />

                    <div className="p-2">
                      {services.map((s, i) => (
                        <motion.a
                          key={s.label}
                          href="#services"
                          onClick={() => setServicesOpen(false)}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.04, duration: 0.2 }}
                          className="flex flex-col px-4 py-3 rounded-xl transition-all duration-150 group"
                          style={{ fontFamily: "var(--font-body)" }}
                          onMouseEnter={e => (e.currentTarget.style.background = "rgba(34,197,94,0.07)")}
                          onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                        >
                          <span className="text-sm font-medium text-white group-hover:text-green-400 transition-colors duration-150 leading-snug">
                            {s.label}
                          </span>
                          <span className="text-xs mt-0.5" style={{ color: "#475569" }}>
                            {s.desc}
                          </span>
                        </motion.a>
                      ))}

                      <div className="mt-1 mx-2 mb-2 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                        <a
                          href="#contact"
                          onClick={() => setServicesOpen(false)}
                          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-150"
                          style={{
                            background: "rgba(22,163,74,0.15)",
                            border: "1px solid rgba(22,163,74,0.25)",
                            fontFamily: "var(--font-body)",
                            color: "#4ADE80",
                          }}
                        >
                          Book a free consultation →
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other links */}
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 tracking-wide"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-500 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-100"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Book a Consultation
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white p-1.5 rounded-md hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-white/5"
            style={{ background: "var(--color-navy-800)" }}
          >
            <div className="px-6 py-6 flex flex-col gap-1">

              {/* Services accordion */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between text-white py-3 text-base border-b border-white/5"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Services
                <motion.span animate={{ rotate: mobileServicesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={16} />
                </motion.span>
              </button>

              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    {services.map((s) => (
                      <a
                        key={s.label}
                        href="#services"
                        onClick={() => { setOpen(false); setMobileServicesOpen(false) }}
                        className="flex flex-col px-3 py-2.5 border-b border-white/5 last:border-0"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <span className="text-sm text-slate-300">{s.label}</span>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-white py-3 text-base border-b border-white/5 last:border-0"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {l.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 bg-green-600 text-white text-center py-3 rounded-full font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Book a Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
