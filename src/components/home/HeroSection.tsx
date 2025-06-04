
import { Button } from "@/components/ui/button";
import { Volume } from "lucide-react";
import { Link } from "react-router-dom";
import { memo, useState } from "react";

const HeroSection = memo(() => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm">
              <Volume className="mr-2 h-4 w-4 text-neutral-600" />
              <span className="text-neutral-700">Профессиональный подбор слуховых аппаратов</span>
            </div>
            <h1 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-neutral-900">
              Верните радость 
              <span className="block text-neutral-700">ясного звука</span>
              в вашу жизнь
            </h1>
            <p className="max-w-[500px] text-neutral-600 md:text-lg leading-relaxed">
              Современные слуховые аппараты от ведущих производителей с профессиональной консультацией и индивидуальным подбором
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">
                <Link to="/catalog">Перейти в каталог</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-neutral-300 text-neutral-700 hover:bg-neutral-50">
                <Link to="/services">Наши услуги</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full max-w-[450px] bg-neutral-50 border border-neutral-200 p-4 overflow-hidden">
              {!imageLoaded && (
                <div className="h-full w-full bg-neutral-100 animate-pulse flex items-center justify-center">
                  <Volume className="h-12 w-12 text-neutral-400" />
                </div>
              )}
              <img 
                alt="Современный слуховой аппарат" 
                className={`h-full w-full object-cover transition-all duration-700 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                src="/lovable-uploads/d9416cbc-5ba5-460d-9eb1-d80d296aec7f.jpg"
                loading="eager"
                onLoad={() => setImageLoaded(true)}
              />
              {imageLoaded && (
                <div className="absolute bottom-4 left-4 right-4 bg-white border border-neutral-200 p-4">
                  <p className="text-sm font-medium text-neutral-900">Новое поступление</p>
                  <h3 className="text-base font-medium text-neutral-700">Современные цифровые слуховые аппараты</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
