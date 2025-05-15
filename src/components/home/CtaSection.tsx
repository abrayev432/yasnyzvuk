
import { Button } from "@/components/ui/button";
import { HelpingHand, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="bg-brand text-white py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm backdrop-blur">
              <HelpingHand className="mr-1 h-3.5 w-3.5" />
              <span>Мы всегда готовы помочь</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Не откладывайте решение проблем со слухом
            </h2>
            <p className="text-white/80 md:text-lg">
              Запишитесь на бесплатную консультацию с нашим специалистом, чтобы узнать о современных
              возможностях коррекции слуха
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="outline" className="bg-white text-brand border-white hover:bg-white/90 hover:text-brand">
                <Link to="/contacts" className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Связаться с нами
                </Link>
              </Button>
              <Button asChild variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Link to="/services">Узнать больше об услугах</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center order-first md:order-last">
            <div className="relative h-[300px] w-full max-w-[400px] overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1573497019415-610e28ec0d3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Консультация специалиста"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-brand/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/90 p-4 backdrop-blur">
                <p className="font-medium text-brand">Бесплатная консультация</p>
                <p className="text-sm text-foreground">Проверка слуха и помощь в выборе аппарата</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
