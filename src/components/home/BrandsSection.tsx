
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { memo, useState } from "react";

const brands = [
  { name: "Oticon", logo: "/src/assets/images/brands/oticon-logo.png", description: "Датский производитель с более чем 115-летним опытом разработки слуховых аппаратов" },
  { name: "Phonak", logo: "/src/assets/images/brands/phonak-logo.png", description: "Швейцарский бренд, специализирующийся на высокотехнологичных решениях для слуха" },
  { name: "Signia", logo: "/src/assets/images/brands/signia-logo.png", description: "Немецкое качество и инновационные технологии для естественного звучания" },
  { name: "ReSound", logo: "/src/assets/images/brands/resound-logo.png", description: "Пионер в области беспроводных технологий для слуховых аппаратов" },
  { name: "Widex", logo: "/src/assets/images/brands/widex-logo.png", description: "Датский производитель с фокусом на естественное звучание и инновации" },
  { name: "Starkey", logo: "/src/assets/images/brands/starkey-logo.png", description: "Американский производитель слуховых аппаратов с инновационными технологиями" },
];

const BrandCard = memo(({ brand, index }: { brand: typeof brands[0], index: number }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="flex items-center justify-center p-6 rounded-lg transition-all hover:scale-105 cursor-pointer h-32 bg-transparent">
          {!imageLoaded && (
            <div className="max-h-20 w-20 bg-gray-200 animate-pulse rounded"></div>
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
          <h4 className="text-lg font-semibold">{brand.name}</h4>
          <p className="text-sm text-muted-foreground">{brand.description}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
});

BrandCard.displayName = "BrandCard";

const BrandsSection = memo(() => {
  return (
    <section className="bg-gradient-to-br from-brand to-brand-dark py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tighter md:text-3xl lg:text-4xl text-white">
            Работаем с ведущими производителями
          </h2>
          <p className="mt-3 text-white/80 md:text-lg max-w-2xl mx-auto">
            Представляем слуховые аппараты от мировых лидеров в области аудиологии
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand, i) => (
            <BrandCard key={i} brand={brand} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
});

BrandsSection.displayName = "BrandsSection";

export default BrandsSection;
