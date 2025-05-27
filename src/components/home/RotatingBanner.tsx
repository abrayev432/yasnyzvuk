
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const bannerSlides = [
  {
    id: 1,
    title: "Новое поступление слуховых аппаратов Oticon Real™",
    subtitle: "Революционная технология Deep Neural Network",
    description: "Испытайте новый уровень качества звука с современными слуховыми аппаратами",
    image: "/lovable-uploads/d9416cbc-5ba5-460d-9eb1-d80d296aec7f.jpg",
    buttonText: "Подробнее",
    buttonLink: "/catalog",
    bgGradient: "from-blue-500/80 to-blue-700/80"
  },
  {
    id: 2,
    title: "Бесплатная консультация специалиста",
    subtitle: "Профессиональный подбор слуховых аппаратов",
    description: "Запишитесь на консультацию и получите индивидуальный план восстановления слуха",
    image: "/lovable-uploads/2a7c5336-f142-4b78-b148-b27a7cef94b6.jpg",
    buttonText: "Записаться",
    buttonLink: "/services",
    bgGradient: "from-green-500/80 to-emerald-600/80"
  },
  {
    id: 3,
    title: "Принимаем электронные сертификаты",
    subtitle: "От социального фонда России",
    description: "Используйте государственные сертификаты для приобретения слуховых аппаратов",
    image: "/lovable-uploads/51d40c07-ad93-450b-845e-27b231ac5926.jpg",
    buttonText: "Узнать больше",
    buttonLink: "/services",
    bgGradient: "from-orange-500/80 to-amber-600/80"
  }
];

const RotatingBanner = () => {
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000); // Переключение каждые 4 секунды

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative w-full bg-gradient-to-br from-gray-50 to-gray-100">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {bannerSlides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[300px] md:h-[350px] overflow-hidden rounded-lg mx-4 my-6 shadow-xl">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} backdrop-blur-[1px]`} />
                
                <div className="relative h-full flex items-center justify-start px-8 md:px-12">
                  <div className="max-w-2xl text-white">
                    <h1 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">
                      {slide.title}
                    </h1>
                    <h2 className="text-lg md:text-xl mb-4 opacity-95 font-medium">
                      {slide.subtitle}
                    </h2>
                    <p className="text-sm md:text-base mb-6 opacity-90 leading-relaxed max-w-lg">
                      {slide.description}
                    </p>
                    <Button 
                      asChild 
                      size="lg" 
                      className="bg-white/95 text-gray-900 hover:bg-white hover:scale-105 transition-all duration-200 px-6 py-2 text-sm md:text-base font-semibold rounded-lg shadow-lg"
                    >
                      <Link to={slide.buttonLink}>{slide.buttonText}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-8 bg-white/90 border-white/50 text-gray-700 hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg" />
        <CarouselNext className="right-8 bg-white/90 border-white/50 text-gray-700 hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg" />
      </Carousel>
      
      {/* Индикаторы слайдов */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            className="w-2 h-2 rounded-full bg-white/60 hover:bg-white/90 transition-all duration-200 hover:scale-125"
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default RotatingBanner;
