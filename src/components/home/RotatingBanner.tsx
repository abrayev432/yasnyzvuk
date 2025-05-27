
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, Shield, Award, Heart } from "lucide-react";

const bannerSlides = [
  {
    id: 1,
    title: "Новое поступление слуховых аппаратов Oticon Real™",
    subtitle: "Революционная технология Deep Neural Network",
    description: "Испытайте новый уровень качества звука с современными слуховыми аппаратами",
    image: "/lovable-uploads/d9416cbc-5ba5-460d-9eb1-d80d296aec7f.jpg",
    buttonText: "Подробнее",
    buttonLink: "/catalog",
    bgGradient: "from-blue-600/90 via-blue-500/85 to-cyan-500/80",
    accentColor: "bg-blue-500",
    icon: Sparkles
  },
  {
    id: 2,
    title: "Бесплатная консультация специалиста",
    subtitle: "Профессиональный подбор слуховых аппаратов",
    description: "Запишитесь на консультацию и получите индивидуальный план восстановления слуха",
    image: "/lovable-uploads/2a7c5336-f142-4b78-b148-b27a7cef94b6.jpg",
    buttonText: "Записаться",
    buttonLink: "/services",
    bgGradient: "from-emerald-600/90 via-green-500/85 to-teal-500/80",
    accentColor: "bg-emerald-500",
    icon: Shield
  },
  {
    id: 3,
    title: "Принимаем электронные сертификаты",
    subtitle: "От социального фонда России",
    description: "Используйте государственные сертификаты для приобретения слуховых аппаратов",
    image: "/lovable-uploads/51d40c07-ad93-450b-845e-27b231ac5926.jpg",
    buttonText: "Узнать больше",
    buttonLink: "/services",
    bgGradient: "from-orange-600/90 via-amber-500/85 to-yellow-500/80",
    accentColor: "bg-orange-500",
    icon: Award,
    showSfrLogo: true
  },
  {
    id: 4,
    title: "С Днём Победы!",
    subtitle: "9 мая - День памяти и славы",
    description: "Поздравляем всех с великим праздником! Вечная память героям, защитившим нашу Родину",
    image: "/lovable-uploads/d9416cbc-5ba5-460d-9eb1-d80d296aec7f.jpg",
    buttonText: "О нас",
    buttonLink: "/about",
    bgGradient: "from-red-700/90 via-red-600/85 to-red-500/80",
    accentColor: "bg-red-600",
    icon: Heart,
    isVictoryDay: true
  }
];

const RotatingBanner = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative w-full bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/30 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl"></div>
      </div>

      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full relative"
      >
        <CarouselContent>
          {bannerSlides.map((slide, index) => {
            const IconComponent = slide.icon;
            return (
              <CarouselItem key={slide.id}>
                <div className="relative h-[280px] md:h-[320px] overflow-hidden rounded-2xl mx-4 my-8 shadow-2xl group">
                  {/* Background image with overlay */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />
                  
                  {/* Modern gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} backdrop-blur-[0.5px]`} />
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 ${slide.accentColor} rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm bg-white/20`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* SFR Logo for certificate slide */}
                  {slide.showSfrLogo && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Logo_SFR.svg/2458px-Logo_SFR.svg.png"
                          alt="Логотип СФР"
                          className="h-10 w-auto"
                        />
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative h-full flex items-center justify-start px-8 md:px-12">
                    <div className="max-w-2xl text-white space-y-6">
                      {/* Badge */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                        <span className="text-xs font-medium uppercase tracking-wider">Новинка</span>
                      </div>

                      {/* Title */}
                      <h1 className="text-2xl md:text-4xl font-bold mb-3 leading-tight tracking-tight">
                        {slide.title}
                      </h1>
                      
                      {/* Subtitle */}
                      <h2 className="text-lg md:text-xl mb-4 opacity-95 font-medium leading-relaxed">
                        {slide.subtitle}
                      </h2>
                      
                      {/* Description */}
                      <p className="text-sm md:text-base mb-6 opacity-90 leading-relaxed max-w-lg">
                        {slide.description}
                      </p>
                      
                      {/* CTA Button */}
                      <Button 
                        asChild 
                        size="lg" 
                        className="bg-white/95 text-gray-900 hover:bg-white hover:scale-105 transition-all duration-300 px-8 py-3 text-sm md:text-base font-semibold rounded-xl shadow-xl group/btn backdrop-blur-sm"
                      >
                        <Link to={slide.buttonLink} className="flex items-center gap-2">
                          {slide.buttonText}
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 ${slide.accentColor}`}></div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        
        {/* Modern navigation buttons */}
        <CarouselPrevious className="left-8 bg-white/90 border-white/50 text-gray-700 hover:bg-white hover:scale-110 transition-all duration-300 shadow-xl backdrop-blur-sm w-12 h-12" />
        <CarouselNext className="right-8 bg-white/90 border-white/50 text-gray-700 hover:bg-white hover:scale-110 transition-all duration-300 shadow-xl backdrop-blur-sm w-12 h-12" />
      </Carousel>
      
      {/* Modern slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index 
                ? 'w-8 bg-white shadow-lg' 
                : 'w-2 bg-white/60 hover:bg-white/80'
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{ width: `${((current + 1) / bannerSlides.length) * 100}%` }}
        />
      </div>
    </section>
  );
};

export default RotatingBanner;
