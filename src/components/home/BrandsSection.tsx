
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { memo, useState } from "react";
import { Award, Star } from "lucide-react";

const brands = [
  { 
    name: "Oticon", 
    logo: "https://avatars.mds.yandex.net/get-entity_search/5578182/576251644/S600xU", 
    description: "Датский производитель с более чем 115-летним опытом разработки слуховых аппаратов",
    gradient: "bg-classic-gradient"
  },
  { 
    name: "Phonak", 
    logo: "https://www.phonakpro.com/content/dam/phonakpro/gc_hq/en/overall/images/logos/Logo_Phonak_life_is_on_pos_RGB_300dpi.jpg", 
    description: "Швейцарский бренд, специализирующийся на высокотехнологичных решениях для слуха",
    gradient: "bg-gold-gradient"
  },
  { 
    name: "Signia", 
    logo: "https://www.sluh-center.ru/upload/iblock/8d9/vh0b7k59kobw6x2qb2ggaue6um9lrtpr.webp", 
    description: "Немецкое качество и инновационные технологии для естественного звучания",
    gradient: "bg-burgundy-gradient"
  },
  { 
    name: "ReSound", 
    logo: "https://avatars.mds.yandex.net/i?id=c1fef404869f838208e4f1f14a6cbba1ffbe9690-5233519-images-thumbs&n=13", 
    description: "Пионер в области беспроводных технологий для слуховых аппаратов",
    gradient: "bg-forest-gradient"
  },
  { 
    name: "Widex", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Widex_logo.png", 
    description: "Датский производитель с фокусом на естественное звучание и инновации",
    gradient: "bg-classic-gradient"
  },
];

const BrandCard = memo(({ brand }: { brand: typeof brands[0] }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="group classic-card elegant-hover h-40 flex items-center justify-center cursor-pointer relative overflow-hidden p-6">
          {/* Декоративная звездочка */}
          <Star className="absolute top-2 right-2 h-4 w-4 text-classic-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Элегантный фон при ховере */}
          <div className={`absolute inset-0 ${brand.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
          
          <div className="relative z-10">
            {!imageLoaded && (
              <div className="max-h-24 w-24 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse rounded-lg"></div>
            )}
            <img
              src={brand.logo}
              alt={`${brand.name} логотип`}
              className={`max-h-24 w-auto object-contain transition-all duration-500 ${
                imageLoaded ? 'opacity-100 group-hover:scale-105' : 'opacity-0'
              }`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          
          {/* Подсветка снизу */}
          <div className={`absolute bottom-0 left-0 right-0 h-1 ${brand.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 classic-card">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 ${brand.gradient} rounded-full`}></div>
            <h4 className="text-xl font-bold text-classic-charcoal font-serif">{brand.name}</h4>
            <Award className="h-5 w-5 text-classic-gold" />
          </div>
          <p className="text-gray-600 leading-relaxed">{brand.description}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
});

BrandCard.displayName = "BrandCard";

const BrandsSection = memo(() => {
  return (
    <section className="bg-gradient-to-br from-classic-ivory via-white to-classic-cream py-24 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-16 left-16 w-28 h-28 bg-classic-burgundy/10 rounded-full"></div>
      <div className="absolute bottom-16 right-16 w-36 h-36 bg-classic-forest/10 rounded-full"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-classic-gold text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Award className="mr-2 h-4 w-4" />
            <span>Премиальные бренды</span>
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6 font-serif">
            <span className="text-classic-navy">Работаем с ведущими</span>
            <br />
            <span className="text-classic-charcoal">производителями</span>
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Представляем слуховые аппараты от 
            <span className="font-bold text-classic-navy"> мировых лидеров</span> в области аудиологии
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
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
