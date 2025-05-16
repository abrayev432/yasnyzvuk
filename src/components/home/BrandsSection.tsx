
const brands = [
  { name: "Oticon", logo: "/assets/images/brands/oticon-logo.png" },
  { name: "Phonak", logo: "/assets/images/brands/phonak-logo.png" },
  { name: "Signia", logo: "/assets/images/brands/signia-logo.png" },
  { name: "ReSound", logo: "/assets/images/brands/resound-logo.png" },
  { name: "Starkey", logo: "/assets/images/brands/starkey-logo.png" },
  { name: "Widex", logo: "/assets/images/brands/widex-logo.png" },
];

const BrandsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
            Работаем с ведущими производителями
          </h2>
          <p className="mt-3 text-muted-foreground">
            Представляем слуховые аппараты от мировых лидеров в области аудиологии
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-lg bg-gray-50 p-6 transition-all hover:bg-gray-100"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} логотип`}
                className="max-h-12 w-auto grayscale transition hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
