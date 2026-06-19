"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const painPoints = [
  {
    quote: "I have three submissions this week and a part-time job. I cannot do this alone.",
    who: "Masters student, University of Manchester",
  },
  {
    quote: "My first language is not English. My ideas are strong but my writing holds me back.",
    who: "International student, University of Melbourne",
  },
  {
    quote: "I have worked so hard to get here. Failing now is not an option -- my family sacrificed too much.",
    who: "Postgraduate student, University of Toronto",
  },
]

export default function EmpathySection() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="about"
      ref={ref}
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--color-navy-950)" }}
    >
      <div
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{ background: "linear-gradient(to bottom, transparent, #22C55E, transparent)" }}
      />

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
            We understand
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold leading-tight mb-6 max-w-3xl"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            color: "#F8FAFC",
          }}
        >
          You did not come this far to let a deadline or a language barrier stop you.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg max-w-2xl mb-20"
          style={{ color: "#94A3B8", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
        >
          Most of our students are international, working part-time, and carrying the weight of
          their family's expectations alongside their degree. We built TutorsHive specifically for you.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 + i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between p-7 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="text-5xl leading-none mb-4"
                style={{
                  color: "rgba(34,197,94,0.25)",
                  fontFamily: "var(--font-serif)",
                  fontStyle: "normal",
                }}
              >
                &ldquo;
              </div>
              <p
                className="text-base leading-relaxed flex-1 mb-6"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  color: "#CBD5E1",
                  fontSize: "1.05rem",
                }}
              >
                {p.quote}
              </p>
              <div
                className="text-xs"
                style={{ color: "#475569", fontFamily: "var(--font-body)" }}
              >
                &mdash; {p.who}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
