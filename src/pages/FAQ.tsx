
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqData = [
    {
      question: "Как подобрать слуховой аппарат?",
      answer: "Подбор слухового аппарата должен осуществляться только после консультации с врачом-сурдологом и проведения аудиометрии. Наши специалисты помогут подобрать устройство в соответствии с вашей степенью потери слуха, образом жизни и финансовыми возможностями."
    },
    {
      question: "Сколько стоит слуховой аппарат?",
      answer: "Стоимость слуховых аппаратов варьируется от 40 000 до 150 000 рублей в зависимости от модели, функциональности и производителя. У нас представлены аппараты разных ценовых категорий от ведущих мировых брендов."
    },
    {
      question: "Какая гарантия на слуховые аппараты?",
      answer: "Все слуховые аппараты имеют официальную гарантию производителя 12 месяцев. В течение гарантийного периода обеспечивается бесплатный ремонт и обслуживание устройства."
    },
    {
      question: "Нужно ли настраивать слуховой аппарат?",
      answer: "Да, все современные слуховые аппараты требуют индивидуальной настройки под конкретного пользователя. Настройка производится на специальном оборудовании с учетом результатов аудиометрии и индивидуальных особенностей."
    },
    {
      question: "Как долго служит слуховой аппарат?",
      answer: "При правильном использовании и регулярном обслуживании слуховой аппарат может служить 5-7 лет. Срок службы зависит от модели, условий эксплуатации и ухода за устройством."
    },
    {
      question: "Можно ли носить слуховой аппарат постоянно?",
      answer: "Да, современные слуховые аппараты предназначены для постоянного ношения в течение дня. Рекомендуется снимать устройство только на ночь и во время водных процедур (если модель не водонепроницаемая)."
    },
    {
      question: "Какие батарейки нужны для слухового аппарата?",
      answer: "Тип батарейки зависит от модели слухового аппарата. Наиболее распространены размеры 10, 312, 13 и 675. Современные модели также могут иметь встроенные перезаряжаемые аккумуляторы."
    },
    {
      question: "Как ухаживать за слуховым аппаратом?",
      answer: "Ежедневно очищайте устройство мягкой сухой тканью, удаляйте серу специальной щеточкой, храните в сухом месте. Регулярно меняйте батарейки и посещайте специалиста для профессиональной чистки."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <Layout>
      <SEOHead
        title="Часто задаваемые вопросы о слуховых аппаратах"
        description="Ответы на популярные вопросы о слуховых аппаратах: подбор, настройка, уход, гарантия. Консультации специалистов магазина Ясный звук."
        keywords="слуховые аппараты FAQ, вопросы о слуховых аппаратах, как выбрать слуховой аппарат, настройка слухового аппарата"
        structuredData={structuredData}
        url="https://yasniy-zvuk.ru/faq"
      />
      
      <div className="bg-gray-50 py-12">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
              Часто задаваемые вопросы
            </h1>
            <p className="text-muted-foreground max-w-3xl">
              Найдите ответы на популярные вопросы о слуховых аппаратах, их подборе, 
              настройке и использовании. Если у вас остались вопросы, свяжитесь с нашими специалистами.
            </p>
          </div>

          <div className="max-w-4xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-lg shadow-sm border"
                >
                  <AccordionTrigger className="px-6 py-4 text-left">
                    <h3 className="font-medium">{item.question}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Не нашли ответ на свой вопрос?</h2>
            <p className="text-muted-foreground mb-4">
              Наши специалисты с радостью ответят на все ваши вопросы и помогут подобрать 
              подходящий слуховой аппарат.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+74957990926" 
                className="inline-flex items-center justify-center px-6 py-2 bg-brand text-white rounded-lg hover:bg-brand/90 transition-colors"
              >
                Позвонить: +7 (495) 799-09-26
              </a>
              <a 
                href="/contacts" 
                className="inline-flex items-center justify-center px-6 py-2 border border-brand text-brand rounded-lg hover:bg-brand/5 transition-colors"
              >
                Записаться на консультацию
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
