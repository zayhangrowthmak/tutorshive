"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

/* ── Icons — 36 × 36 viewBox, clean stroke-based paths ─────── */

function IconRevision() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      <rect x="2" y="2" width="22" height="30" rx="2.5"
        fill="rgba(34,197,94,0.08)" stroke="#22C55E" strokeWidth="1.4"/>
      <line x1="6" y1="11" x2="20" y2="11" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" opacity=".6"/>
      <line x1="6" y1="17" x2="20" y2="17" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" opacity=".55"/>
      <line x1="6" y1="23" x2="20" y2="23" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" opacity=".5"/>
      <line x1="6" y1="28" x2="13" y2="28" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" opacity=".4"/>
      {/* Circular refresh arrow */}
      <path d="M27 9 A6 6 0 1 1 33 16" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <polyline points="31,14 34,17 31,20" stroke="#22C55E" strokeWidth="1.6"
        fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function IconClipboard() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      <rect x="4" y="9" width="22" height="25" rx="2.5"
        fill="rgba(34,197,94,0.07)" stroke="#22C55E" strokeWidth="1.4"/>
      <rect x="10" y="5" width="10" height="8" rx="4"
        fill="rgba(34,197,94,0.1)" stroke="#22C55E" strokeWidth="1.3"/>
      <circle cx="15" cy="9" r="2" fill="rgba(11,22,41,0.8)" stroke="#22C55E" strokeWidth="1"/>
      <line x1="8" y1="18" x2="22" y2="18" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" opacity=".5"/>
      <line x1="8" y1="23" x2="22" y2="23" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" opacity=".45"/>
      <line x1="8" y1="28" x2="16" y2="28" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" opacity=".4"/>
      {/* Pencil */}
      <line x1="27" y1="17" x2="35" y2="9" stroke="#22C55E" strokeWidth="1.6" strokeLinecap="round"/>
      <polygon points="27,17 26,22 31,18" fill="#22C55E" opacity=".85"/>
    </svg>
  )
}

function IconProofread() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      {/* Page */}
      <rect x="2" y="2" width="18" height="28" rx="2.5"
        fill="rgba(34,197,94,0.07)" stroke="#22C55E" strokeWidth="1.4"/>
      <line x1="5" y1="9" x2="17" y2="9" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" opacity=".55"/>
      <line x1="5" y1="14" x2="17" y2="14" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" opacity=".5"/>
      {/* Red correction line */}
      <line x1="5" y1="19" x2="17" y2="19" stroke="rgba(239,68,68,0.9)" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="5" y1="24" x2="17" y2="24" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" opacity=".45"/>
      {/* Magnifying glass */}
      <circle cx="27" cy="27" r="8" fill="rgba(34,197,94,0.1)" stroke="#22C55E" strokeWidth="1.6"/>
      <line x1="33" y1="33" x2="36" y2="36" stroke="#22C55E" strokeWidth="2.2" strokeLinecap="round"/>
      {/* Check inside glass */}
      <path d="M22 27 L26 31 L33 23" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function IconOriginality() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      {/* Document */}
      <rect x="2" y="2" width="18" height="26" rx="2.5"
        fill="rgba(34,197,94,0.07)" stroke="#22C55E" strokeWidth="1.4"/>
      <line x1="5" y1="9" x2="17" y2="9" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" opacity=".5"/>
      <line x1="5" y1="14" x2="17" y2="14" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" opacity=".5"/>
      <line x1="5" y1="19" x2="17" y2="19" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" opacity=".45"/>
      <line x1="5" y1="24" x2="11" y2="24" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" opacity=".4"/>
      {/* Wax seal */}
      <circle cx="25" cy="25" r="10" fill="rgba(34,197,94,0.1)" stroke="#22C55E" strokeWidth="1.6"/>
      {/* Starburst rays */}
      <line x1="25" y1="13" x2="25" y2="10" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" opacity=".45"/>
      <line x1="25" y1="37" x2="25" y2="34" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" opacity=".45"/>
      <line x1="13" y1="25" x2="10" y2="25" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" opacity=".45"/>
      <line x1="37" y1="25" x2="34" y2="25" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" opacity=".45"/>
      <line x1="17" y1="17" x2="15" y2="15" stroke="#22C55E" strokeWidth="1" strokeLinecap="round" opacity=".35"/>
      <line x1="33" y1="17" x2="35" y2="15" stroke="#22C55E" strokeWidth="1" strokeLinecap="round" opacity=".35"/>
      {/* Check */}
      <path d="M20 25 L24 29 L31 21" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function IconPricing() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      {/* Receipt body */}
      <rect x="6" y="2" width="24" height="32" rx="2"
        fill="rgba(34,197,94,0.07)" stroke="#22C55E" strokeWidth="1.4"/>
      {/* Wavy tear line */}
      <path d="M6 27 Q9 29 12 27 Q15 25 18 27 Q21 29 24 27 Q27 25 30 27"
        stroke="#22C55E" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      {/* Header band */}
      <rect x="10" y="7" width="16" height="6" rx="1.5"
        fill="rgba(34,197,94,0.1)" stroke="#22C55E" strokeWidth="1" opacity=".65"/>
      {/* Line items */}
      <line x1="9" y1="18" x2="18" y2="18" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" opacity=".5"/>
      <line x1="21" y1="18" x2="27" y2="18" stroke="#22C55E" strokeWidth="1.3" strokeLinecap="round" opacity=".7"/>
      <line x1="9" y1="23" x2="18" y2="23" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" opacity=".45"/>
      <line x1="21" y1="23" x2="27" y2="23" stroke="#22C55E" strokeWidth="1.3" strokeLinecap="round" opacity=".65"/>
    </svg>
  )
}

