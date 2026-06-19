import Navbar           from "@/components/Navbar"
import Hero             from "@/components/Hero"
import TrustBar         from "@/components/TrustBar"
import PhDSection       from "@/components/PhDSection"
import WhyChooseUs      from "@/components/WhyChooseUs"
import EmpathySection   from "@/components/EmpathySection"
import ServicesGrid     from "@/components/ServicesGrid"
import HowItWorks       from "@/components/HowItWorks"
import PlatformRatings  from "@/components/PlatformRatings"
import Testimonials     from "@/components/Testimonials"
import IntegritySection from "@/components/IntegritySection"
import FinalCTA         from "@/components/FinalCTA"
import Footer           from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <PhDSection />
        <WhyChooseUs />
        <EmpathySection />
        <ServicesGrid />
        <HowItWorks />
        <PlatformRatings />
        <Testimonials />
        <IntegritySection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
