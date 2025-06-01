import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Truck, CreditCard, Clock, MapPin, Shield, CheckCircle, Banknote, Smartphone } from "lucide-react";
import { useEffect } from "react";

const Delivery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const deliveryMethods = [{
    title: "Курьерская доставка",
    description: "Доставка курьером до двери в удобное для вас время",
    details: ["Быстрая доставка", "Возможность выбора времени", "Отслеживание заказа"],
    icon: Truck
  }, {
    title: "Оплата онлайн",
    description: "Безопасная оплата банковской картой или электронным кошельком",
    details: ["Visa, MasterCard, МИР", "Яндекс.Деньги, WebMoney", "Защита данных"],
    icon: CreditCard
  }, {
    title: "Самовывоз из магазина",
    description: "Заберите заказ самостоятельно в одном из наших магазинов",
    details: ["Бесплатно", "Удобное расположение", "Проверка товара на месте"],
    icon: MapPin
  }, {
    title: "Гарантия возврата",
    description: "Верните товар в течение 14 дней, если он вам не подошел",
    details: ["Без лишних вопросов", "Полный возврат средств", "Сохранение чека"],
    icon: Shield
  }];
  const paymentMethods = [{
    title: "Наличными курьеру",
    description: "Оплата наличными при получении заказа от курьера",
    details: ["Просто и удобно", "Без комиссии", "Только для Москвы и МО"],
    icon: Banknote
  }, {
    title: "Банковской картой онлайн",
    description: "Оплата банковской картой на сайте через безопасный платежный шлюз",
    details: ["Visa, MasterCard, МИР", "Быстро и безопасно", "Подтверждение по SMS"],
    icon: CreditCard
  }, {
    title: "Через мобильное приложение",
    description: "Оплата через мобильное приложение вашего банка",
    details: ["QR-код для оплаты", "Подтверждение в приложении", "Совместимость с банками"],
    icon: Smartphone
  }];
  return <Layout>
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 py-16 md:py-24 md:px-6">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">
              Доставка и оплата
            </h1>
            <p className="text-xl text-muted-foreground">
              Мы предлагаем различные способы доставки и оплаты, чтобы сделать вашу покупку максимально удобной
            </p>
          </motion.div>

          <section className="mb-16">
            <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Способы доставки</h2>
              <p className="text-lg text-muted-foreground">
                Выберите наиболее удобный для вас способ доставки
              </p>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {deliveryMethods.map((method, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 30
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.1
              }} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                      <method.icon className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="text-xl font-semibold">{method.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <ul className="list-none pl-0">
                    {method.details.map((detail, i) => <li key={i} className="flex items-center text-muted-foreground mb-2">
                        <CheckCircle className="h-4 w-4 mr-2 text-brand" />
                        {detail}
                      </li>)}
                  </ul>
                </motion.div>)}
            </div>
          </section>

          <section className="mb-16">
            <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.5
            }} className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Способы оплаты</h2>
              <p className="text-lg text-muted-foreground">
                Выберите наиболее удобный для вас способ оплаты
              </p>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {paymentMethods.map((method, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 30
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.6 + index * 0.1
              }} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                      <method.icon className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="text-xl font-semibold">{method.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <ul className="list-none pl-0">
                    {method.details.map((detail, i) => <li key={i} className="flex items-center text-muted-foreground mb-2">
                        <CheckCircle className="h-4 w-4 mr-2 text-brand" />
                        {detail}
                      </li>)}
                  </ul>
                </motion.div>)}
            </div>
          </section>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.8
        }} className="bg-brand/5 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Остались вопросы?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами, и мы поможем вам разобраться с любыми вопросами по доставке и оплате
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
    </Layout>;
};

export default Delivery;
