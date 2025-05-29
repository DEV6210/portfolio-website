
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import HireMeSection from '@/components/HireMeSection';
import ContactSection from '@/components/ContactSection';
import FloatingHireButton from '@/components/FloatingHireButton';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <HireMeSection />
      <ContactSection />
      <FloatingHireButton />
      <Footer />
    </div>
  );
};

export default Index;
