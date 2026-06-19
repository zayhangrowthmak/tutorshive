"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star, Users, Clock, Globe } from "lucide-react"

const stats = [
  { icon: Users,  value: "5,000+",  label: "PhD Specialists"         },
  { icon: Star,   value: "4.9/5",   label: "Average Rating"          },
  { icon: Globe,  value: "1,200+",  label: "Students Served"         },
  { icon: Clock,  value: "24/7",    label: "Consultation Support"    },
]

export default function TrustBar() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <div
      ref={ref}
      className="relative z-10 py-6"
      style={{ background: "var(--color-navy-900)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-white/5">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 lg:justify-center px-0 lg:px-8"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(22,163,74,0.12)" }}
              >
                <Icon size={16} color="#22C55E" />
              </div>
              <div>
                <div
                  className="font-bold text-white leading-none text-xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {value}
                </div>
                <div
                  className="text-xs mt-0.5"
                  style={{ color: "#64748B", fontFamily: "var(--font-body)" }}
                >
                  {label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
