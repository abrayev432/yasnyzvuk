
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { memo, useState } from "react";

const brands = [
  { name: "Oticon", logo: "https://avatars.mds.yandex.net/get-entity_search/5578182/576251644/S600xU", description: "Датский производитель с более чем 115-летним опытом разработки слуховых аппаратов" },
  { name: "Phonak", logo: "https://www.phonakpro.com/content/dam/phonakpro/gc_hq/en/overall/images/logos/Logo_Phonak_life_is_on_pos_RGB_300dpi.jpg", description: "Швейцарский бренд, специализирующийся на высокотехнологичных решениях для слуха" },
  { name: "Signia", logo: "https://www.sluh-center.ru/upload/iblock/8d9/vh0b7k59kobw6x2qb2ggaue6um9lrtpr.webp", description: "Немецкое качество и инновационные технологии для естественного звучания" },
  { name: "ReSound", logo: "https://avatars.mds.yandex.net/i?id=c1fef404869f838208e4f1f14a6cbba1ffbe9690-5233519-images-thumbs&n=13", description: "Пионер в области беспроводных технологий для слуховых аппаратов" },
  { name: "Widex", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Widex_logo.png", description: "Датский производитель с фокусом на естественное звучание и инновации" },
];

const BrandCard = memo(({ brand }: { brand: typeof brands[0] }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="flex items-center justify-center bg-white border border-neutral-200 p-6 h-32 transition-all hover:shadow-lg hover:border-neutral-300 cursor-pointer">
          {!imageLoaded && (
            <div className="max-h-20 w-20 bg-neutral-200 animate-pulse"></div>
          )}
          <img
            src={brand.logo}
            alt={`${brand.name} логотип`}
            className={`max-h-20 w-auto object-contain transition-all ${
              imageLoaded ? 'opacity-100 hover:scale-105' : 'opacity-0'
            }`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="text-lg font-medium text-neutral-900">{brand.name}</h4>
          <p className="text-sm text-neutral-600">{brand.description}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
});

BrandCard.displayName = "BrandCard";

const BrandsSection = memo(() => {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl text-neutral-900">
            Работаем с ведущими производителями
          </h2>
          <p className="mt-3 text-neutral-600 md:text-lg max-w-2xl mx-auto leading-relaxed">
            Представляем слуховые аппараты от мировых лидеров в области аудиологии
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {brands.map((brand, i) => (
            <BrandCard key={i} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
});

BrandsSection.displayName = "BrandsSection";

export default BrandsSection;
