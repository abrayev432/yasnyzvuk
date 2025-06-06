import { Button } from "@/components/ui/button";
import { Volume, Star, ArrowRight, Sparkles, Heart, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { memo, useState } from "react";

const HeroSection = memo(() => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-8 md:py-12 overflow-hidden">
      {/* Современные декоративные элементы */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-br from-brand/10 to-modern-purple/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-modern-cyan/10 to-modern-emerald/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              <Heart className="mr-2 h-4 w-4" />
              <span>Вернем вам мир полноценных звуков</span>
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl font-display">
              <span className="gradient-text">Откройте для себя</span>
              <br />
              <span className="text-slate-800">мир четкого звука</span>
              <br />
              <span className="text-modern-orange">с нашими решениями!</span>
            </h1>
            
            <p className="max-w-[500px] text-slate-600 text-base md:text-lg leading-relaxed">
              Инновационные слуховые технологии от мировых лидеров с 
              <span className="font-semibold text-brand"> персональной настройкой</span> и 
              <span className="font-semibold text-modern-emerald"> пожизненной поддержкой</span>
            </p>

            <div className="flex flex-col gap-3 space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Бесплатная диагностика слуха</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>30 дней пробного ношения</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Гарантия до 5 лет</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="modern-button px-8 py-4 rounded-xl">
                <Link to="/catalog" className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Подобрать аппарат
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-brand text-brand hover:bg-brand hover:text-white px-8 py-4 rounded-xl transition-all duration-300 font-semibold modern-hover"
              >
                <Link to="/services" className="flex items-center gap-2">
                  <Volume className="w-4 h-4" />
                  Записаться на прием
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-center animate-slide-up">
            <div className="relative h-[350px] w-full max-w-[450px] rounded-2xl overflow-hidden modern-card modern-hover">
              {!imageLoaded && (
                <div className="h-full w-full bg-gradient-to-br from-slate-100 to-slate-200 animate-pulse flex items-center justify-center">
                  <Volume className="h-16 w-16 text-brand animate-pulse" />
                </div>
              )}
              <img 
                alt="Современные слуховые аппараты" 
                className={`h-full w-full object-cover transition-all duration-700 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                src="https://www.sinohearing.com/wp-content/uploads/2019/10/bluetooth-hearing-aid-app-control.jpg"
                loading="eager"
                onLoad={() => setImageLoaded(true)}
              />
              
              {imageLoaded && (
                <div className="absolute bottom-6 left-6 right-6 glass-effect rounded-xl p-4 shadow-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-modern-emerald rounded-full animate-pulse"></div>
                    <p className="text-xs font-bold text-modern-emerald uppercase tracking-wide">Инновации 2024</p>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">Умные слуховые аппараты</h3>
                  <p className="text-xs text-slate-600 mt-1">С управлением через приложение и ИИ</p>
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
