
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
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
              О компании "Ясный звук"
            </h1>
            <p className="text-xl text-muted-foreground">
              Мы помогаем людям слышать мир во всех его красках
            </p>
          </motion.div>

          <div className="grid gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-4">Наша миссия</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Наша миссия заключается в том, чтобы помочь людям с нарушениями слуха вернуться к полноценной жизни, 
                  предоставляя им современные слуховые аппараты и профессиональную поддержку.
                </p>
                <p className="text-lg text-muted-foreground">
                  Мы стремимся сделать высококачественные слуховые аппараты доступными для всех и создать комфортные 
                  условия для каждого клиента, обеспечивая индивидуальный подход и заботу.
                </p>
              </div>
              <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Команда Ясный звук помогает клиенту" 
                  className="w-full h-full object-cover aspect-video"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1551097295-4c28e380cdf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Современные слуховые аппараты" 
                  className="w-full h-full object-cover aspect-video"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Наша история</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Компания "Ясный звук" начала свой путь более 15 лет назад. За это время мы стали одним из ведущих 
                  поставщиков слуховых аппаратов и сопутствующих услуг в Москве и Московской области.
                </p>
                <p className="text-lg text-muted-foreground">
                  Наши специалисты постоянно совершенствуют свои навыки, проходят обучение у ведущих производителей 
                  слуховых аппаратов и следят за новейшими технологиями в области коррекции слуха.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-center">Почему нас выбирают</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Опытные специалисты",
                    description: "Наши сурдологи имеют многолетний опыт работы и регулярно повышают квалификацию"
                  },
                  {
                    title: "Широкий ассортимент",
                    description: "Мы предлагаем слуховые аппараты от ведущих мировых производителей для любого бюджета"
                  },
                  {
                    title: "Индивидуальный подход",
                    description: "Для каждого клиента мы подбираем оптимальное решение с учетом особенностей его слуха"
                  },
                  {
                    title: "Сервис и поддержка",
                    description: "Мы обеспечиваем послепродажное обслуживание, настройку и постоянную поддержку"
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] border border-gray-100"
                  >
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Готовы узнать больше?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Посетите наш салон для бесплатной консультации или свяжитесь с нами любым удобным для вас способом.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="px-8 rounded-full">
                  <Link to="/services">Наши услуги</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-8 rounded-full">
                  <Link to="/contacts">Связаться с нами</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
