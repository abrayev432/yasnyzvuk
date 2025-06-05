
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, Shield, Award, Sparkles } from "lucide-react";

const bannerSlides = [
  {
    id: 2,
    title: "Бесплатная консультация специалиста",
    subtitle: "Профессиональный подбор слуховых аппаратов",
    description: "Запишитесь на консультацию и получите индивидуальный план восстановления слуха",
    buttonText: "Записаться",
    buttonLink: "/services",
    icon: Shield,
    gradient: "bg-modern-gradient"
  },
  {
    id: 3,
    title: "Принимаем электронные сертификаты",
    subtitle: "От социального фонда России",
    description: "Используйте государственные сертификаты для приобретения слуховых аппаратов",
    buttonText: "Узнать больше",
    buttonLink: "/services",
    icon: Award,
    showSfrLogo: true,
    gradient: "bg-blue-modern"
  }
];

const RotatingBanner = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 6000);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative w-full bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
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
                <div className={`relative h-[200px] md:h-[350px] overflow-hidden mx-2 md:mx-4 my-4 md:my-8 ${slide.gradient} rounded-3xl shadow-2xl`}>
                  
                  {/* Современные декоративные элементы */}
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 glass-effect rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>

                  {/* Floating decorative elements */}
                  <div className="absolute top-10 right-20 w-4 h-4 bg-white/20 rounded-full animate-float"></div>
                  <div className="absolute bottom-20 right-32 w-6 h-6 bg-white/15 rounded-full animate-float" style={{animationDelay: '2s'}}></div>

                  {/* SFR Logo for certificate slide */}
                  {slide.showSfrLogo && (
                    <div className="absolute top-6 right-6">
                      <div className="glass-effect rounded-2xl p-3 md:p-4 shadow-xl">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Logo_SFR.svg/2458px-Logo_SFR.svg.png"
                          alt="Логотип СФР"
                          className="h-6 md:h-10 w-auto"
                        />
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative h-full flex items-center justify-start px-8 md:px-16">
                    <div className="max-w-3xl text-white space-y-4 md:space-y-6">
                      
                      {/* Title */}
                      <h1 className="text-2xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight font-display">
                        {slide.title}
                      </h1>
                      
                      {/* Subtitle */}
                      <h2 className="text-sm md:text-2xl mb-4 md:mb-6 text-white/90 font-medium">
                        {slide.subtitle}
                      </h2>
                      
                      {/* Description */}
                      <p className="text-sm md:text-lg mb-6 md:mb-8 text-white/80 leading-relaxed max-w-2xl line-clamp-2 md:line-clamp-none">
                        {slide.description}
                      </p>
                      
                      {/* CTA Button */}
                      <Button 
                        asChild 
                        size="lg"
                        className="glass-effect text-slate-800 hover:bg-white/90 transition-all duration-300 px-8 md:px-12 py-4 md:py-5 text-sm md:text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105"
                      >
                        <Link to={slide.buttonLink} className="flex items-center gap-3">
                          <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                          {slide.buttonText}
                          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Modern gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-white/10 pointer-events-none"></div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        
        {/* Современная навигация */}
        <CarouselPrevious className="left-2 md:left-8 glass-effect border-white/20 text-slate-700 hover:bg-white/90 transition-all w-12 h-12 md:w-16 md:h-16 shadow-xl rounded-2xl" />
        <CarouselNext className="right-2 md:right-8 glass-effect border-white/20 text-slate-700 hover:bg-white/90 transition-all w-12 h-12 md:w-16 md:h-16 shadow-xl rounded-2xl" />
      </Carousel>
      
      {/* Современные индикаторы */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index 
                ? 'w-10 bg-brand shadow-lg' 
                : 'w-2 bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default RotatingBanner;
