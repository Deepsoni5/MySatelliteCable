import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import WhyChooseSection from "@/components/why-choose-section"
import PlansSection from "@/components/plans-section"
import PlansComparison from "@/components/plans-comparison"
import CoverageSection from "@/components/coverage-section"
import TeamSection from "@/components/team-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyChooseSection />
      <PlansSection />
      <PlansComparison />
      <CoverageSection />
      <TeamSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
