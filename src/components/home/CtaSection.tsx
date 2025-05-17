
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HelpingHand, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import CallRequestForm from "@/components/CallRequestForm";

const CtaSection = () => {
  const [isCallFormOpen, setIsCallFormOpen] = useState(false);

  return (
    <>
      <section className="bg-gradient-to-r from-brand to-brand-dark text-white py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm backdrop-blur">
                <HelpingHand className="mr-1 h-3.5 w-3.5" />
                <span>Мы всегда готовы помочь</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                Не откладывайте решение проблем со слухом
              </h2>
              <p className="text-white/80 md:text-lg">
                Запишитесь на бесплатную консультацию с нашим специалистом, чтобы узнать о современных
                возможностях коррекции слуха
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button 
                  variant="outline" 
                  className="bg-white text-brand border-white hover:bg-white/90 hover:text-brand rounded-full shadow-lg shadow-brand-dark/20"
                  onClick={() => setIsCallFormOpen(true)}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Связаться с нами
                </Button>
                <Button asChild variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20 rounded-full">
                  <Link to="/services">Узнать больше об услугах</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center order-first md:order-last">
              <div className="relative h-[350px] w-full max-w-[450px] overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/src/assets/images/hearing-specialist.jpg"
                  alt="Консультация специалиста"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-brand-dark/60" />
                <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/95 p-4 backdrop-blur shadow-lg">
                  <p className="font-medium text-brand">Бесплатная консультация</p>
                  <p className="text-sm text-foreground">Проверка слуха и помощь в выборе аппарата</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallRequestForm 
        open={isCallFormOpen} 
        onOpenChange={setIsCallFormOpen}
      />
    </>
  );
};

export default CtaSection;
