import { Ear, Headphones, HelpingHand, Music, Shield, Star, Zap } from "lucide-react";
import { memo } from "react";
const features = [{
  title: "Индивидуальный подбор",
  description: "Подбираем аппарат с учетом особенностей слуха, образа жизни и бюджета",
  icon: Ear,
  gradient: "bg-modern-gradient",
  color: "text-brand"
}, {
  title: "Профессиональная настройка",
  description: "Настраиваем аппарат под индивидуальные параметры вашего слуха",
  icon: Headphones,
  gradient: "bg-blue-modern",
  color: "text-modern-blue"
}, {
  title: "Проверка слуха",
  description: "Проводим тест слуха для точного определения потери слуха",
  icon: Music,
  gradient: "bg-purple-modern",
  color: "text-modern-purple"
}, {
  title: "Гарантийное обслуживание",
  description: "Обеспечиваем сервисное обслуживание на весь гарантийный срок",
  icon: Shield,
  gradient: "bg-emerald-modern",
  color: "text-modern-emerald"
}, {
  title: "Поддержка клиентов",
  description: "Отвечаем на вопросы и помогаем в процессе привыкания к аппарату",
  icon: HelpingHand,
  gradient: "bg-modern-gradient",
  color: "text-brand"
}];
const FeatureCard = memo(({
  feature
}: {
  feature: typeof features[0];
}) => {
  return <div className="group modern-card modern-hover p-6 relative overflow-hidden">
      {/* Современный фон при ховере */}
      <div className={`absolute inset-0 ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
      
      <div className="relative z-10">
        
        
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-lg font-bold text-slate-800 font-display">{feature.title}</h3>
          <Zap className={`h-4 w-4 ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        </div>
        
        <p className="text-slate-600 leading-relaxed text-sm mb-4">{feature.description}</p>
        
        {/* Современная анимированная линия */}
        <div className={`h-0.5 w-0 ${feature.gradient} rounded-full group-hover:w-full transition-all duration-500`}></div>
      </div>
    </div>;
});
FeatureCard.displayName = "FeatureCard";
const FeaturesSection = memo(() => {
  return <section className="bg-gradient-to-br from-white via-slate-50 to-blue-50 py-16 relative overflow-hidden">
      {/* Современные декоративные элементы */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-modern-orange/20 to-modern-rose/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-brand/20 to-modern-purple/20 rounded-full blur-2xl animate-float" style={{
      animationDelay: '3s'
    }}></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          
          
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4 font-display">
            <span className="gradient-text">Наши преимущества</span>
          </h2>
          
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Почему клиенты выбирают магазин слуховых аппаратов 
            <span className="font-bold text-brand"> "Ясный звук"</span> - 
            ваш путь к качественному слуху!
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => <div key={i} className="animate-fade-in" style={{
          animationDelay: `${i * 0.1}s`
        }}>
              <FeatureCard feature={feature} />
            </div>)}
        </div>
      </div>
    </section>;
});
FeaturesSection.displayName = "FeaturesSection";
export default FeaturesSection;