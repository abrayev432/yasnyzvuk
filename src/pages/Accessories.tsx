import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { ShoppingCart, Battery, Shield, Volume2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const accessories = [
  {
    id: 101,
    name: "Батарейки для слуховых аппаратов 312",
    category: "batteries",
    price: 450,
    image: "https://images.unsplash.com/photo-1609877280000-37f0b2b8b4ba?w=300&h=300&fit=crop",
    brand: "PowerOne",
    description: "Долговечные батарейки размера 312 для слуховых аппаратов",
    inStock: true
  },
  {
    id: 102,
    name: "Батарейки для слуховых аппаратов 13",
    category: "batteries",
    price: 480,
    image: "https://images.unsplash.com/photo-1609877280000-37f0b2b8b4ba?w=300&h=300&fit=crop",
    brand: "Rayovac",
    description: "Высококачественные батарейки размера 13",
    inStock: true
  },
  {
    id: 103,
    name: "Сушильный бокс для слуховых аппаратов",
    category: "care",
    price: 2500,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop",
    brand: "Widex",
    description: "Электронный сушильный бокс для ухода за слуховыми аппаратами",
    inStock: true
  },
  {
    id: 105,
    name: "Защитные фильтры WaxGuard",
    category: "care",
    price: 800,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=300&fit=crop",
    brand: "Oticon",
    description: "Защитные фильтры от серы для внутриушных аппаратов",
    inStock: true
  }
];

const categories = [
  { value: "all", label: "Все категории", icon: Volume2 },
  { value: "batteries", label: "Батарейки", icon: Battery },
  { value: "care", label: "Уход и обслуживание", icon: Shield }
];

const Accessories = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const { addToCart } = useCart();
  const { toast } = useToast();

  const filteredAccessories = accessories.filter((item) => {
    if (selectedCategory !== "all" && item.category !== selectedCategory) {
      return false;
    }
    if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !item.brand.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  const sortedAccessories = [...filteredAccessories].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const handleAddToCart = (item: any) => {
    addToCart(item);
    toast({
      title: "Товар добавлен в корзину",
      description: `${item.name} успешно добавлен в корзину.`,
    });
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl mb-2">
              Аксессуары для слуховых аппаратов
            </h1>
            <p className="text-muted-foreground max-w-3xl">
              Батарейки, средства ухода и другие аксессуары для ваших слуховых аппаратов.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full lg:w-1/4">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h2 className="text-lg font-semibold mb-4">Категории</h2>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.value}
                        onClick={() => setSelectedCategory(category.value)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                          selectedCategory === category.value
                            ? "bg-brand text-white"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span className="text-sm">{category.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full lg:w-3/4">
              <div className="flex flex-col sm:flex-row gap-4 justify-between mb-6">
                <Input
                  placeholder="Поиск аксессуаров..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="max-w-sm"
                />
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">Сортировать:</span>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">По популярности</SelectItem>
                      <SelectItem value="price-low">Цена (по возрастанию)</SelectItem>
                      <SelectItem value="price-high">Цена (по убыванию)</SelectItem>
                      <SelectItem value="name">По названию</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedAccessories.map((item) => (
                  <Card key={item.id} className="overflow-hidden transition-all hover:shadow-md group">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {!item.inStock && (
                        <Badge variant="destructive" className="absolute top-2 right-2">
                          Нет в наличии
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <div className="mb-2">
                        <Badge variant="outline" className="bg-brand/5 text-brand border-brand/20">
                          {item.brand}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-medium line-clamp-2 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="font-semibold text-lg">
                          {item.price.toLocaleString()} ₽
                        </div>
                        <Button 
                          size="sm" 
                          onClick={() => handleAddToCart(item)}
                          disabled={!item.inStock}
                          className="gap-2"
                        >
                          <ShoppingCart className="h-4 w-4" />
                          {item.inStock ? "В корзину" : "Нет в наличии"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {sortedAccessories.length === 0 && (
                <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                  <Volume2 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium mb-2">Товары не найдены</h3>
                  <p className="text-muted-foreground">
                    Попробуйте изменить параметры поиска
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Accessories;
