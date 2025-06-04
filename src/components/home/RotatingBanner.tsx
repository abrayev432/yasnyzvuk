
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
    buttonText: "Записаться",
    buttonLink: "/services",
    icon: Shield
  },
  {
    id: 3,
    title: "Принимаем электронные сертификаты",
    subtitle: "От социального фонда России",
    description: "Используйте государственные сертификаты для приобретения слуховых аппаратов",
    buttonText: "Узнать больше",
    buttonLink: "/services",
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
    <section className="relative w-full bg-white overflow-hidden">
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
                  <div className="relative h-[160px] md:h-[280px] overflow-hidden mx-2 md:mx-4 my-4 md:my-8 flex items-center justify-center bg-neutral-50">
                    {/* Centered and scaled image for Victory Day */}
                    <div className="relative">
                      <img 
                        src={slide.image}
                        alt="День Победы"
                        className="max-h-24 md:max-h-48 w-auto object-contain transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </CarouselItem>
              );
            }
            
            return (
              <CarouselItem key={slide.id}>
                <div className="relative h-[160px] md:h-[280px] overflow-hidden mx-2 md:mx-4 my-4 md:my-8 bg-neutral-50 border border-neutral-200">
                  
                  {/* Минималистичная иконка */}
                  <div className="absolute top-4 left-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-neutral-900 flex items-center justify-center">
                      <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                  </div>

                  {/* SFR Logo for certificate slide */}
                  {slide.showSfrLogo && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-white border border-neutral-200 p-2 md:p-3">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Logo_SFR.svg/2458px-Logo_SFR.svg.png"
                          alt="Логотип СФР"
                          className="h-6 md:h-8 w-auto"
                        />
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative h-full flex items-center justify-start px-4 md:px-8">
                    <div className="max-w-2xl text-neutral-900 space-y-2 md:space-y-4">
                      
                      {/* Title */}
                      <h1 className="text-lg md:text-3xl font-medium mb-1 md:mb-2 leading-tight">
                        {slide.title}
                      </h1>
                      
                      {/* Subtitle */}
                      <h2 className="text-sm md:text-lg mb-2 md:mb-3 text-neutral-600 font-normal">
                        {slide.subtitle}
                      </h2>
                      
                      {/* Description */}
                      <p className="text-xs md:text-base mb-3 md:mb-4 text-neutral-500 leading-relaxed max-w-lg line-clamp-2 md:line-clamp-none">
                        {slide.description}
                      </p>
                      
                      {/* CTA Button */}
                      <Button 
                        asChild 
                        size="sm"
                        className="bg-neutral-900 text-white hover:bg-neutral-800 transition-colors duration-200 px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-medium"
                      >
                        <Link to={slide.buttonLink} className="flex items-center gap-2">
                          {slide.buttonText}
                          <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900"></div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        
        {/* Minimal navigation buttons */}
        <CarouselPrevious className="left-2 md:left-4 bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-50 transition-colors w-8 h-8 md:w-10 md:h-10 shadow-sm" />
        <CarouselNext className="right-2 md:right-4 bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-50 transition-colors w-8 h-8 md:w-10 md:h-10 shadow-sm" />
      </Carousel>
      
      {/* Minimal slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              current === index 
                ? 'w-6 bg-neutral-900' 
                : 'w-1 bg-neutral-300 hover:bg-neutral-400'
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
