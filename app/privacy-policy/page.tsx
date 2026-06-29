import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy — TutorsHive",
  description:
    "TutorsHive Privacy Policy. How we collect, use, and protect your personal data in compliance with the UK GDPR and the Australian Privacy Act 1988.",
}

const SECTIONS = [
  {
    id: "who-we-are",
    title: "1. Who We Are",
    body: `TutorsHive is an academic consultation and editorial support service operated by TutorsHive Private Limited ("TutorsHive", "we", "us", or "our"). We provide dissertation review, research methodology coaching, academic language polish, citation alignment, and related educational guidance services to students primarily in the United Kingdom, Australia, Canada, and other international markets.

Contact: project@tutorshive.com`,
  },
  {
    id: "data-we-collect",
    title: "2. Personal Data We Collect",
    body: `We collect the following categories of personal data when you use our website or services:

• Identity data: full name
• Contact data: email address, phone number, WhatsApp contact
• Academic data: university name, area of study, level of study, nature of support required
• Technical data: IP address, browser type, device type, pages visited, referral source (collected automatically via cookies and analytics)
• Communications data: messages, enquiries, and feedback you send us

We do not collect sensitive personal data (as defined under UK GDPR Article 9) and we do not knowingly collect data from individuals under the age of 16.`,
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Data",
    body: `We use your personal data for the following purposes:

• To respond to your enquiry and match you with an appropriate specialist
• To deliver academic consultation and editorial support services
• To communicate with you about your engagement, including follow-up and revisions
• To send service-related administrative communications
• To improve our website and service quality (using aggregated analytics)
• To comply with our legal obligations

We do not use your personal data for automated decision-making or profiling.`,
  },
  {
    id: "legal-basis",
    title: "4. Legal Basis for Processing (UK & EU)",
    body: `Under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, our legal bases for processing personal data are:

• Contract performance (Article 6(1)(b)): processing necessary to provide the service you have requested
• Legitimate interests (Article 6(1)(f)): improving our services and communicating with prospective students
• Legal obligation (Article 6(1)(c)): where we are required to retain or disclose data by law
• Consent (Article 6(1)(a)): where we ask for your explicit consent, such as for marketing communications

You may withdraw consent at any time by contacting us at project@tutorshive.com.`,
  },
  {
    id: "australian-privacy",
    title: "5. Australian Privacy Act 1988 Compliance",
    body: `For users in Australia, this policy has been prepared in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).

Collection: We only collect personal information that is reasonably necessary for our services. Where practicable, we collect information directly from you.

Use and disclosure: We use your personal information only for the primary purpose for which it was collected. We do not sell, rent, or trade your personal information to third parties.

Access and correction: You have the right to request access to personal information we hold about you and to request corrections if it is inaccurate, incomplete, or misleading. To exercise these rights, contact us at project@tutorshive.com.

Complaints: If you believe we have breached the Australian Privacy Principles, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at www.oaic.gov.au.

Cross-border disclosure: Your data may be processed by staff or service providers located outside Australia. We take reasonable steps to ensure those recipients handle your data consistently with the APPs.`,
  },
  {
    id: "data-sharing",
    title: "6. Who We Share Your Data With",
    body: `We do not sell your personal data. We may share it only with:

• Academic specialists engaged to deliver your consultation (limited to the information necessary for your engagement)
• Service providers who assist us in operating our website and systems (e.g. hosting, email delivery, analytics), who are contractually bound to protect your data
• Legal or regulatory authorities where required by law

All third parties are required to handle your data securely and in accordance with applicable law.`,
  },
  {
    id: "data-retention",
    title: "7. Data Retention",
    body: `We retain your personal data for as long as necessary to deliver our services and meet our legal obligations:

• Enquiry data (no purchase): 12 months from last contact
• Client engagement data: 5 years from the end of the engagement, in line with standard commercial retention requirements
• Analytics and technical data: up to 26 months

After these periods, your data is securely deleted or anonymised.`,
  },
  {
    id: "your-rights",
    title: "8. Your Rights",
    body: `Depending on your location, you may have the following rights regarding your personal data:

Under UK GDPR (United Kingdom):
• Right of access — obtain a copy of your personal data
• Right to rectification — correct inaccurate data
• Right to erasure — request deletion under certain circumstances
• Right to restrict processing — pause processing in certain circumstances
• Right to data portability — receive your data in a structured, machine-readable format
• Right to object — object to processing based on legitimate interests
• Rights related to automated decision-making

To exercise any of these rights, email project@tutorshive.com. We will respond within 30 days. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.

Under Australian Privacy Act 1988:
• Right to access and correct your personal information
• Right to complain to the OAIC if you believe your privacy has been breached`,
  },
  {
    id: "cookies",
    title: "9. Cookies",
    body: `Our website uses cookies and similar tracking technologies to improve your experience and analyse traffic. These include:

• Essential cookies: required for the site to function
• Analytics cookies: help us understand how visitors use the site (e.g. Google Analytics, anonymised)

You can control cookie preferences through your browser settings. Disabling cookies may affect certain site functionality. We do not use cookies for targeted advertising.`,
  },
  {
    id: "security",
    title: "10. Data Security",
    body: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction. These include encrypted data transmission (HTTPS), restricted access controls, and regular security reviews.

No method of transmission over the internet is completely secure. If you believe your data has been compromised, please contact us immediately at project@tutorshive.com.`,
  },
  {
    id: "changes",
    title: "11. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The date of the most recent revision is shown below. Continued use of our services after any changes constitutes acceptance of the updated policy. We encourage you to review this page periodically.`,
  },
  {
    id: "contact-us",
    title: "12. Contact Us",
    body: `If you have any questions, concerns, or requests relating to this Privacy Policy or your personal data, please contact us:

TutorsHive Private Limited
Email: project@tutorshive.com
Website: tutorshive.com

For UK privacy matters, you may also contact the Information Commissioner's Office (ICO): ico.org.uk / 0303 123 1113

For Australian privacy matters, you may contact the Office of the Australian Information Commissioner (OAIC): oaic.gov.au`,
  },
]

