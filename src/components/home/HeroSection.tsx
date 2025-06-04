
import { Button } from "@/components/ui/button";
import { Volume, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { memo, useState } from "react";

const HeroSection = memo(() => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-classic-cream via-white to-classic-ivory py-20 md:py-32 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-classic-navy/5 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-classic-gold/10 rounded-full"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center bg-classic-navy text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              <Star className="mr-2 h-4 w-4" />
              <span>№1 в профессиональном подборе слуховых аппаратов</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-serif">
              <span className="text-classic-navy">Верните радость</span>
              <br />
              <span className="text-classic-charcoal">ясного звука</span>
              <br />
              <span className="text-classic-gold">в вашу жизнь!</span>
            </h1>
            
            <p className="max-w-[500px] text-gray-600 text-lg md:text-xl leading-relaxed">
              Современные слуховые аппараты от ведущих производителей с 
              <span className="font-semibold text-classic-navy"> бесплатной консультацией</span> и 
              <span className="font-semibold text-classic-gold"> индивидуальным подбором</span>
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="classic-button text-lg px-8 py-4">
                <Link to="/catalog" className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  Перейти в каталог
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-classic-navy text-classic-navy hover:bg-classic-navy hover:text-white text-lg px-8 py-4 rounded-md transition-all duration-300 font-semibold"
              >
                <Link to="/services" className="flex items-center gap-2">
                  <Volume className="w-5 h-5" />
                  Наши услуги
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-center animate-slide-up">
            <div className="relative h-[400px] w-full max-w-[500px] rounded-lg overflow-hidden classic-card elegant-hover">
              {!imageLoaded && (
                <div className="h-full w-full bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse flex items-center justify-center">
                  <Volume className="h-16 w-16 text-classic-navy animate-pulse" />
                </div>
              )}
              <img 
                alt="Современный слуховой аппарат" 
                className={`h-full w-full object-cover transition-all duration-700 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                src="/lovable-uploads/d9416cbc-5ba5-460d-9eb1-d80d296aec7f.jpg"
                loading="eager"
                onLoad={() => setImageLoaded(true)}
              />
              
              {imageLoaded && (
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-classic-forest rounded-full"></div>
                    <p className="text-sm font-bold text-classic-forest uppercase tracking-wide">Новое поступление</p>
                  </div>
                  <h3 className="text-lg font-bold text-classic-charcoal">Современные цифровые слуховые аппараты</h3>
                  <p className="text-sm text-gray-600 mt-1">С bluetooth и шумоподавлением</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
