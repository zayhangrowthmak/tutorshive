import type { Metadata } from "next"
import { Bricolage_Grotesque, DM_Sans, Cormorant_Garamond } from "next/font/google"
import "./globals.css"

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

const dm = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "TutorsHive — Academic Consultation & Editorial Support",
  description:
    "Expert dissertation review, research methodology coaching, citation alignment, and academic writing consultation for students in the UK, Australia, and Canada.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${dm.variable} ${cormorant.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  )
}
