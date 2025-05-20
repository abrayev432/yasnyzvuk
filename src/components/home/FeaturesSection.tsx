
import { Ear, Headphones, HelpingHand, Music, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

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

const FeaturesSection = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            Наши преимущества
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Почему клиенты выбирают магазин слуховых аппаратов "Ясный звук"
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className={cn(
                "group rounded-2xl border bg-white p-8 transition-all hover:shadow-xl",
                i === 0 && "md:col-span-2 lg:col-span-1"
              )}
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 group-hover:bg-brand/20 transition-colors">
                <feature.icon className="h-7 w-7 text-brand" />
              </div>
              <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
