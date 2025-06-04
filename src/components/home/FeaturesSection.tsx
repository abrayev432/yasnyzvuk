
import { Ear, Headphones, HelpingHand, Music, Shield, Star } from "lucide-react";
import { memo } from "react";

const features = [
  {
    title: "Индивидуальный подбор",
    description: "Подбираем аппарат с учетом особенностей слуха, образа жизни и бюджета",
    icon: Ear,
    gradient: "bg-classic-gradient",
    color: "text-classic-navy"
  },
  {
    title: "Профессиональная настройка",
    description: "Настраиваем аппарат под индивидуальные параметры вашего слуха",
    icon: Headphones,
    gradient: "bg-gold-gradient",
    color: "text-classic-gold"
  },
  {
    title: "Проверка слуха",
    description: "Проводим тест слуха для точного определения потери слуха",
    icon: Music,
    gradient: "bg-burgundy-gradient",
    color: "text-classic-burgundy"
  },
  {
    title: "Гарантийное обслуживание",
    description: "Обеспечиваем сервисное обслуживание на весь гарантийный срок",
    icon: Shield,
    gradient: "bg-forest-gradient",
    color: "text-classic-forest"
  },
  {
    title: "Поддержка клиентов",
    description: "Отвечаем на вопросы и помогаем в процессе привыкания к аппарату",
    icon: HelpingHand,
    gradient: "bg-classic-gradient",
    color: "text-classic-navy"
  },
];

const FeatureCard = memo(({ feature }: { feature: typeof features[0] }) => {
  return (
    <div className="group classic-card elegant-hover p-8 relative overflow-hidden">
      {/* Элегантный фон при ховере */}
      <div className={`absolute inset-0 ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
      
      <div className="relative z-10">
        <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center ${feature.gradient} rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl`}>
          <feature.icon className="h-8 w-8 text-white" />
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-xl font-bold text-classic-charcoal font-serif">{feature.title}</h3>
          <Star className={`h-4 w-4 ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        </div>
        
        <p className="text-gray-600 leading-relaxed text-base">{feature.description}</p>
        
        {/* Элегантная линия */}
        <div className={`mt-6 h-1 w-0 ${feature.gradient} rounded-full group-hover:w-full transition-all duration-500`}></div>
      </div>
    </div>
  );
});

FeatureCard.displayName = "FeatureCard";

const FeaturesSection = memo(() => {
  return (
    <section className="bg-gradient-to-br from-white via-classic-cream to-classic-ivory py-24 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-classic-gold/10 rounded-full"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-classic-navy/10 rounded-full"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center bg-classic-navy text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Star className="mr-2 h-4 w-4" />
            <span>Почему выбирают нас</span>
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6 font-serif">
            <span className="text-classic-navy">Наши преимущества</span>
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Почему клиенты выбирают магазин слуховых аппаратов 
            <span className="font-bold text-classic-navy"> "Ясный звук"</span> - 
            ваш путь к качественному слуху!
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div key={i} className="animate-fade-in" style={{animationDelay: `${i * 0.1}s`}}>
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

FeaturesSection.displayName = "FeaturesSection";

export default FeaturesSection;
