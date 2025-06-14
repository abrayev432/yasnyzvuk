
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { accessories } from "@/data/accessories";

const bannerSlides = [{
  id: 1,
  title: "Всегда в наличии",
  subtitle: "Батарейки для слуховых аппаратов",
  description: "Всех типоразмеров: 10, 13, 312",
  price: "от 300 ₽/блистер",
  buttonText: "К покупкам",
  buttonLink: "/accessories",
  backgroundColor: "bg-brand",
  showBatteries: true
}, {
  id: 2,
  title: "Oticon Xceed - Мощное решение",
  subtitle: "Для глубоких потерь слуха",
  description: "Революционная технология BrainHearing™ и отмеченный наградами дизайн для максимального комфорта",
  buttonText: "Подробнее",
  buttonLink: "/catalog",
  backgroundImage: "/lovable-uploads/ee579751-bf3b-403e-94cc-d0394387fd95.png",
  showProduct: true
}, {
  id: 3,
  title: "Бесплатная консультация специалиста",
  subtitle: "Профессиональный подбор слуховых аппаратов",
  description: "Запишитесь на консультацию и получите индивидуальный план восстановления слуха",
  buttonText: "Записаться",
  buttonLink: "/services",
  backgroundColor: "bg-gradient-to-r from-brand to-teal-600"
}, {
  id: 4,
  backgroundImage: "/lovable-uploads/2d4d6ee7-7413-4adf-84b0-63d03d0574bb.png"
}];

const RotatingBanner = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  const batteryAccessories = accessories.filter(acc => acc.category === "batteries" && acc.id <= 103);

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
  return <section className="relative w-full bg-white">
      <Carousel setApi={setApi} opts={{
      align: "start",
      loop: true
    }} className="w-full relative">
        <CarouselContent>
          {bannerSlides.map(slide => {
          return <CarouselItem key={slide.id}>
                <div className="relative h-[200px] md:h-[300px] overflow-hidden mx-4 md:mx-6 my-4 rounded-2xl shadow-lg">
                  
                  {/* Background */}
                  <div className={`absolute inset-0 ${slide.backgroundColor || 'bg-white'}`}>
                    {slide.backgroundImage && <img src={slide.backgroundImage} alt="" className="w-full h-full object-cover" />}
                  </div>

                  {/* Content */}
                  {(slide.title || slide.subtitle || slide.description || slide.buttonText || slide.showBatteries || slide.showProduct) && (
                    <div className="relative h-full flex items-center justify-between px-6 md:px-12 z-10">
                      <div className="max-w-xl text-white space-y-3 md:space-y-4">
                        {slide.showBatteries && <div className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium mb-2">
                            {slide.title}
                          </div>}
                        
                        <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                          {slide.showBatteries ? <>
                              <span className="text-3xl md:text-5xl">{slide.subtitle}</span>
                              <br />
                              <span className="text-lg md:text-2xl font-normal">{slide.description}</span>
                              <br />
                              <span className="text-2xl md:text-4xl font-bold">{slide.price}</span>
                            </> : <>
                              {slide.title}
                              {slide.subtitle && <>
                                  <br />
                                  <span className="text-lg md:text-xl font-normal opacity-90">{slide.subtitle}</span>
                                </>}
                            </>}
                        </h1>
                        
                        {!slide.showBatteries && slide.description && <p className="text-sm md:text-base opacity-90 leading-relaxed max-w-lg">
                            {slide.description}
                          </p>}
                        
                        {slide.buttonText && <Button asChild className="tehnika-button-green mt-4">
                            <Link to={slide.buttonLink || '#'} className="flex items-center gap-2">
                              {slide.buttonText}
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>}
                      </div>

                      {/* Product Images */}
                      {slide.showBatteries && <div className="hidden md:flex items-center space-x-[-2rem]">
                          {batteryAccessories.map((battery, index) => (
                            <div key={battery.id} className="transition-transform duration-300 hover:scale-110 hover:z-10" style={{ transform: `rotate(${index * 15 - 15}deg)` }}>
                              <img
                                src={battery.image}
                                alt={battery.name}
                                className="w-32 h-32 object-contain drop-shadow-lg"
                              />
                            </div>
                          ))}
                        </div>}

                      {slide.showProduct && <div className="hidden md:block">
                          
                        </div>}
                    </div>
                  )}

                  {/* Overlay for better text readability */}
                  {slide.backgroundImage && (slide.title || slide.subtitle || slide.description || slide.buttonText) && <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>}
                </div>
              </CarouselItem>;
        })}
        </CarouselContent>
        
        {/* Navigation */}
        <CarouselPrevious className="left-2 md:left-6 bg-white/90 border-gray-200 text-gray-700 hover:bg-white transition-all w-10 h-10 md:w-12 md:h-12 shadow-lg rounded-full" />
        <CarouselNext className="right-2 md:right-6 bg-white/90 border-gray-200 text-gray-700 hover:bg-white transition-all w-10 h-10 md:w-12 md:h-12 shadow-lg rounded-full" />
      </Carousel>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerSlides.map((_, index) => <button key={index} className={`h-2 rounded-full transition-all duration-300 ${current === index ? 'w-8 bg-brand shadow-lg' : 'w-2 bg-gray-300 hover:bg-gray-400'}`} onClick={() => api?.scrollTo(index)} aria-label={`Перейти к слайду ${index + 1}`} />)}
      </div>
    </section>;
};
export default RotatingBanner;
