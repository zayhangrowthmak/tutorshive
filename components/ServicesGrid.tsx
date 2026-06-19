"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  BookOpen, FlaskConical, Edit3, MessageSquare,
  BarChart2, Code2, FileText
} from "lucide-react"

const services = [
  {
    icon: BookOpen,
    title: "Dissertation & Thesis Review",
    desc: "Structural feedback on chapter organisation, argument coherence, and academic rigour. We work with your draft — not for you.",
  },
  {
    icon: FlaskConical,
    title: "Research Methodology Coaching",
    desc: "One-on-one consultation on research design, methodology justification, and SPSS/Stata interpretation guidance.",
  },
  {
    icon: Edit3,
    title: "Academic Language Polish",
    desc: "Editorial review of grammar, sentence structure, academic register, and clarity — tailored for non-native English speakers.",
  },
  {
    icon: MessageSquare,
    title: "Subject-Matter Tutoring",
    desc: "Nursing, Law, Finance, MBA, Engineering, Psychology — live sessions with PhD-qualified specialists in your field.",
  },
  {
    icon: BarChart2,
    title: "Citation & Reference Alignment",
    desc: "Review of existing references for compliance with APA, Harvard, Vancouver, or OSCOLA. Layout and format accuracy checks.",
  },
  {
    icon: Code2,
    title: "Programming Concept Coaching",
    desc: "Conceptual guidance on Python, MATLAB, C, and database projects. We help you understand — not just solve.",
  },
  {
    icon: FileText,
    title: "CV & Personal Statement Review",
    desc: "Professional editorial feedback on graduate CVs, personal statements, and scholarship applications.",
  },
]

export default function ServicesGrid() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="services"
      ref={ref}
      className="py-28"
      style={{ background: "var(--color-cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: "#16A34A", fontFamily: "var(--font-body)", letterSpacing: "0.14em" }}
          >
            What we offer
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
              color: "#0B1629",
              maxWidth: "32ch",
            }}
          >
            Every type of academic support, in one place.
          </motion.h2>
          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            href="#contact"
            className="shrink-0 text-sm font-medium underline underline-offset-4"
            style={{ color: "#16A34A", fontFamily: "var(--font-body)" }}
          >
            See all services →
          </motion.a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col p-7 rounded-2xl transition-all duration-300 cursor-pointer"
                style={{
                  background: "#fff",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(22,163,74,0.1)"
                  ;(e.currentTarget as HTMLDivElement).style.borderColor = "rgba(22,163,74,0.3)"
                  ;(e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)"
                  ;(e.currentTarget as HTMLDivElement).style.borderColor = "#E2E8F0"
                  ;(e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"
                }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(22,163,74,0.08)" }}
                >
                  <Icon size={20} color="#16A34A" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3
                  className="font-semibold mb-3 leading-snug"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.05rem",
                    color: "#0B1629",
                  }}
                >
                  {s.title}
                </h3>

                {/* Desc */}
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "#64748B", fontFamily: "var(--font-body)" }}
                >
                  {s.desc}
                </p>

                {/* Arrow */}
                <div
                  className="mt-5 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: "#16A34A", fontFamily: "var(--font-body)" }}
                >
                  Learn more →
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
