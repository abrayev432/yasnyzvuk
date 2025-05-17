
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const services = [
    {
      title: "Диагностика слуха",
      description: "Комплексное обследование слуха с использованием современного оборудования",
      details: [
        "Аудиометрия",
        "Тимпанометрия",
        "Отоакустическая эмиссия",
        "Консультация сурдолога"
      ],
      image: "https://images.unsplash.com/photo-1516549655669-d2207ea40c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      title: "Подбор слуховых аппаратов",
      description: "Индивидуальный подбор слуховых аппаратов с учетом степени потери слуха и образа жизни",
      details: [
        "Консультация специалиста",
        "Демонстрация моделей",
        "Тестовое использование",
        "Компьютерная настройка"
      ],
      image: "https://images.unsplash.com/photo-1595859703065-2259982784bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      title: "Настройка и адаптация",
      description: "Профессиональная настройка слуховых аппаратов и помощь в адаптации к их использованию",
      details: [
        "Первичная настройка",
        "Период адаптации",
        "Коррекция настроек",
        "Обучение использованию"
      ],
      image: "https://images.unsplash.com/photo-1610645156106-98e3c7ce5fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      title: "Сервисное обслуживание",
      description: "Комплекс услуг по уходу и обслуживанию слуховых аппаратов для продления срока их службы",
      details: [
        "Чистка аппаратов",
        "Замена деталей",
        "Ремонт и диагностика",
        "Регулярные проверки"
      ],
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      title: "Изготовление индивидуальных вкладышей",
      description: "Создание индивидуальных ушных вкладышей для максимального комфорта и качества звука",
      details: [
        "Снятие слепка",
        "Изготовление вкладыша",
        "Примерка и коррекция",
        "Гарантийное обслуживание"
      ],
      image: "https://images.unsplash.com/photo-1598142982901-df6bb1c1d969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      title: "Реабилитация слуха",
      description: "Программы реабилитации для людей с нарушениями слуха и после кохлеарной имплантации",
      details: [
        "Индивидуальные занятия",
        "Групповые тренинги",
        "Работа с логопедом",
        "Психологическая поддержка"
      ],
      image: "https://images.unsplash.com/photo-1615626381576-c6f02e964925?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    }
  ];

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
              Наши услуги
            </h1>
            <p className="text-xl text-muted-foreground">
              Мы предлагаем полный спектр услуг по диагностике слуха, подбору и обслуживанию слуховых аппаратов
            </p>
          </motion.div>

          <div className="grid gap-10 md:gap-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-brand flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="rounded-full">
                    <Link to="/contacts">Записаться на прием</Link>
                  </Button>
                </div>
                <div className={`rounded-xl overflow-hidden shadow-lg ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover aspect-video"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-20 bg-brand/5 rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Нужна консультация?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Запишитесь на бесплатную консультацию к нашим специалистам. Мы подберем оптимальное решение именно для вас.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="px-8 rounded-full">
                <Link to="/contacts">Связаться с нами</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 rounded-full">
                <a href="tel:+74957990926">Позвонить: +7 (495) 799-09-26</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