function IconSpecialists() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      {/* Back-left figure */}
      <circle cx="8" cy="15" r="4.5" fill="rgba(34,197,94,0.07)" stroke="#22C55E" strokeWidth="1.2" opacity=".7"/>
      <path d="M1 32 Q1 25 8 25 Q11 25 13 26" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity=".7"/>
      {/* Back-right figure */}
      <circle cx="28" cy="15" r="4.5" fill="rgba(34,197,94,0.07)" stroke="#22C55E" strokeWidth="1.2" opacity=".7"/>
      <path d="M35 32 Q35 25 28 25 Q25 25 23 26" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity=".7"/>
      {/* Front-centre figure */}
      <circle cx="18" cy="14" r="6" fill="rgba(34,197,94,0.12)" stroke="#22C55E" strokeWidth="1.5"/>
      <path d="M5 34 Q5 27 18 27 Q31 27 31 34" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      {/* Graduation cap */}
      <polygon points="18,5 26,9 18,13 10,9"
        fill="rgba(34,197,94,0.16)" stroke="#22C55E" strokeWidth="1.4" strokeLinejoin="round"/>
      <line x1="26" y1="9" x2="26" y2="16" stroke="#22C55E" strokeWidth="1.3" strokeLinecap="round"/>
      <circle cx="26" cy="17.5" r="1.8" fill="#22C55E"/>
    </svg>
  )
}

/* ── Centre book illustration ──────────────────────────────── */
function CentreBook() {
  return (
    <div className="relative w-[280px] h-[280px] flex items-center justify-center">
      {/* Outer dashed ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{ border: "1px dashed rgba(34,197,94,0.22)" }}
      />
      {/* Inner subtle ring */}
      <div
        className="absolute inset-5 rounded-full"
        style={{ border: "1px solid rgba(34,197,94,0.07)" }}
      />
      {/* Central glow */}
      <div
        className="absolute rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ width: 130, height: 130, background: "#16A34A" }}
      />

      {/* Sparkle dots */}
      <span className="absolute w-2 h-2 rounded-full" style={{ top: "13%",  left: "13%",  background: "#22C55E", opacity: 0.55 }} />
      <span className="absolute w-1.5 h-1.5 rounded-full" style={{ top: "11%",  right: "17%", background: "#22C55E", opacity: 0.4  }} />
      <span className="absolute w-1.5 h-1.5 rounded-full" style={{ bottom: "14%", left: "11%",  background: "#22C55E", opacity: 0.38 }} />
      <span className="absolute w-2 h-2 rounded-full" style={{ bottom: "16%", right: "13%", background: "#22C55E", opacity: 0.45 }} />
      <span className="absolute w-1 h-1 rounded-full"   style={{ top: "32%",  left: "6%",   background: "#22C55E", opacity: 0.3  }} />
      <span className="absolute w-1 h-1 rounded-full"   style={{ top: "30%",  right: "7%",  background: "#22C55E", opacity: 0.28 }} />

      {/* Book + Cap — no card wrapper */}
      <svg width="148" height="148" viewBox="0 0 148 148" fill="none" aria-hidden>
        {/*
          Left page: outer edge goes from (12,62) → (22,106) — angled inward,
          NOT vertical. Curved top bows upward; curved base bows downward.
          This gives a proper open-book trapezoid, not a rectangular silo.
        */}
        <path d="M74 56 Q42 50 12 62 L22 106 Q48 112 74 106 Z"
          fill="rgba(34,197,94,0.11)" stroke="#22C55E" strokeWidth="1.8"
          strokeLinejoin="round" strokeLinecap="round"/>
        {/* Right page — mirror of left */}
        <path d="M74 56 Q106 50 136 62 L126 106 Q100 112 74 106 Z"
          fill="rgba(34,197,94,0.08)" stroke="#22C55E" strokeWidth="1.8"
          strokeLinejoin="round" strokeLinecap="round"/>
        {/* Spine */}
        <line x1="74" y1="56" x2="74" y2="106" stroke="#22C55E" strokeWidth="2"
          strokeLinecap="round" opacity=".55"/>
        {/* Left page text lines — x-start tracks the angled outer edge */}
        <line x1="18" y1="70" x2="70" y2="68" stroke="#22C55E" strokeWidth="1.1" strokeLinecap="round" opacity=".42"/>
        <line x1="20" y1="79" x2="70" y2="77" stroke="#22C55E" strokeWidth="1.1" strokeLinecap="round" opacity=".37"/>
        <line x1="22" y1="88" x2="70" y2="86" stroke="#22C55E" strokeWidth="1.1" strokeLinecap="round" opacity=".32"/>
        <line x1="24" y1="97" x2="52" y2="95" stroke="#22C55E" strokeWidth="1.1" strokeLinecap="round" opacity=".27"/>
        {/* Right page text lines */}
        <line x1="78" y1="68" x2="130" y2="70" stroke="#22C55E" strokeWidth="1.1" strokeLinecap="round" opacity=".38"/>
        <line x1="78" y1="77" x2="128" y2="79" stroke="#22C55E" strokeWidth="1.1" strokeLinecap="round" opacity=".33"/>
        <line x1="78" y1="86" x2="126" y2="88" stroke="#22C55E" strokeWidth="1.1" strokeLinecap="round" opacity=".28"/>
        <line x1="96" y1="95" x2="124" y2="97" stroke="#22C55E" strokeWidth="1.1" strokeLinecap="round" opacity=".23"/>
        {/* Graduation cap (mortarboard) */}
        <polygon points="74,28 96,39 74,49 52,39"
          fill="rgba(34,197,94,0.17)" stroke="#22C55E" strokeWidth="1.8" strokeLinejoin="round"/>
        <circle cx="74" cy="28" r="3" fill="#22C55E"/>
        {/* Tassel */}
        <line x1="96" y1="39" x2="96" y2="51" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="96" cy="54" r="2.8" fill="#22C55E"/>
      </svg>
    </div>
  )
}

