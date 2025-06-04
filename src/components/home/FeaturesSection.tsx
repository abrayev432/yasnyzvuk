
import { Ear, Headphones, HelpingHand, Music, Shield } from "lucide-react";
import { memo } from "react";

const features = [
  {
    title: "Индивидуальный подбор",
    description: "Подбираем аппарат с учетом особенностей слуха, образа жизни и бюджета",
    icon: Ear,
  },
  {
    title: "Профессиональная настройка",
    description: "Настраиваем аппарат под индивидуальные параметры вашего слуха",
    icon: Headphones,
  },
  {
    title: "Проверка слуха",
    description: "Проводим тест слуха для точного определения потери слуха",
    icon: Music,
  },
  {
    title: "Гарантийное обслуживание",
    description: "Обеспечиваем сервисное обслуживание на весь гарантийный срок",
    icon: Shield,
  },
  {
    title: "Поддержка клиентов",
    description: "Отвечаем на вопросы и помогаем в процессе привыкания к аппарату",
    icon: HelpingHand,
  },
];

const FeatureCard = memo(({ feature }: { feature: typeof features[0] }) => {
  return (
    <div className="group bg-white border border-neutral-200 p-8 transition-all hover:shadow-lg hover:border-neutral-300">
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center bg-neutral-900 transition-colors">
        <feature.icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="mb-3 text-lg font-medium text-neutral-900">{feature.title}</h3>
      <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
    </div>
  );
});

FeatureCard.displayName = "FeatureCard";

const FeaturesSection = memo(() => {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl text-neutral-900">
            Наши преимущества
          </h2>
          <p className="mt-4 text-neutral-600 md:text-lg max-w-2xl mx-auto leading-relaxed">
            Почему клиенты выбирают магазин слуховых аппаратов "Ясный звук"
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
});

FeaturesSection.displayName = "FeaturesSection";

export default FeaturesSection;
