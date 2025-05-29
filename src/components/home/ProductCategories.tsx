
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { memo, useState } from "react";

const categories = [
  {
    title: "Заушные слуховые аппараты",
    description: "Классические и мощные слуховые аппараты, располагающиеся за ухом",
    image: "/lovable-uploads/91f6ae84-a749-4e86-85fb-537db46052c7.png",
    path: "/catalog?category=behind-the-ear",
    badge: "Популярное",
  },
  {
    title: "Внутриушные слуховые аппараты",
    description: "Компактные аппараты, размещающиеся в ушной раковине",
    image: "https://www.outsideclinic.co.uk/uploads/images/_large/Hearing-Aid-Styles-ITE-min.png",
    path: "/catalog?category=in-the-ear",
    badge: "Незаметные",
  },
  {
    title: "Внутриканальные слуховые аппараты",
    description: "Миниатюрные и практически незаметные аппараты внутри слухового канала",
    image: "https://avatars.mds.yandex.net/i?id=6530ef747c881994cc1a243a48d0cc7e7c306653-9425828-images-thumbs&n=13",
    path: "/catalog?category=in-the-canal",
    badge: "Комфортные",
  },
];

const CategoryCard = memo(({ category, index }: { category: typeof categories[0], index: number }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl">
      {category.badge && (
        <Badge className="absolute right-4 top-4 z-10 bg-brand text-white">{category.badge}</Badge>
      )}
      <div className="aspect-[4/3] overflow-hidden">
        {!imageLoaded && (
          <div className="h-full w-full bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
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
        <h3 className="text-xl font-bold mb-2">{category.title}</h3>
        <p className="mb-4 text-muted-foreground">{category.description}</p>
        <Button
          asChild
          variant="outline"
          className="border-brand/30 hover:bg-brand/5"
        >
          <Link to={category.path} className="flex items-center text-brand">
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
    <section className="bg-white py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            Каталог слуховых аппаратов
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Выберите тип слухового аппарата, который подходит именно вам
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <CategoryCard key={i} category={category} index={i} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button asChild size="lg" className="rounded-full shadow-lg shadow-brand/20">
            <Link to="/catalog">Перейти в полный каталог</Link>
          </Button>
        </div>
      </div>
    </section>
  );
});

ProductCategories.displayName = "ProductCategories";

export default ProductCategories;
