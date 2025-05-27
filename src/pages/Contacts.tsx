import Layout from "@/components/layout/Layout";
import ContactSection from "@/components/home/ContactSection";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useEffect } from "react";

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 py-16 md:py-24 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">
              Наши контакты
            </h1>
            <p className="text-xl text-muted-foreground">
              Мы всегда рады помочь вам выбрать правильный слуховой аппарат и ответить на все ваши вопросы.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-md"
            >
              <h2 className="text-2xl font-bold mb-6">Как нас найти</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                    <MapPin className="h-6 w-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Наш адрес</h3>
                    <address className="not-italic text-muted-foreground mt-1">
                      ул. Люблинская д. 100 кор. 2<br />
                      Москва, Россия
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                    <Phone className="h-6 w-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Телефон</h3>
                    <p className="text-muted-foreground mt-1">
                      <a href="tel:+74957990926" className="hover:text-brand transition-colors">
                        +7 (495) 799-09-26
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                    <Mail className="h-6 w-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-muted-foreground mt-1">
                      <a href="mailto:info@yasnyzvuk.ru" className="hover:text-brand transition-colors">
                        info@yasnyzvuk.ru
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                    <Clock className="h-6 w-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Часы работы</h3>
                    <div className="space-y-1 text-muted-foreground mt-1">
                      <p>Пн-Сб: 10:00 - 19:00</p>
                      <p>Вс: выходной</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl overflow-hidden shadow-md h-[400px] md:h-auto"
            >
              <iframe 
                src="https://yandex.ru/map-widget/v1/?text=Ясный%20звук%20слуховые%20аппараты%20ул.%20Люблинская%20д.%20100%20кор.%202%20Москва&sll=37.708122,55.676655&sspn=0.008468,0.004344&z=16&l=map&pt=37.708122,55.676655,pm2rdm"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                title="Карта - Ясный звук слуховые аппараты, ул. Люблинская д. 100 кор. 2"
              ></iframe>
            </motion.div>
          </div>
        </div>
        
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Contacts;
