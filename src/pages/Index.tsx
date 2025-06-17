
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import BrandsSection from "@/components/home/BrandsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";
import ContactSection from "@/components/home/ContactSection";
import RotatingBanner from "@/components/home/RotatingBanner";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ясный звук",
    "description": "Специализированный магазин слуховых аппаратов с профессиональным подбором и настройкой",
    "url": "https://yasniy-zvuk.ru",
    "telephone": "+74957990926",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RU",
      "addressLocality": "Москва"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Слуховые аппараты",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Заушные слуховые аппараты"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Product",
            "name": "Внутриушные слуховые аппараты"
          }
        }
      ]
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Ясный звук - слуховые аппараты в Москве | Подбор и настройка"
        description="Специализированный магазин слуховых аппаратов Ясный звук. Профессиональный подбор, настройка и обслуживание. Широкий ассортимент от ведущих производителей. ☎ +7 (495) 799-09-26"
        keywords="слуховые аппараты Москва, купить слуховой аппарат, подбор слухового аппарата, настройка слуховых аппаратов, Oticon, Phonak, ReSound"
        structuredData={structuredData}
        url="https://yasniy-zvuk.ru"
      />
      
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
