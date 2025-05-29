
import { Button } from "@/components/ui/button";
import { Volume } from "lucide-react";
import { Link } from "react-router-dom";
import { memo, useState } from "react";

const HeroSection = memo(() => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="bg-gradient-to-br from-brand/5 to-brand/20 py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center rounded-full border border-brand/30 bg-white/80 px-3 py-1 text-sm shadow-sm backdrop-blur-sm">
              <Volume className="mr-1 h-3.5 w-3.5 text-brand" />
              <span className="text-foreground/90">Профессиональный подбор слуховых аппаратов</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Верните радость <span className="text-brand relative">ясного звука
                <span className="absolute bottom-1 left-0 w-full h-2 bg-brand/20 -z-10 rounded-full"></span>
              </span> в вашу жизнь
            </h1>
            <p className="max-w-[600px] text-gray-600 md:text-xl">
              Современные слуховые аппараты от ведущих производителей с профессиональной консультацией и индивидуальным подбором
            </p>
            <div className="flex flex-col gap-3 md:flex-row">
              <Button asChild size="lg" className="rounded-full shadow-lg shadow-brand/20">
                <Link to="/catalog">Перейти в каталог</Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full border-brand/30 hover:bg-brand/5">
                <Link to="/services">Наши услуги</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full max-w-[500px] rounded-2xl bg-white p-4 shadow-lg shadow-gray-200/50 overflow-hidden">
              {!imageLoaded && (
                <div className="h-full w-full rounded-xl bg-gray-200 animate-pulse flex items-center justify-center">
                  <Volume className="h-12 w-12 text-gray-400" />
                </div>
              )}
              <img 
                alt="Современный слуховой аппарат" 
                className={`h-full w-full rounded-xl object-cover transition-all duration-700 ${
                  imageLoaded ? 'opacity-100 hover:scale-105' : 'opacity-0'
                }`}
                src="/lovable-uploads/d9416cbc-5ba5-460d-9eb1-d80d296aec7f.jpg"
                loading="eager"
                onLoad={() => setImageLoaded(true)}
              />
              {imageLoaded && (
                <div className="absolute bottom-8 left-8 right-8 rounded-xl bg-white/90 p-4 backdrop-blur shadow-lg">
                  <p className="font-medium text-brand">Новое поступление</p>
                  <h3 className="text-lg font-bold">Современные цифровые слуховые аппараты</h3>
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
