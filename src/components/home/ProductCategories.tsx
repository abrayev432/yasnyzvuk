
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles, TrendingUp, Zap } from "lucide-react";
import { memo, useState } from "react";

const categories = [
  {
    title: "Заушные слуховые аппараты",
    description: "Классические и мощные слуховые аппараты, располагающиеся за ухом",
    image: "/lovable-uploads/91f6ae84-a749-4e86-85fb-537db46052c7.png",
    path: "/catalog?category=behind-the-ear",
    gradient: "bg-modern-gradient",
    badge: "Популярные"
  },
  {
    title: "Внутриушные слуховые аппараты",
    description: "Компактные аппараты, размещающиеся в ушной раковине",
    image: "https://www.outsideclinic.co.uk/uploads/images/_large/Hearing-Aid-Styles-ITE-min.png",
    path: "/catalog?category=in-the-ear",
    gradient: "bg-blue-modern",
    badge: "Комфорт"
  },
  {
    title: "Внутриканальные слуховые аппараты",
    description: "Миниатюрные и практически незаметные аппараты внутри слухового канала",
    image: "https://avatars.mds.yandex.net/i?id=6530ef747c881994cc1a243a48d0cc7e7c306653-9425828-images-thumbs&n=13",
    path: "/catalog?category=in-the-canal",
    gradient: "bg-purple-modern",
    badge: "Незаметные"
  },
];

const CategoryCard = memo(({ category }: { category: typeof categories[0] }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group modern-card modern-hover relative overflow-hidden">
      {/* Современный бейдж */}
      <div className={`absolute top-6 left-6 z-20 ${category.gradient} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4" />
          {category.badge}
        </div>
      </div>
      
      <div className="aspect-[4/3] overflow-hidden relative rounded-t-2xl">
        {!imageLoaded && (
          <div className="h-full w-full bg-gradient-to-br from-slate-100 to-slate-200 animate-pulse flex items-center justify-center">
            <div className="w-20 h-20 bg-slate-300 rounded-full animate-pulse"></div>
          </div>
        )}
        <img
          src={category.image}
          alt={category.title}
          className={`h-full w-full object-cover transition-all duration-700 ${
            imageLoaded ? 'opacity-100 group-hover:scale-110' : 'opacity-0'
          }`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Современный градиентный оверлей */}
        <div className={`absolute inset-0 ${category.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
      </div>
      
      <div className="p-8 relative">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-slate-800 group-hover:text-brand transition-colors duration-300 font-display">
            {category.title}
          </h3>
          <Sparkles className="h-6 w-6 text-modern-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
        </div>
        
        <p className="mb-8 text-slate-600 leading-relaxed">{category.description}</p>
        
        <Button
          asChild
          variant="outline"
          className="w-full border-2 border-brand text-brand hover:bg-brand hover:text-white transition-all duration-300 rounded-xl font-semibold group"
        >
          <Link to={category.path} className="flex items-center justify-center gap-2">
            Смотреть все
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </Button>
      </div>
    </div>
  );
});

CategoryCard.displayName = "CategoryCard";

const ProductCategories = memo(() => {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Современные декоративные элементы */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-modern-emerald/10 to-modern-cyan/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-br from-modern-orange/10 to-modern-rose/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center bg-gradient-to-r from-modern-emerald to-modern-cyan text-white px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
            <TrendingUp className="mr-2 h-4 w-4" />
            <span>Каталог товаров</span>
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6 font-display">
            <span className="gradient-text">Каталог слуховых аппаратов</span>
          </h2>
          
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Выберите тип слухового аппарата, который 
            <span className="font-bold text-modern-purple"> подходит именно вам</span> из нашего ассортимента
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {categories.map((category, i) => (
            <div key={i} className="animate-fade-in" style={{animationDelay: `${i * 0.1}s`}}>
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
        
        <div className="text-center animate-fade-in">
          <Button asChild size="lg" className="modern-button text-lg px-12 py-5 rounded-2xl shadow-2xl">
            <Link to="/catalog" className="flex items-center gap-3">
              <Sparkles className="w-5 h-5" />
              Перейти в полный каталог
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
});

ProductCategories.displayName = "ProductCategories";

export default ProductCategories;
