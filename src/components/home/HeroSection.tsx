
import { Button } from "@/components/ui/button";
import { Volume, Star, ArrowRight, Heart, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { memo, useState } from "react";

const HeroSection = memo(() => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative bg-white py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center bg-brand/10 text-brand px-4 py-2 rounded-full text-sm font-medium">
              <Heart className="mr-2 h-4 w-4" />
              <span>Лидер продаж</span>
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-800">
              Откройте для себя
              <br />
              <span className="gradient-text">мир четкого звука</span>
              <br />
              с нашими решениями!
            </h1>
            
            <p className="max-w-[500px] text-gray-600 text-base md:text-lg leading-relaxed">
              Инновационные слуховые технологии от мировых лидеров с персональной настройкой и пожизненной поддержкой
            </p>

            <div className="flex flex-col gap-3 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-brand" />
                <span>Бесплатная диагностика слуха</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-brand" />
                <span>30 дней пробного ношения</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-brand" />
                <span>Гарантия до 5 лет</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="tehnika-button">
                <Link to="/catalog" className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Подобрать аппарат
                </Link>
              </Button>
              <Button asChild className="tehnika-button-outline">
                <Link to="/services" className="flex items-center gap-2">
                  <Volume className="w-4 w-4" />
                  Записаться на прием
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full max-w-[450px] rounded-2xl overflow-hidden tehnika-card bg-white">
              {!imageLoaded && (
                <div className="h-full w-full bg-gray-100 animate-pulse flex items-center justify-center">
                  <Volume className="h-16 w-16 text-brand animate-pulse" />
                </div>
              )}
              <img 
                alt="Современные слуховые аппараты" 
                className={`h-full w-full object-contain p-6 transition-all duration-700 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                src="https://www.sinohearing.com/wp-content/uploads/2019/10/bluetooth-hearing-aid-app-control.jpg"
                loading="eager"
                onLoad={() => setImageLoaded(true)}
              />
              
              {imageLoaded && (
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p className="text-xs font-bold text-green-600 uppercase tracking-wide">В наличии</p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Слуховой аппарат</h3>
                  <p className="text-sm text-gray-600 mb-2">Audeo P30-R</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-brand">84 500 руб.</span>
                    <Button size="sm" className="tehnika-button text-xs px-4 py-2">
                      Купить
                    </Button>
                  </div>
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
