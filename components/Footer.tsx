import { Mail, Phone, MessageCircle } from "lucide-react"
import Image from "next/image"

const services = [
  "Dissertation & Thesis Review",
  "Research Methodology Coaching",
  "Academic Language Polish",
  "Citation & Reference Alignment",
  "Subject-Matter Tutoring",
  "Programming Concept Coaching",
  "CV & Personal Statement Review",
]

const useful = [
  { label: "About Us",      href: "#about"    },
  { label: "How We Work",   href: "#process"  },
  { label: "Reviews",       href: "#reviews"  },
  { label: "Contact Us",    href: "#contact"  },
  { label: "Privacy Policy", href: "/privacy-policy" },
]

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-navy-950)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <Image src="/logo.png" alt="TutorsHive" width={32} height={32} className="w-8 h-8 object-contain" />
              <span className="font-bold text-white" style={{ fontFamily: "var(--font-display)", fontSize: "1rem" }}>
                TutorsHive
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "#475569", fontFamily: "var(--font-body)", maxWidth: "24ch" }}
            >
              Academic consultation and editorial support for international students in the UK, Australia, Canada, and beyond.
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                { icon: Phone,         val: "🇬🇧 +44 20 XXXX XXXX",        href: "tel:+4420XXXXXXXX" },    // TODO: replace with real UK number
                { icon: Phone,         val: "🇦🇺 +61 2 XXXX XXXX",         href: "tel:+612XXXXXXXX" },     // TODO: replace with real AU number
                { icon: Mail,          val: "project@tutorshive.com",       href: "mailto:project@tutorshive.com" },
                { icon: MessageCircle, val: "WhatsApp us",                  href: "https://wa.me/918219682177" },
              ].map(({ icon: Icon, val, href }) => (
                <a
                  key={val}
                  href={href}
                  className="flex items-center gap-2 text-xs transition-colors hover:text-white"
                  style={{ color: "#475569", fontFamily: "var(--font-body)" }}
                >
                  <Icon size={13} color="#22C55E" />
                  {val}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#64748B", fontFamily: "var(--font-body)", letterSpacing: "0.12em" }}
            >
              Our Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "#475569", fontFamily: "var(--font-body)" }}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful links */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#64748B", fontFamily: "var(--font-body)", letterSpacing: "0.12em" }}
            >
              Useful Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {useful.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "#475569", fontFamily: "var(--font-body)" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Where we operate */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#64748B", fontFamily: "var(--font-body)", letterSpacing: "0.12em" }}
            >
              We Operate In
            </h4>
            <ul className="flex flex-col gap-2.5">
              {["United Kingdom", "Australia", "Canada", "United States", "Malaysia", "Singapore", "UAE"].map((c) => (
                <li
                  key={c}
                  className="text-sm"
                  style={{ color: "#475569", fontFamily: "var(--font-body)" }}
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p
            className="text-xs"
            style={{ color: "#334155", fontFamily: "var(--font-body)" }}
          >
            © {new Date().getFullYear()} TutorsHive Private Limited. All rights reserved.
          </p>
          <p
            className="text-xs max-w-lg"
            style={{ color: "#334155", fontFamily: "var(--font-body)" }}
          >
            TutorsHive provides academic consultation and editorial support services only. We do not engage in contract cheating or produce assessable work for student submission.
          </p>
        </div>
      </div>
    </footer>
  )
}
