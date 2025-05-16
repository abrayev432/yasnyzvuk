
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    title: "Заушные слуховые аппараты",
    description: "Классические и мощные слуховые аппараты, располагающиеся за ухом",
    image: "/assets/images/behind-ear-hearing-aid.jpg",
    path: "/catalog/behind-the-ear",
    badge: "Популярное",
  },
  {
    title: "Внутриушные слуховые аппараты",
    description: "Компактные аппараты, размещающиеся в ушной раковине",
    image: "/assets/images/in-ear-hearing-aid.jpg",
    path: "/catalog/in-the-ear",
    badge: "Незаметные",
  },
  {
    title: "Внутриканальные слуховые аппараты",
    description: "Миниатюрные и практически незаметные аппараты внутри слухового канала",
    image: "/assets/images/in-canal-hearing-aid.jpg",
    path: "/catalog/in-the-canal",
    badge: "Комфортные",
  },
];

const ProductCategories = () => {
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
            <div key={i} className="group relative overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl">
              {category.badge && (
                <Badge className="absolute right-4 top-4 z-10 bg-brand text-white">{category.badge}</Badge>
              )}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
};

export default ProductCategories;
