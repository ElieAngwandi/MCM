import { SiteHeader } from '@/components/site-header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ServicesBento } from '@/components/services-bento';
import { ProjectsGallery } from '@/components/projects-gallery';
import { MethodSection } from '@/components/method-section';
import { FaqSection } from '@/components/faq-section';
import { ContactSection } from '@/components/contact-section';
import { SiteFooter } from '@/components/site-footer';
import { FloatingActions } from '@/components/floating-actions';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080E18] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      {/* Global Navigation */}
      <SiteHeader />

      {/* Hero Section with Live Stats */}
      <HeroSection />

      {/* About MCM & 3 Pillars of Excellence */}
      <AboutSection />

      {/* Bento Grid: 7 Core Technical Services */}
      <ServicesBento />

      {/* Flagship Projects Showcase (Portfolio) */}
      <ProjectsGallery />

      {/* Engineering Process & HSE Commitments */}
      <MethodSection />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Direct Contact & Project Inquiry Form */}
      <ContactSection />

      {/* Corporate Extended Footer */}
      <SiteFooter />

      {/* Floating WhatsApp and Scroll Actions */}
      <FloatingActions />
    </main>
  );
}
