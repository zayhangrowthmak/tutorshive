"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const R_SPACE = 74   // grid spacing radius
const R_DRAW  = 67   // polygon draw radius (gap = R_SPACE - R_DRAW)
const H_STEP  = Math.sqrt(3) * R_SPACE  // ≈ 128.1
const V_STEP  = R_SPACE * 1.5           // 111
const ODD_X   = H_STEP / 2             // ≈ 64.1

const subjects = [
  { id: 0,  label: "Research",    sub: "245 specialists", col: 0, row: 0 },
  { id: 1,  label: "Finance",     sub: "89 specialists",  col: 1, row: 0 },
  { id: 2,  label: "Law",         sub: "67 specialists",  col: 2, row: 0 },
  { id: 3,  label: "Nursing",     sub: "142 specialists", col: 0, row: 1 },
  { id: 4,  label: "MBA",         sub: "203 specialists", col: 1, row: 1 },
  { id: 5,  label: "Engineering", sub: "178 specialists", col: 2, row: 1 },
  { id: 6,  label: "Thesis",      sub: "312 specialists", col: 0, row: 2 },
  { id: 7,  label: "Maths",       sub: "94 specialists",  col: 1, row: 2 },
  { id: 8,  label: "Psychology",  sub: "56 specialists",  col: 2, row: 2 },
  { id: 9,  label: "Science",     sub: "134 specialists", col: 0, row: 3 },
  { id: 10, label: "Economics",   sub: "71 specialists",  col: 1, row: 3 },
  { id: 11, label: "Computing",   sub: "167 specialists", col: 2, row: 3 },
]

function hexPoints(cx: number, cy: number, r: number): string {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i - 90)
    return `${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`
  }).join(" ")
}

function getCenter(col: number, row: number): [number, number] {
  const isOdd = row % 2 === 1
  const x = 12 + R_SPACE + col * H_STEP + (isOdd ? ODD_X : 0)
  const y = 12 + R_SPACE + row * V_STEP
  return [x, y]
}

const W = 12 + R_SPACE * 2 + H_STEP * 2 + ODD_X + 12  // ≈ 492
const H = 12 + R_SPACE * 2 + V_STEP * 3 + 12           // ≈ 505

export default function HexGrid({ onSelect }: { onSelect?: (subject: string) => void }) {
  const [hovered, setHovered] = useState<number | null>(null)
  const [active, setActive]   = useState<number | null>(null)

  const handleClick = (s: typeof subjects[0]) => {
    setActive(s.id)
    onSelect?.(s.label)
  }

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      style={{ maxWidth: `${W}px` }}
      aria-label="Academic subject network"
    >
      <defs>
        {/* Glow filter */}
        <filter id="hex-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Active glow */}
        <filter id="hex-glow-active" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Background hex fill */}
        <linearGradient id="hex-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#132647" />
          <stop offset="100%" stopColor="#0F2040" />
        </linearGradient>
        <linearGradient id="hex-active" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#16A34A" />
          <stop offset="100%" stopColor="#15803D" />
        </linearGradient>
      </defs>

      {/* Connector lines between hexes (decorative) */}
      {subjects.map((s) => {
        const [cx, cy] = getCenter(s.col, s.row)
        const nextRow = subjects.find(
          (n) => n.row === s.row + 1 && Math.abs(n.col - s.col) <= 1 && n.id === s.id + 3
        )
        if (!nextRow) return null
        const [nx, ny] = getCenter(nextRow.col, nextRow.row)
        return (
          <line
            key={`connector-${s.id}`}
            x1={cx} y1={cy} x2={nx} y2={ny}
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1"
          />
        )
      })}

      {/* Hexagons */}
      {subjects.map((s, i) => {
        const [cx, cy] = getCenter(s.col, s.row)
        const isHov = hovered === s.id
        const isAct = active === s.id
        const pts   = hexPoints(cx, cy, R_DRAW)

        return (
          <motion.g
            key={s.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: i * 0.06,
              duration: 0.5,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
            onMouseEnter={() => setHovered(s.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleClick(s)}
            className="cursor-pointer"
            filter={isAct ? "url(#hex-glow-active)" : isHov ? "url(#hex-glow)" : undefined}
          >
            {/* Hex fill */}
            <motion.polygon
              points={pts}
              fill={isAct ? "url(#hex-active)" : "url(#hex-bg)"}
              stroke={isAct ? "#22C55E" : isHov ? "rgba(34,197,94,0.6)" : "rgba(255,255,255,0.08)"}
              strokeWidth={isAct ? "1.5" : "1"}
              animate={{
                fill: isAct ? "url(#hex-active)" : "url(#hex-bg)",
              }}
              transition={{ duration: 0.2 }}
            />

            {/* Subject label */}
            <text
              x={cx}
              y={cy - 7}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={isAct ? "#fff" : isHov ? "#fff" : "#CBD5E1"}
              fontSize="12"
              fontWeight={isHov || isAct ? "600" : "400"}
              letterSpacing="0.3"
              style={{ fontFamily: "var(--font-body)", pointerEvents: "none", transition: "fill 0.2s" }}
            >
              {s.label}
            </text>

            {/* Expert count */}
            <text
              x={cx}
              y={cy + 12}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={isAct ? "rgba(255,255,255,0.9)" : "rgba(148,163,184,0.7)"}
              fontSize="9.5"
              style={{ fontFamily: "var(--font-body)", pointerEvents: "none" }}
            >
              {s.sub}
            </text>

            {/* Active dot indicator */}
            {isAct && (
              <circle cx={cx} cy={cy - R_DRAW - 8} r="4" fill="#22C55E" />
            )}
          </motion.g>
        )
      })}
    </svg>
  )
}
