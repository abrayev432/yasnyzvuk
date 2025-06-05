
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { memo, useState } from "react";
import { Award, Star, Zap } from "lucide-react";

const brands = [
  { 
    name: "Oticon", 
    logo: "https://avatars.mds.yandex.net/get-entity_search/5578182/576251644/S600xU", 
    description: "Датский производитель с более чем 115-летним опытом разработки слуховых аппаратов",
    gradient: "bg-modern-gradient"
  },
  { 
    name: "Phonak", 
    logo: "https://www.phonakpro.com/content/dam/phonakpro/gc_hq/en/overall/images/logos/Logo_Phonak_life_is_on_pos_RGB_300dpi.jpg", 
    description: "Швейцарский бренд, специализирующийся на высокотехнологичных решениях для слуха",
    gradient: "bg-blue-modern"
  },
  { 
    name: "Signia", 
    logo: "https://www.sluh-center.ru/upload/iblock/8d9/vh0b7k59kobw6x2qb2ggaue6um9lrtpr.webp", 
    description: "Немецкое качество и инновационные технологии для естественного звучания",
    gradient: "bg-purple-modern"
  },
  { 
    name: "ReSound", 
    logo: "https://avatars.mds.yandex.net/i?id=c1fef404869f838208e4f1f14a6cbba1ffbe9690-5233519-images-thumbs&n=13", 
    description: "Пионер в области беспроводных технологий для слуховых аппаратов",
    gradient: "bg-emerald-modern"
  },
  { 
    name: "Widex", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Widex_logo.png", 
    description: "Датский производитель с фокусом на естественное звучание и инновации",
    gradient: "bg-modern-gradient"
  },
];

const BrandCard = memo(({ brand }: { brand: typeof brands[0] }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="group modern-card modern-hover h-48 flex items-center justify-center cursor-pointer relative overflow-hidden p-8">
          {/* Современная звездочка */}
          <Zap className="absolute top-3 right-3 h-5 w-5 text-modern-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Современный фон при ховере */}
          <div className={`absolute inset-0 ${brand.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-300`}></div>
          
          <div className="relative z-10">
            {!imageLoaded && (
              <div className="max-h-28 w-28 bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse rounded-2xl"></div>
            )}
            <img
              src={brand.logo}
              alt={`${brand.name} логотип`}
              className={`max-h-28 w-auto object-contain transition-all duration-500 ${
                imageLoaded ? 'opacity-100 group-hover:scale-110' : 'opacity-0'
              }`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          
          {/* Современная подсветка снизу */}
          <div className={`absolute bottom-0 left-0 right-0 h-2 ${brand.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`}></div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 modern-card">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 ${brand.gradient} rounded-full`}></div>
            <h4 className="text-xl font-bold text-slate-800 font-display">{brand.name}</h4>
            <Award className="h-5 w-5 text-modern-orange" />
          </div>
          <p className="text-slate-600 leading-relaxed">{brand.description}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
});

BrandCard.displayName = "BrandCard";

const BrandsSection = memo(() => {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 relative overflow-hidden">
      {/* Современные декоративные элементы */}
      <div className="absolute top-16 left-16 w-40 h-40 bg-gradient-to-br from-modern-rose/20 to-modern-purple/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-16 right-16 w-56 h-56 bg-gradient-to-br from-modern-emerald/20 to-modern-cyan/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center bg-gradient-to-r from-modern-orange to-modern-rose text-white px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
            <Award className="mr-2 h-4 w-4" />
            <span>Премиальные бренды</span>
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6 font-display">
            <span className="gradient-text">Работаем с ведущими</span>
            <br />
            <span className="text-slate-800">производителями</span>
          </h2>
          
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Представляем слуховые аппараты от 
            <span className="font-bold text-brand"> мировых лидеров</span> в области аудиологии
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {brands.map((brand, i) => (
            <div key={i} className="animate-fade-in" style={{animationDelay: `${i * 0.1}s`}}>
              <BrandCard brand={brand} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

BrandsSection.displayName = "BrandsSection";

export default BrandsSection;
