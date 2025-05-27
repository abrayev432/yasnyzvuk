
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
    bgGradient: "from-blue-600/90 to-purple-600/90"
  },
  {
    id: 2,
    title: "Бесплатная консультация специалиста",
    subtitle: "Профессиональный подбор слуховых аппаратов",
    description: "Запишитесь на консультацию и получите индивидуальный план восстановления слуха",
    image: "/lovable-uploads/2a7c5336-f142-4b78-b148-b27a7cef94b6.jpg",
    buttonText: "Записаться",
    buttonLink: "/services",
    bgGradient: "from-green-600/90 to-teal-600/90"
  },
  {
    id: 3,
    title: "Принимаем электронные сертификаты",
    subtitle: "От социального фонда России",
    description: "Используйте государственные сертификаты для приобретения слуховых аппаратов",
    image: "/lovable-uploads/51d40c07-ad93-450b-845e-27b231ac5926.jpg",
    buttonText: "Узнать больше",
    buttonLink: "/services",
    bgGradient: "from-orange-600/90 to-red-600/90"
  }
];

const RotatingBanner = () => {
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Переключение каждые 5 секунд

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative w-full">
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
              <div className="relative h-[500px] md:h-[600px] overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`} />
                
                <div className="relative h-full flex items-center justify-center">
                  <div className="container px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center text-white">
                      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                        {slide.title}
                      </h1>
                      <h2 className="text-xl md:text-2xl mb-6 opacity-90 animate-fade-in">
                        {slide.subtitle}
                      </h2>
                      <p className="text-lg md:text-xl mb-8 opacity-80 max-w-2xl mx-auto animate-fade-in">
                        {slide.description}
                      </p>
                      <Button 
                        asChild 
                        size="lg" 
                        className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg rounded-full shadow-lg animate-fade-in"
                      >
                        <Link to={slide.buttonLink}>{slide.buttonText}</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
        <CarouselNext className="right-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
      </Carousel>
      
      {/* Индикаторы слайдов */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            className="w-3 h-3 rounded-full bg-white/50 hover:bg-white/80 transition-colors"
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default RotatingBanner;
