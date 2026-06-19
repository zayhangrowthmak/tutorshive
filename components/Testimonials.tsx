"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const reviews = [
  {
    name: "Moukik S.",
    location: "London, UK",
    rating: 5,
    service: "Dissertation Review",
    text: "When it comes to dissertation support, I always come back to TutorsHive. The structural feedback they gave on my methodology chapter was genuinely transformative — my supervisor noticed the improvement immediately.",
  },
  {
    name: "Nabeel A.",
    location: "Melbourne, Australia",
    rating: 5,
    service: "Academic Language Polish",
    text: "The editorial review was exceptional. English is my second language and I struggled to communicate my ideas clearly. After TutorsHive worked through my draft, it finally sounded like the research I knew I'd done.",
  },
  {
    name: "Komal P.",
    location: "Toronto, Canada",
    rating: 5,
    service: "Research Methodology Coaching",
    text: "Extremely reliable and deeply knowledgeable. I've been using TutorsHive for three years across my Masters and PhD work. Every time, they surprise me with the quality of the consultation.",
  },
  {
    name: "Srikar R.",
    location: "Birmingham, UK",
    rating: 5,
    service: "Subject-Matter Tutoring",
    text: "The consultant was available whenever I needed guidance. I had a complex engineering coursework and they walked me through the conceptual gaps rather than just giving me answers. That's the difference.",
  },
]

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={13} fill="#22C55E" stroke="none" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a - 1 + reviews.length) % reviews.length)
  const next = () => setActive((a) => (a + 1) % reviews.length)

  return (
    <section
      id="reviews"
      ref={ref}
      className="py-28 overflow-hidden"
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
            Student reviews
          </span>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
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
            Students like you — already succeeding.
          </motion.h2>

          {/* Nav controls */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 shrink-0"
          >
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ border: "1px solid #CBD5E1", background: "#fff" }}
              aria-label="Previous review"
            >
              <ChevronLeft size={16} color="#475569" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ border: "1px solid #CBD5E1", background: "#fff" }}
              aria-label="Next review"
            >
              <ChevronRight size={16} color="#475569" />
            </button>
          </motion.div>
        </div>

        {/* Review cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, i) => {
            const isActive = i === active
            return (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActive(i)}
                className="flex flex-col p-6 rounded-2xl cursor-pointer transition-all duration-300"
                style={{
                  background: isActive ? "#0B1629" : "#fff",
                  border: isActive ? "1px solid rgba(34,197,94,0.3)" : "1px solid #E2E8F0",
                  transform: isActive ? "translateY(-4px)" : "none",
                  boxShadow: isActive ? "0 12px 40px rgba(11,22,41,0.15)" : "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                <Stars n={r.rating} />

                <p
                  className="mt-4 mb-6 text-sm leading-relaxed flex-1"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: "0.95rem",
                    color: isActive ? "#CBD5E1" : "#475569",
                  }}
                >
                  "{r.text}"
                </p>

                <div>
                  <div
                    className="font-semibold text-sm"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: isActive ? "#F8FAFC" : "#0B1629",
                    }}
                  >
                    {r.name}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ color: isActive ? "#64748B" : "#94A3B8", fontFamily: "var(--font-body)" }}
                  >
                    {r.location} · {r.service}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Platform ratings */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center gap-8"
        >
          {["Google Reviews", "Facebook", "Student Reviews"].map((platform) => (
            <div key={platform} className="flex items-center gap-2">
              <Stars n={5} />
              <span
                className="text-sm font-medium"
                style={{ color: "#475569", fontFamily: "var(--font-body)" }}
              >
                4.9/5 on {platform}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
