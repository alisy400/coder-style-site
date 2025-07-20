import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ResumeSection from '@/components/ResumeSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import TechStackSection from '@/components/TechStackSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ResumeSection />
      <ProjectsSection />
      <ExperienceSection />
      <TechStackSection />
      <ContactSection />
    </div>
  );
};

export default Index;
