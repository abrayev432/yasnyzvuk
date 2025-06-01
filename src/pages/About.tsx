import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Award, Clock, Heart, Shield, Star, Phone } from "lucide-react";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Наша миссия",
      description: "Предоставить качественные слуховые решения, улучшающие жизнь наших клиентов.",
      icon: Heart,
    },
    {
      title: "Наша команда",
      description: "Команда профессионалов с многолетним опытом в области аудиологии и слухопротезирования.",
      icon: Users,
    },
    {
      title: "Наши ценности",
      description: "Индивидуальный подход, качество продукции и высокий уровень сервиса.",
      icon: Star,
    },
    {
      title: "Наши достижения",
      description: "Многочисленные положительные отзывы и доверие наших клиентов.",
      icon: Award,
    },
    {
      title: "Гарантия качества",
      description: "Мы предлагаем только сертифицированные слуховые аппараты с гарантией от производителя.",
      icon: Shield,
    },
    {
      title: "Поддержка клиентов",
      description: "Мы всегда готовы помочь вам с выбором и настройкой слухового аппарата.",
      icon: Phone,
    },
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
              О нас
            </h1>
            <p className="text-xl text-muted-foreground">
              Мы - команда профессионалов, стремящихся улучшить качество жизни
              людей с нарушениями слуха.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white shadow-md rounded-lg overflow-hidden">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-base font-semibold">
                      {feature.title}
                    </CardTitle>
                    {feature.icon && (
                      <feature.icon className="h-6 w-6 text-brand" />
                    )}
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-20 bg-brand/5 rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Готовы улучшить свой слух?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами сегодня, чтобы узнать больше о наших услугах и
              продуктах.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="px-8 rounded-full">
                <Link to="/contacts">Связаться с нами</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 rounded-full"
              >
                <a href="tel:+74957990926">Позвонить: +7 (495) 799-09-26</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
