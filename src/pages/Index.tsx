import { Hero } from '@/components/Hero';
import { FeaturedProperties } from '@/components/FeaturedProperties';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProperties />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
