
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
    showHearingAidImage: true,
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
                <div className={`relative h-[150px] md:h-[250px] overflow-hidden mx-2 md:mx-4 my-3 md:my-6 ${slide.gradient} rounded-2xl shadow-2xl`}>
                  
                  {/* Современные декоративные элементы */}
                  <div className="absolute top-4 left-4">
                    <div className="w-8 h-8 md:w-12 md:h-12 glass-effect rounded-xl flex items-center justify-center">
                      <IconComponent className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>

                  {/* Floating decorative elements */}
                  <div className="absolute top-6 right-16 w-3 h-3 bg-white/20 rounded-full animate-float"></div>
                  <div className="absolute bottom-12 right-24 w-4 h-4 bg-white/15 rounded-full animate-float" style={{animationDelay: '2s'}}></div>

                  {/* SFR Logo for certificate slide */}
                  {slide.showSfrLogo && (
                    <div className="absolute top-4 right-4">
                      <div className="glass-effect rounded-xl p-2 md:p-3 shadow-xl">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Logo_SFR.svg/2458px-Logo_SFR.svg.png"
                          alt="Логотип СФР"
                          className="h-4 md:h-8 w-auto"
                        />
                      </div>
                    </div>
                  )}

                  {/* Hearing Aid Image for certificate slide */}
                  {slide.showHearingAidImage && (
                    <div className="absolute right-4 md:right-8 bottom-4 md:bottom-8 w-20 h-20 md:w-32 md:h-32">
                      <img 
                        src="/lovable-uploads/989a52d6-82bd-43a8-ba75-93aad7c04c14.png"
                        alt="Слуховые аппараты"
                        className="w-full h-full object-contain filter drop-shadow-2xl"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative h-full flex items-center justify-start px-6 md:px-12">
                    <div className="max-w-2xl text-white space-y-2 md:space-y-4">
                      
                      {/* Title */}
                      <h1 className="text-lg md:text-3xl font-bold mb-2 md:mb-3 leading-tight font-display">
                        {slide.title}
                      </h1>
                      
                      {/* Subtitle */}
                      <h2 className="text-xs md:text-xl mb-2 md:mb-4 text-white/90 font-medium">
                        {slide.subtitle}
                      </h2>
                      
                      {/* Description */}
                      <p className="text-xs md:text-base mb-4 md:mb-6 text-white/80 leading-relaxed max-w-xl line-clamp-2">
                        {slide.description}
                      </p>
                      
                      {/* CTA Button */}
                      <Button 
                        asChild 
                        size="sm"
                        className="glass-effect text-slate-800 hover:bg-white/90 transition-all duration-300 px-4 md:px-8 py-2 md:py-3 text-xs md:text-base font-semibold rounded-xl shadow-2xl hover:shadow-3xl hover:scale-105"
                      >
                        <Link to={slide.buttonLink} className="flex items-center gap-2">
                          <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                          {slide.buttonText}
                          <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
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
        <CarouselPrevious className="left-2 md:left-6 glass-effect border-white/20 text-slate-700 hover:bg-white/90 transition-all w-8 h-8 md:w-12 md:h-12 shadow-xl rounded-xl" />
        <CarouselNext className="right-2 md:right-6 glass-effect border-white/20 text-slate-700 hover:bg-white/90 transition-all w-8 h-8 md:w-12 md:h-12 shadow-xl rounded-xl" />
      </Carousel>
      
      {/* Современные индикаторы */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              current === index 
                ? 'w-8 bg-brand shadow-lg' 
                : 'w-1.5 bg-white/50 hover:bg-white/70'
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
