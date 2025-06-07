
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import BrandsSection from "@/components/home/BrandsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";
import ContactSection from "@/components/home/ContactSection";
import RotatingBanner from "@/components/home/RotatingBanner";
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <RotatingBanner />
      <HeroSection />
      <FeaturesSection />
      <BrandsSection />
      <TestimonialsSection />
      <CtaSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
