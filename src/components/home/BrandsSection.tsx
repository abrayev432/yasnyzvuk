
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const brands = [
  { name: "Oticon", logo: "https://avatars.mds.yandex.net/get-entity_search/5578182/576251644/S600xU", description: "Датский производитель с более чем 115-летним опытом разработки слуховых аппаратов" },
  { name: "Phonak", logo: "https://www.phonakpro.com/content/dam/phonakpro/gc_hq/en/overall/images/logos/Logo_Phonak_life_is_on_pos_RGB_300dpi.jpg", description: "Швейцарский бренд, специализирующийся на высокотехнологичных решениях для слуха" },
  { name: "Signia", logo: "https://www.sluh-center.ru/upload/iblock/8d9/vh0b7k59kobw6x2qb2ggaue6um9lrtpr.webp", description: "Немецкое качество и инновационные технологии для естественного звучания" },
  { name: "ReSound", logo: "https://avatars.mds.yandex.net/i?id=c1fef404869f838208e4f1f14a6cbba1ffbe9690-5233519-images-thumbs&n=13", description: "Пионер в области беспроводных технологий для слуховых аппаратов" },
  { name: "Widex", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Widex_logo.png", description: "Датский производитель с фокусом на естественное звучание и инновации" },
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
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {brands.map((brand, i) => (
            <HoverCard key={i}>
              <HoverCardTrigger asChild>
                <div className="flex items-center justify-center bg-white/95 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:bg-white cursor-pointer h-32">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} логотип`}
                    className="max-h-20 w-auto object-contain transition-all hover:scale-105"
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
