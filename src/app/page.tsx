import HeroSection from '@/components/hero-section'
import SkillsSection from '@/components/skills-section'
import ServicesSection from '@/components/services-section'
import StatsSection from '@/components/stats-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'
import PortfolioSection from '@/components/portfolio-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ServicesSection />
      <PortfolioSection/>
      <StatsSection />
      <ContactSection />
     <Footer />
    </>
  )
}