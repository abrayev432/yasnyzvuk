import { Truck, CreditCard, Package, ShoppingCart, Phone } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Delivery = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container px-4 md:px-6">
          <div className="mb-10">
            <h1 className="text-3xl font-bold tracking-tighter md:text-5xl mb-2">
              Доставка и оплата
            </h1>
            <p className="text-muted-foreground max-w-3xl">
              Информация о способах доставки и оплаты слуховых аппаратов и сопутствующих товаров
            </p>
          </div>

          <Tabs defaultValue="delivery" className="mb-12">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="delivery" className="text-lg py-3">
                <Truck className="mr-2 h-5 w-5" /> Доставка
              </TabsTrigger>
              <TabsTrigger value="payment" className="text-lg py-3">
                <CreditCard className="mr-2 h-5 w-5" /> Оплата
              </TabsTrigger>
            </TabsList>

            <TabsContent value="delivery" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-brand/10 p-3 rounded-full mr-4">
                      <Package className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="text-xl font-medium">Самовывоз</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Вы можете забрать свой заказ в нашем центре слухопротезирования.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Адрес:</span>
                      <span>ул. Люблинская д. 100 кор. 2, Москва</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Время работы:</span>
                      <span>Пн-Сб: 10:00-19:00, Вс: выходной</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Стоимость:</span>
                      <span className="text-green-600 font-medium">Бесплатно</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-brand/10 p-3 rounded-full mr-4">
                      <Truck className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="text-xl font-medium">Курьер по Москве</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Доставка курьером по Москве в пределах МКАД.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Сроки:</span>
                      <span>1-2 рабочих дня</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Стоимость:</span>
                      <span>300 ₽</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Бесплатно:</span>
                      <span>При заказе от 10 000 ₽</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-brand/10 p-3 rounded-full mr-4">
                      <Package className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="text-xl font-medium">Почта России</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Доставка в любой регион России.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Сроки:</span>
                      <span>5-14 рабочих дней</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Стоимость:</span>
                      <span>от 350 ₽ (зависит от региона)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Отслеживание:</span>
                      <span>Трек-номер предоставляется</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-medium mb-4">Часто задаваемые вопросы</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Как долго ждать доставку?</AccordionTrigger>
                    <AccordionContent>
                      Срок доставки зависит от выбранного способа и вашего местонахождения. В Москве доставка занимает 1-2 рабочих дня, в регионы - от 5 до 14 дней.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Можно ли изменить адрес доставки после оформления заказа?</AccordionTrigger>
                    <AccordionContent>
                      Да, вы можете изменить адрес доставки, связавшись с нами по телефону +7 (495) 799-09-26 не позднее, чем за 24 часа до планируемой даты доставки.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Как отслеживать статус доставки?</AccordionTrigger>
                    <AccordionContent>
                      После отправки заказа вы получите трек-номер по SMS или email, по которому можно отслеживать статус доставки на сайте выбранной транспортной компании.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="payment" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-brand/10 p-3 rounded-full mr-4">
                      <CreditCard className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="text-xl font-medium">Банковской картой</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Оплата банковской картой на сайте или при получении.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Онлайн:</span>
                      <span>Visa, MasterCard, МИР</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">При получении:</span>
                      <span>Платежный терминал у курьера</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Комиссия:</span>
                      <span className="text-green-600 font-medium">Нет</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-brand/10 p-3 rounded-full mr-4">
                      <ShoppingCart className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="text-xl font-medium">Наличными</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Оплата наличными при получении заказа.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Самовывоз:</span>
                      <span>В кассу центра</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Курьеру:</span>
                      <span>При доставке</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Комиссия:</span>
                      <span className="text-green-600 font-medium">Нет</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-medium mb-4">Часто задаваемые вопросы</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Безопасна ли оплата на сайте?</AccordionTrigger>
                    <AccordionContent>
                      Да, все платежи на нашем сайте защищены протоколом SSL и соответствуют стандартам безопасности платежных систем. Мы не храним данные вашей карты.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Возможна ли оплата по безналичному расчету?</AccordionTrigger>
                    <AccordionContent>
                      Да, для юридических лиц доступна оплата по безналичному расчету. Для этого свяжитесь с нами по телефону +7 (495) 799-09-26, и мы выставим счет.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Как оформить рассрочку?</AccordionTrigger>
                    <AccordionContent>
                      Для оформления рассрочки выберите соответствующий способ оплаты при оформлении заказа. Наш менеджер свяжется с вами для уточнения деталей и поможет с оформлением всех необходимых документов.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 py-6 px-8 bg-brand/5 border border-brand/10 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Нужна помощь с оформлением заказа?</h3>
            <p className="mb-4">Наши специалисты помогут вам выбрать слуховой аппарат, оформить заказ и ответят на все вопросы.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+74957990926" className="flex items-center gap-2 text-brand font-medium">
                <Phone className="h-4 w-4" />
                +7 (495) 799-09-26
              </a>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <span className="text-muted-foreground">Пн-Пт: 9:00-19:00, Сб: 10:00-16:00</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Delivery;
