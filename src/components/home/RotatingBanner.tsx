
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, Shield, Award } from "lucide-react";

const bannerSlides = [
  {
    id: 2,
    title: "Бесплатная консультация специалиста",
    subtitle: "Профессиональный подбор слуховых аппаратов",
    description: "Запишитесь на консультацию и получите индивидуальный план восстановления слуха",
    buttonText: "Записаться",
    buttonLink: "/services",
    icon: Shield,
    gradient: "bg-classic-gradient"
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
    gradient: "bg-gold-gradient"
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
    <section className="relative w-full bg-gradient-to-br from-classic-cream to-classic-ivory overflow-hidden">
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
                <div className={`relative h-[180px] md:h-[300px] overflow-hidden mx-2 md:mx-4 my-4 md:my-8 ${slide.gradient} rounded-lg shadow-xl`}>
                  
                  {/* Декоративные элементы */}
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>

                  {/* SFR Logo for certificate slide */}
                  {slide.showSfrLogo && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 md:p-3 shadow-lg">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Logo_SFR.svg/2458px-Logo_SFR.svg.png"
                          alt="Логотип СФР"
                          className="h-6 md:h-8 w-auto"
                        />
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative h-full flex items-center justify-start px-6 md:px-12">
                    <div className="max-w-2xl text-white space-y-3 md:space-y-5">
                      
                      {/* Title */}
                      <h1 className="text-xl md:text-4xl font-bold mb-2 md:mb-3 leading-tight">
                        {slide.title}
                      </h1>
                      
                      {/* Subtitle */}
                      <h2 className="text-sm md:text-xl mb-3 md:mb-4 text-white/90 font-medium">
                        {slide.subtitle}
                      </h2>
                      
                      {/* Description */}
                      <p className="text-xs md:text-base mb-4 md:mb-6 text-white/80 leading-relaxed max-w-lg line-clamp-2 md:line-clamp-none">
                        {slide.description}
                      </p>
                      
                      {/* CTA Button */}
                      <Button 
                        asChild 
                        size="sm"
                        className="bg-white text-gray-900 hover:bg-white/90 transition-all duration-200 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold rounded-md shadow-lg hover:shadow-xl"
                      >
                        <Link to={slide.buttonLink} className="flex items-center gap-2">
                          {slide.buttonText}
                          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-white/10 pointer-events-none"></div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        
        {/* Классическая навигация */}
        <CarouselPrevious className="left-2 md:left-6 bg-white/80 backdrop-blur-sm border-gray-200 text-gray-700 hover:bg-white transition-all w-10 h-10 md:w-12 md:h-12 shadow-md" />
        <CarouselNext className="right-2 md:right-6 bg-white/80 backdrop-blur-sm border-gray-200 text-gray-700 hover:bg-white transition-all w-10 h-10 md:w-12 md:h-12 shadow-md" />
      </Carousel>
      
      {/* Элегантные индикаторы */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index 
                ? 'w-8 bg-classic-navy shadow-md' 
                : 'w-2 bg-gray-400 hover:bg-gray-500'
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