/* ── Feature data ───────────────────────────────────────────── */
const leftFeatures = [
  { Icon: IconRevision,  title: "Unlimited Feedback Rounds", desc: "We stay with you through every revision cycle until the work meets the required academic standard." },
  { Icon: IconClipboard, title: "Share Your Academic Brief", desc: "A simple, no-jargon form — tell us your subject, support type, and what you want to achieve." },
  { Icon: IconProofread, title: "Editorial Proofreading",    desc: "Thorough review of grammar, sentence structure, academic register, and argument clarity." },
]

const rightFeatures = [
  { Icon: IconOriginality, title: "Originality Guaranteed",  desc: "All feedback and editorial notes are produced specifically for your submission context — always original." },
  { Icon: IconPricing,     title: "Transparent Pricing",     desc: "A clear, no-obligation quote before any engagement begins. No hidden charges, ever." },
  { Icon: IconSpecialists, title: "5,000+ PhD Specialists",  desc: "A curated network of subject-matter experts across 50+ disciplines, from Law to Data Science." },
]

/* ── Section ─────────────────────────────────────────────────── */
export default function WhyChooseUs() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--color-navy-950)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#22C55E", fontFamily: "var(--font-body)", letterSpacing: "0.14em" }}
          >
            Why Students Choose Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#F8FAFC",
            }}
          >
            Everything you need, in one place.
          </motion.h2>
        </div>

        {/* 3-column layout */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-12 xl:gap-20 items-center">

          {/* Left features */}
          <div className="flex flex-col gap-10">
            {leftFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.12 + i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-5"
              >
                {/* Icon container — 64 × 64 */}
                <div
                  className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "rgba(22,163,74,0.1)",
                    border: "1px solid rgba(22,163,74,0.22)",
                  }}
                >
                  <f.Icon />
                </div>
                <div>
                  <p
                    className="font-semibold text-sm mb-1.5 leading-snug"
                    style={{ color: "#F8FAFC", fontFamily: "var(--font-body)" }}
                  >
                    {f.title}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#64748B", fontFamily: "var(--font-body)" }}
                  >
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Centre book */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex justify-center"
          >
            <CentreBook />
          </motion.div>

          {/* Right features — mirrored (icon right, text left) */}
          <div className="flex flex-col gap-10">
            {rightFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.12 + i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-5 flex-row-reverse"
              >
                {/* Icon container */}
                <div
                  className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "rgba(22,163,74,0.1)",
                    border: "1px solid rgba(22,163,74,0.22)",
                  }}
                >
                  <f.Icon />
                </div>
                <div className="text-right">
                  <p
                    className="font-semibold text-sm mb-1.5 leading-snug"
                    style={{ color: "#F8FAFC", fontFamily: "var(--font-body)" }}
                  >
                    {f.title}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#64748B", fontFamily: "var(--font-body)" }}
                  >
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
