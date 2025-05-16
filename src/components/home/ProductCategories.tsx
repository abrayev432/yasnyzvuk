
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    title: "Заушные слуховые аппараты",
    description: "Классические и мощные слуховые аппараты, располагающиеся за ухом",
    image: "/assets/images/behind-ear-hearing-aid.jpg",
    path: "/catalog/behind-the-ear",
  },
  {
    title: "Внутриушные слуховые аппараты",
    description: "Компактные аппараты, размещающиеся в ушной раковине",
    image: "/assets/images/in-ear-hearing-aid.jpg",
    path: "/catalog/in-the-ear",
  },
  {
    title: "Внутриканальные слуховые аппараты",
    description: "Миниатюрные и практически незаметные аппараты внутри слухового канала",
    image: "/assets/images/in-canal-hearing-aid.jpg",
    path: "/catalog/in-the-canal",
  },
];

const ProductCategories = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Каталог слуховых аппаратов
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Выберите тип слухового аппарата, который подходит именно вам
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl border bg-white transition-all hover:shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{category.title}</h3>
                <p className="mt-2 text-muted-foreground">{category.description}</p>
                <Button
                  asChild
                  variant="ghost"
                  className="mt-4 p-0 hover:bg-transparent"
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
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/catalog">Перейти в полный каталог</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
