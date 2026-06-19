"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ClipboardList, UserCheck, Sparkles } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Share your requirements",
    desc: "Fill out a short form with your name, email, area of study, and the type of support you need. No file uploads, no payment required at this stage.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Get matched with a specialist",
    desc: "We review your needs and connect you directly with a PhD-qualified consultant in your field. You'll hear back within the hour.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Receive expert guidance",
    desc: "Your specialist provides structured feedback, coaching, or editorial review — strengthening your own work and building your confidence for future submissions.",
  },
]

export default function HowItWorks() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="process"
      ref={ref}
      className="py-28"
      style={{ background: "var(--color-navy-900)" }}
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
            style={{ color: "#22C55E", fontFamily: "var(--font-body)", letterSpacing: "0.14em" }}
          >
            How it works
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
              color: "#F8FAFC",
              maxWidth: "28ch",
            }}
          >
            Three steps. Sixty seconds to start.
          </motion.h2>
          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.35 }}
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-200"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Get started now
          </motion.a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">

          {/*
            Two separate connector lines — one per gap — so neither overlaps an icon box.
            Icons sit at the LEFT of each column track (not the column centre).
            Column tracks are equal thirds. Icon width = 3.5rem (56 px).

            Line 1: icon-1 right edge → icon-2 left edge
              left  = 3.5rem               (right edge of icon 1)
              right = calc(66.67% - 1rem)  (left edge of col-2 track across breakpoints)

            Line 2: icon-2 right edge → icon-3 left edge
              left  = calc(33.33% + 3.5rem) (right edge of icon 2)
              right = calc(33.33% - 2rem)   (left edge of col-3 track across breakpoints)

            top = 1.75rem = vertical centre of the 3.5rem-tall icon boxes.
          */}
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.55, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute hidden md:block h-px"
            style={{
              top: "3.5rem",
              left: "3.5rem",
              right: "calc(66.67% - 1rem)",
              background: "linear-gradient(to right, transparent, rgba(34,197,94,0.32) 12%, rgba(34,197,94,0.32) 88%, transparent)",
              transformOrigin: "left",
            }}
          />
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.75, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute hidden md:block h-px"
            style={{
              top: "3.5rem",
              left: "calc(33.33% + 3.5rem)",
              right: "calc(33.33% - 2rem)",
              background: "linear-gradient(to right, transparent, rgba(34,197,94,0.32) 12%, rgba(34,197,94,0.32) 88%, transparent)",
              transformOrigin: "left",
            }}
          />

          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.14, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col"
              >
                {/* Step number + icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(22,163,74,0.12)", border: "1px solid rgba(34,197,94,0.2)" }}
                  >
                    <Icon size={22} color="#22C55E" strokeWidth={1.5} />
                  </div>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "rgba(34,197,94,0.5)", fontFamily: "var(--font-body)" }}
                  >
                    Step {s.number}
                  </span>
                </div>

                <h3
                  className="font-bold mb-3 leading-snug"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    color: "#F8FAFC",
                  }}
                >
                  {s.title}
                </h3>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#64748B", fontFamily: "var(--font-body)" }}
                >
                  {s.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
