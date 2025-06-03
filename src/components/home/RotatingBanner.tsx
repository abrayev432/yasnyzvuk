
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, Shield, Award, Heart } from "lucide-react";

const bannerSlides = [
  {
    id: 2,
    title: "Бесплатная консультация специалиста",
    subtitle: "Профессиональный подбор слуховых аппаратов",
    description: "Запишитесь на консультацию и получите индивидуальный план восстановления слуха",
    image: "",
    buttonText: "Записаться",
    buttonLink: "/services",
    bgGradient: "from-cyan-400/90 via-cyan-500/85 to-teal-400/80",
    accentColor: "bg-cyan-500",
    icon: Shield
  },
  {
    id: 3,
    title: "Принимаем электронные сертификаты",
    subtitle: "От социального фонда России",
    description: "Используйте государственные сертификаты для приобретения слуховых аппаратов",
    image: "",
    buttonText: "Узнать больше",
    buttonLink: "/services",
    bgGradient: "from-cyan-400/90 via-cyan-500/85 to-teal-400/80",
    accentColor: "bg-cyan-500",
    icon: Award,
    showSfrLogo: true
  },
  {
    id: 4,
    title: "",
    subtitle: "",
    description: "",
    image: "https://avatars.mds.yandex.net/i?id=dc9dbfd2a865441abe71ab69c02e7c5d29d9d35c-12209413-images-thumbs&n=13",
    buttonText: "",
    buttonLink: "/about",
    bgGradient: "from-cyan-400/90 via-cyan-500/85 to-teal-400/80",
    accentColor: "bg-cyan-500",
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
            
            // Special handling for Victory Day slide
            if (slide.isVictoryDay) {
              return (
                <CarouselItem key={slide.id}>
                  <div className="relative h-[200px] md:h-[320px] overflow-hidden rounded-2xl mx-2 md:mx-4 my-4 md:my-8 shadow-2xl group flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100">
                    {/* Centered and scaled image for Victory Day */}
                    <div className="relative">
                      <img 
                        src={slide.image}
                        alt="День Победы"
                        className="max-h-32 md:max-h-56 w-auto object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </CarouselItem>
              );
            }
            
            return (
              <CarouselItem key={slide.id}>
                <div className="relative h-[200px] md:h-[320px] overflow-hidden rounded-2xl mx-2 md:mx-4 my-4 md:my-8 shadow-2xl group">
                  {/* Background image with overlay - only if image exists */}
                  {slide.image && (
                    <>
                      <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${slide.image})` }}
                      />
                      {/* Modern gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} backdrop-blur-[0.5px]`} />
                    </>
                  )}
                  
                  {/* If no image, just use gradient background */}
                  {!slide.image && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`} />
                  )}
                  
                  {/* Decorative elements */}
                  <div className="absolute top-2 md:top-4 left-2 md:left-4">
                    <div className={`w-8 h-8 md:w-12 md:h-12 ${slide.accentColor} rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm bg-white/20`}>
                      <IconComponent className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>

                  {/* SFR Logo for certificate slide */}
                  {slide.showSfrLogo && (
                    <div className="absolute top-2 md:top-4 right-2 md:right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-3 shadow-lg">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Logo_SFR.svg/2458px-Logo_SFR.svg.png"
                          alt="Логотип СФР"
                          className="h-6 md:h-10 w-auto"
                        />
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative h-full flex items-center justify-start px-4 md:px-12">
                    <div className="max-w-2xl text-white space-y-2 md:space-y-6">
                      {/* Badge - скрыть на мобильных */}
                      <div className="hidden md:inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                        <span className="text-xs font-medium uppercase tracking-wider">Новинка</span>
                      </div>

                      {/* Title */}
                      <h1 className="text-lg md:text-4xl font-bold mb-1 md:mb-3 leading-tight tracking-tight">
                        {slide.title}
                      </h1>
                      
                      {/* Subtitle */}
                      <h2 className="text-sm md:text-xl mb-2 md:mb-4 opacity-95 font-medium leading-relaxed">
                        {slide.subtitle}
                      </h2>
                      
                      {/* Description - сократить на мобильных */}
                      <p className="text-xs md:text-base mb-3 md:mb-6 opacity-90 leading-relaxed max-w-lg line-clamp-2 md:line-clamp-none">
                        {slide.description}
                      </p>
                      
                      {/* CTA Button */}
                      <Button 
                        asChild 
                        size="sm"
                        className="bg-white/95 text-gray-900 hover:bg-white hover:scale-105 transition-all duration-300 px-4 md:px-8 py-2 md:py-3 text-xs md:text-base font-semibold rounded-lg md:rounded-xl shadow-xl group/btn backdrop-blur-sm"
                      >
                        <Link to={slide.buttonLink} className="flex items-center gap-2">
                          {slide.buttonText}
                          <ArrowRight className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover/btn:translate-x-1" />
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
        
        {/* Modern navigation buttons - меньше на мобильных */}
        <CarouselPrevious className="left-2 md:left-8 bg-white/90 border-white/50 text-gray-700 hover:bg-white hover:scale-110 transition-all duration-300 shadow-xl backdrop-blur-sm w-8 h-8 md:w-12 md:h-12" />
        <CarouselNext className="right-2 md:right-8 bg-white/90 border-white/50 text-gray-700 hover:bg-white hover:scale-110 transition-all duration-300 shadow-xl backdrop-blur-sm w-8 h-8 md:w-12 md:h-12" />
      </Carousel>
      
      {/* Modern slide indicators */}
      <div className="absolute bottom-3 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
              current === index 
                ? 'w-6 md:w-8 bg-white shadow-lg' 
                : 'w-1.5 md:w-2 bg-white/60 hover:bg-white/80'
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 md:h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{ width: `${((current + 1) / bannerSlides.length) * 100}%` }}
        />
      </div>
    </section>
  );
};

export default RotatingBanner;