export default function PrivacyPolicy() {
  const lastUpdated = "29 June 2026"

  return (
    <div style={{ backgroundColor: "var(--color-navy-900)", minHeight: "100vh" }}>

      {/* Header */}
      <div
        style={{ backgroundColor: "var(--color-navy-950)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        className="py-20 px-6"
      >
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs mb-8 transition-colors hover:text-white"
            style={{ color: "#475569", fontFamily: "var(--font-body)" }}
          >
            ← Back to TutorsHive
          </Link>
          <p
            className="text-xs font-medium tracking-widest uppercase mb-4"
            style={{ color: "#22C55E", fontFamily: "var(--font-body)", letterSpacing: "0.14em" }}
          >
            Legal
          </p>
          <h1
            className="font-bold mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#F8FAFC",
              lineHeight: 1.1,
            }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm" style={{ color: "#64748B", fontFamily: "var(--font-body)" }}>
            Last updated: {lastUpdated}
          </p>
          <p
            className="mt-4 text-sm leading-relaxed"
            style={{ color: "#94A3B8", fontFamily: "var(--font-body)", maxWidth: "60ch" }}
          >
            This policy explains how TutorsHive collects, uses, and protects your personal data.
            It is prepared in accordance with the{" "}
            <strong style={{ color: "#CBD5E1" }}>UK General Data Protection Regulation (UK GDPR)</strong>
            {" "}and the{" "}
            <strong style={{ color: "#CBD5E1" }}>Australian Privacy Act 1988</strong>.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Jump links */}
        <nav
          className="mb-14 p-5 rounded-2xl"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#64748B", fontFamily: "var(--font-body)" }}
          >
            Contents
          </p>
          <ul className="flex flex-col gap-2">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "#64748B", fontFamily: "var(--font-body)" }}
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sections */}
        <div className="flex flex-col gap-12">
          {SECTIONS.map((s) => (
            <div key={s.id} id={s.id}>
              <h2
                className="font-bold mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.2rem",
                  color: "#F8FAFC",
                }}
              >
                {s.title}
              </h2>
              <div
                className="text-sm leading-relaxed whitespace-pre-line"
                style={{ color: "#94A3B8", fontFamily: "var(--font-body)" }}
              >
                {s.body}
              </div>
            </div>
          ))}
        </div>

        {/* Compliance badges */}
        <div
          className="mt-16 flex flex-wrap gap-3"
        >
          {["UK GDPR Compliant", "Australian Privacy Act 1988", "Data Protection Act 2018"].map((badge) => (
            <span
              key={badge}
              className="px-3 py-1.5 rounded-full text-xs font-medium"
              style={{
                background: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.2)",
                color: "#4ADE80",
                fontFamily: "var(--font-body)",
              }}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <Link
            href="/"
            className="text-sm transition-colors hover:text-white"
            style={{ color: "#475569", fontFamily: "var(--font-body)" }}
          >
            ← Return to TutorsHive
          </Link>
        </div>
      </div>
    </div>
  )
}
