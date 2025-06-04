
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, Shield, Award, Heart, Sparkles } from "lucide-react";

const bannerSlides = [
  {
    id: 2,
    title: "Бесплатная консультация специалиста",
    subtitle: "Профессиональный подбор слуховых аппаратов",
    description: "Запишитесь на консультацию и получите индивидуальный план восстановления слуха",
    buttonText: "Записаться",
    buttonLink: "/services",
    icon: Shield,
    gradient: "bg-orange-gradient"
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
    gradient: "bg-blue-gradient"
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
    isVictoryDay: true,
    gradient: "bg-vibrant-gradient"
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
    <section className="relative w-full bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
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
                  <div className="relative h-[180px] md:h-[300px] overflow-hidden mx-2 md:mx-4 my-4 md:my-8 flex items-center justify-center vibrant-card">
                    {/* Centered and scaled image for Victory Day */}
                    <div className="relative">
                      <img 
                        src={slide.image}
                        alt="День Победы"
                        className="max-h-28 md:max-h-56 w-auto object-contain transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </CarouselItem>
              );
            }
            
            return (
              <CarouselItem key={slide.id}>
                <div className={`relative h-[180px] md:h-[300px] overflow-hidden mx-2 md:mx-4 my-4 md:my-8 ${slide.gradient} rounded-2xl shadow-2xl`}>
                  
                  {/* Декоративные элементы */}
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>

                  <Sparkles className="absolute top-4 right-4 h-6 w-6 text-white/60 animate-pulse" />

                  {/* SFR Logo for certificate slide */}
                  {slide.showSfrLogo && (
                    <div className="absolute top-4 right-12">
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
                        className="bg-white text-gray-900 hover:bg-white/90 transition-all duration-200 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105"
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
        
        {/* Стильная навигация */}
        <CarouselPrevious className="left-2 md:left-6 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all w-10 h-10 md:w-12 md:h-12 shadow-lg" />
        <CarouselNext className="right-2 md:right-6 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all w-10 h-10 md:w-12 md:h-12 shadow-lg" />
      </Carousel>
      
      {/* Современные индикаторы */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index 
                ? 'w-8 bg-white shadow-lg' 
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
