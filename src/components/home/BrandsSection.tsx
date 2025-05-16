
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const brands = [
  { name: "Oticon", logo: "/assets/images/brands/oticon-logo.png", description: "Датский производитель с более чем 115-летним опытом разработки слуховых аппаратов" },
  { name: "Phonak", logo: "/assets/images/brands/phonak-logo.png", description: "Швейцарский бренд, специализирующийся на высокотехнологичных решениях для слуха" },
  { name: "Signia", logo: "/assets/images/brands/signia-logo.png", description: "Немецкое качество и инновационные технологии для естественного звучания" },
  { name: "ReSound", logo: "/assets/images/brands/resound-logo.png", description: "Пионер в области беспроводных технологий для слуховых аппаратов" },
  { name: "Starkey", logo: "/assets/images/brands/starkey-logo.png", description: "Американский производитель, известный своими индивидуальными решениями" },
  { name: "Widex", logo: "/assets/images/brands/widex-logo.png", description: "Датский производитель с фокусом на естественное звучание и инновации" },
];

const BrandsSection = () => {
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
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand, i) => (
            <HoverCard key={i}>
              <HoverCardTrigger asChild>
                <div
                  className="flex items-center justify-center rounded-lg bg-white/95 p-6 transition-all hover:bg-white cursor-pointer hover:shadow-xl shadow-lg"
                >
                  <img
                    src={brand.logo}
                    alt={`${brand.name} логотип`}
                    className="max-h-12 w-auto grayscale transition hover:grayscale-0"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
