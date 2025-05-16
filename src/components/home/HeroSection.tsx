
import { Button } from "@/components/ui/button";
import { Volume } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-gradient py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm">
              <Volume className="mr-1 h-3.5 w-3.5 text-brand" />
              <span>Профессиональный подбор слуховых аппаратов</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Верните радость <span className="text-brand">ясного звука</span> в вашу жизнь
            </h1>
            <p className="max-w-[600px] text-gray-600 md:text-xl">
              Современные слуховые аппараты от ведущих производителей с профессиональной консультацией и индивидуальным подбором
            </p>
            <div className="flex flex-col gap-3 md:flex-row">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/catalog">Перейти в каталог</Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full">
                <Link to="/services">Наши услуги</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full max-w-[500px] rounded-2xl bg-white p-4 shadow-lg">
              <img
                src="/assets/images/modern-hearing-aid.jpg"
                alt="Современный слуховой аппарат"
                className="h-full w-full rounded-xl object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 rounded-xl bg-white/90 p-4 backdrop-blur">
                <p className="font-medium text-brand">Новое поступление</p>
                <h3 className="text-lg font-bold">Современные цифровые слуховые аппараты</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
