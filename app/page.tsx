import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import SetupGuideSection from "@/components/setup-guide-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <SetupGuideSection />
      <Footer />
    </main>
  )
}
