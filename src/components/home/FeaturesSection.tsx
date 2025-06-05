
import { Ear, Headphones, HelpingHand, Music, Shield, Star, Zap } from "lucide-react";
import { memo } from "react";

const features = [
  {
    title: "Индивидуальный подбор",
    description: "Подбираем аппарат с учетом особенностей слуха, образа жизни и бюджета",
    icon: Ear,
    gradient: "bg-modern-gradient",
    color: "text-brand"
  },
  {
    title: "Профессиональная настройка",
    description: "Настраиваем аппарат под индивидуальные параметры вашего слуха",
    icon: Headphones,
    gradient: "bg-blue-modern",
    color: "text-modern-blue"
  },
  {
    title: "Проверка слуха",
    description: "Проводим тест слуха для точного определения потери слуха",
    icon: Music,
    gradient: "bg-purple-modern",
    color: "text-modern-purple"
  },
  {
    title: "Гарантийное обслуживание",
    description: "Обеспечиваем сервисное обслуживание на весь гарантийный срок",
    icon: Shield,
    gradient: "bg-emerald-modern",
    color: "text-modern-emerald"
  },
  {
    title: "Поддержка клиентов",
    description: "Отвечаем на вопросы и помогаем в процессе привыкания к аппарату",
    icon: HelpingHand,
    gradient: "bg-modern-gradient",
    color: "text-brand"
  },
];

const FeatureCard = memo(({ feature }: { feature: typeof features[0] }) => {
  return (
    <div className="group modern-card modern-hover p-8 relative overflow-hidden">
      {/* Современный фон при ховере */}
      <div className={`absolute inset-0 ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
      
      <div className="relative z-10">
        <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center ${feature.gradient} rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-110`}>
          <feature.icon className="h-8 w-8 text-white" />
        </div>
        
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-xl font-bold text-slate-800 font-display">{feature.title}</h3>
          <Zap className={`h-5 w-5 ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        </div>
        
        <p className="text-slate-600 leading-relaxed text-base mb-6">{feature.description}</p>
        
        {/* Современная анимированная линия */}
        <div className={`h-1 w-0 ${feature.gradient} rounded-full group-hover:w-full transition-all duration-500`}></div>
      </div>
    </div>
  );
});

FeatureCard.displayName = "FeatureCard";

const FeaturesSection = memo(() => {
  return (
    <section className="bg-gradient-to-br from-white via-slate-50 to-blue-50 py-24 relative overflow-hidden">
      {/* Современные декоративные элементы */}
      <div className="absolute top-20 right-10 w-48 h-48 bg-gradient-to-br from-modern-orange/20 to-modern-rose/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-brand/20 to-modern-purple/20 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center bg-gradient-to-r from-brand to-modern-purple text-white px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
            <Star className="mr-2 h-4 w-4" />
            <span>Почему выбирают нас</span>
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6 font-display">
            <span className="gradient-text">Наши преимущества</span>
          </h2>
          
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Почему клиенты выбирают магазин слуховых аппаратов 
            <span className="font-bold text-brand"> "Ясный звук"</span> - 
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
