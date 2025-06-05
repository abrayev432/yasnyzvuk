
import { Button } from "@/components/ui/button";
import { Volume, Star, ArrowRight, Sparkles, Zap, CheckCircle, Cpu, Radio, Bluetooth } from "lucide-react";
import { Link } from "react-router-dom";
import { memo, useState } from "react";

const HeroSection = memo(() => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 py-8 md:py-12 overflow-hidden">
      {/* Хай-тек декоративные элементы */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_49%,rgba(99,102,241,0.1)_50%,transparent_51%)] bg-[length:20px_20px]"></div>
      
      {/* Неоновые акценты */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee] animate-ping"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full shadow-[0_0_8px_#a855f7] animate-ping" style={{animationDelay: '1s'}}></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-cyan-400/30">
              <Cpu className="mr-2 h-4 w-4" />
              <span>Технологии будущего уже здесь</span>
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl font-display">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
                Слуховые аппараты
              </span>
              <br />
              <span className="text-white">нового поколения</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                с ИИ-технологиями
              </span>
            </h1>
            
            <p className="max-w-[500px] text-slate-300 text-base md:text-lg leading-relaxed">
              Революционные слуховые решения с 
              <span className="font-semibold text-cyan-400 glow-text"> искусственным интеллектом</span>, 
              <span className="font-semibold text-purple-400 glow-text"> беспроводной связью</span> и 
              <span className="font-semibold text-pink-400 glow-text"> адаптивной обработкой звука</span>
            </p>

            <div className="flex flex-col gap-3 space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_6px_#22d3ee]"></div>
                <Bluetooth className="w-4 h-4 text-cyan-400" />
                <span>Bluetooth 5.3 и управление через приложение</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_6px_#a855f7]"></div>
                <Radio className="w-4 h-4 text-purple-400" />
                <span>ИИ-анализ окружающей среды в реальном времени</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <div className="w-2 h-2 bg-pink-400 rounded-full shadow-[0_0_6px_#ec4899]"></div>
                <Zap className="w-4 h-4 text-pink-400" />
                <span>Автономная работа до 7 дней</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl shadow-lg border border-cyan-400/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                <Link to="/catalog" className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Исследовать технологии
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 px-8 py-4 rounded-xl transition-all duration-300 font-semibold bg-slate-800/50 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
              >
                <Link to="/services" className="flex items-center gap-2">
                  <Volume className="w-4 h-4" />
                  Диагностика ИИ
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-center animate-slide-up">
            <div className="relative h-[350px] w-full max-w-[450px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
              {/* Хай-тек рамка */}
              <div className="absolute inset-0 rounded-2xl border-2 border-gradient-to-r from-cyan-400/50 via-purple-400/50 to-pink-400/50 pointer-events-none"></div>
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400/70 rounded-tl-lg"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400/70 rounded-tr-lg"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400/70 rounded-bl-lg"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400/70 rounded-br-lg"></div>
              
              {!imageLoaded && (
                <div className="h-full w-full bg-gradient-to-br from-slate-700 to-slate-800 animate-pulse flex items-center justify-center">
                  <Volume className="h-16 w-16 text-cyan-400 animate-pulse" />
                </div>
              )}
              <img 
                alt="Хай-тек слуховые аппараты с ИИ" 
                className={`h-full w-full object-cover transition-all duration-700 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                src="/lovable-uploads/51d40c07-ad93-450b-845e-27b231ac5926.jpg"
                loading="eager"
                onLoad={() => setImageLoaded(true)}
              />
              
              {imageLoaded && (
                <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md rounded-xl p-4 border border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_6px_#22d3ee]"></div>
                    <p className="text-xs font-bold text-cyan-400 uppercase tracking-wide">AI-POWERED 2024</p>
                    <Zap className="w-3 h-3 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Нейро-слуховые системы</h3>
                  <p className="text-xs text-slate-300 mt-1">Адаптивный ИИ + квантовая обработка сигнала</p>
                </div>
              )}

              {/* Анимированные частицы */}
              <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .glow-text {
          text-shadow: 0 0 10px currentColor;
        }
      `}</style>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
