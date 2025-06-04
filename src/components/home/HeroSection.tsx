
import { Button } from "@/components/ui/button";
import { Volume, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { memo, useState } from "react";

const HeroSection = memo(() => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 md:py-32 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-vibrant-orange rounded-full opacity-20 animate-bounce-gentle"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-vibrant-purple rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-vibrant-blue rounded-full opacity-15 animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center bg-gradient-to-r from-vibrant-blue to-vibrant-purple text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              <Star className="mr-2 h-4 w-4" />
              <span>№1 в профессиональном подборе слуховых аппаратов</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="gradient-text">Верните радость</span>
              <br />
              <span className="text-gray-900">ясного звука</span>
              <br />
              <span className="text-vibrant-orange">в вашу жизнь!</span>
            </h1>
            
            <p className="max-w-[500px] text-gray-600 text-lg md:text-xl leading-relaxed">
              Современные слуховые аппараты от ведущих производителей с 
              <span className="font-semibold text-vibrant-blue"> бесплатной консультацией</span> и 
              <span className="font-semibold text-vibrant-purple"> индивидуальным подбором</span>
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="vibrant-button text-lg px-8 py-4 rounded-xl">
                <Link to="/catalog" className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Перейти в каталог
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-vibrant-blue text-vibrant-blue hover:bg-vibrant-blue hover:text-white text-lg px-8 py-4 rounded-xl transition-all duration-300 font-semibold"
              >
                <Link to="/services" className="flex items-center gap-2">
                  <Volume className="w-5 h-5" />
                  Наши услуги
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-center animate-slide-up">
            <div className="relative h-[400px] w-full max-w-[500px] rounded-3xl overflow-hidden vibrant-card hover:scale-105 transition-all duration-500">
              {!imageLoaded && (
                <div className="h-full w-full bg-gradient-to-br from-blue-100 to-purple-100 animate-pulse flex items-center justify-center">
                  <Volume className="h-16 w-16 text-vibrant-blue animate-pulse" />
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
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-sm font-bold text-vibrant-green uppercase tracking-wide">Новое поступление</p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Современные цифровые слуховые аппараты</h3>
                  <p className="text-sm text-gray-600 mt-1">С bluetooth и шумоподавлением</p>
                </div>
              )}
              
              {/* Декоративный градиентный оверлей */}
              <div className="absolute inset-0 bg-gradient-to-tr from-vibrant-blue/10 via-transparent to-vibrant-purple/10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
