
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { memo, useState } from "react";

const categories = [
  {
    title: "Заушные слуховые аппараты",
    description: "Классические и мощные слуховые аппараты, располагающиеся за ухом",
    image: "/lovable-uploads/91f6ae84-a749-4e86-85fb-537db46052c7.png",
    path: "/catalog?category=behind-the-ear",
  },
  {
    title: "Внутриушные слуховые аппараты",
    description: "Компактные аппараты, размещающиеся в ушной раковине",
    image: "https://www.outsideclinic.co.uk/uploads/images/_large/Hearing-Aid-Styles-ITE-min.png",
    path: "/catalog?category=in-the-ear",
  },
  {
    title: "Внутриканальные слуховые аппараты",
    description: "Миниатюрные и практически незаметные аппараты внутри слухового канала",
    image: "https://avatars.mds.yandex.net/i?id=6530ef747c881994cc1a243a48d0cc7e7c306653-9425828-images-thumbs&n=13",
    path: "/catalog?category=in-the-canal",
  },
];

const CategoryCard = memo(({ category }: { category: typeof categories[0] }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group bg-white border border-neutral-200 transition-all hover:shadow-lg hover:border-neutral-300">
      <div className="aspect-[4/3] overflow-hidden bg-neutral-50">
        {!imageLoaded && (
          <div className="h-full w-full bg-neutral-100 animate-pulse flex items-center justify-center">
            <div className="w-16 h-16 bg-neutral-300"></div>
          </div>
        )}
        <img
          src={category.image}
          alt={category.title}
          className={`h-full w-full object-cover transition-all duration-500 ${
            imageLoaded ? 'opacity-100 group-hover:scale-105' : 'opacity-0'
          }`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-medium mb-2 text-neutral-900">{category.title}</h3>
        <p className="mb-4 text-neutral-600 leading-relaxed">{category.description}</p>
        <Button
          asChild
          variant="outline"
          className="border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400"
        >
          <Link to={category.path} className="flex items-center">
            Смотреть все
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
});

CategoryCard.displayName = "CategoryCard";

const ProductCategories = memo(() => {
  return (
    <section className="bg-white py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl text-neutral-900">
            Каталог слуховых аппаратов
          </h2>
          <p className="mt-4 text-neutral-600 md:text-lg max-w-2xl mx-auto leading-relaxed">
            Выберите тип слухового аппарата, который подходит именно вам
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <CategoryCard key={i} category={category} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button asChild size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">
            <Link to="/catalog">Перейти в полный каталог</Link>
          </Button>
        </div>
      </div>
    </section>
  );
});

ProductCategories.displayName = "ProductCategories";

export default ProductCategories;
