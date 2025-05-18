
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Package } from "lucide-react";

const products = [
  {
    id: 1,
    name: "ReSound ONE 9",
    category: "behind-the-ear",
    price: 158000,
    image: "/lovable-uploads/91f6ae84-a749-4e86-85fb-537db46052c7.png",
    brand: "ReSound",
    isNew: true,
    isBestseller: false,
  },
  {
    id: 2,
    name: "Phonak Audéo Paradise P90",
    category: "behind-the-ear",
    price: 175000,
    image: "/lovable-uploads/91f6ae84-a749-4e86-85fb-537db46052c7.png",
    brand: "Phonak",
    isNew: false,
    isBestseller: true,
  },
  {
    id: 3,
    name: "Oticon More 1",
    category: "behind-the-ear",
    price: 182000,
    image: "/lovable-uploads/91f6ae84-a749-4e86-85fb-537db46052c7.png",
    brand: "Oticon",
    isNew: true,
    isBestseller: false,
  },
  {
    id: 4,
    name: "Starkey Livio Edge AI 2400",
    category: "in-the-ear",
    price: 195000,
    image: "/assets/images/in-ear-hearing-aid.jpg",
    brand: "Starkey",
    isNew: false,
    isBestseller: false,
  },
  {
    id: 5,
    name: "Signia Silk X 7",
    category: "in-the-canal",
    price: 162000,
    image: "/assets/images/in-canal-hearing-aid.jpg",
    brand: "Signia",
    isNew: false,
    isBestseller: true,
  },
  {
    id: 6,
    name: "Widex Moment 440",
    category: "in-the-ear",
    price: 178000,
    image: "/assets/images/in-ear-hearing-aid.jpg",
    brand: "Widex",
    isNew: true,
    isBestseller: false,
  },
];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("popular");
  
  const filteredProducts = products.filter((product) => {
    // Filter by category
    if (selectedCategory !== "all" && product.category !== selectedCategory) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !product.brand.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default: // popular
        if (a.isBestseller && !b.isBestseller) return -1;
        if (!a.isBestseller && b.isBestseller) return 1;
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;
        return 0;
    }
  });

  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container px-4 md:px-6">
          <div className="mb-10">
            <h1 className="text-3xl font-bold tracking-tighter md:text-5xl mb-2">
              Каталог слуховых аппаратов
            </h1>
            <p className="text-muted-foreground max-w-3xl">
              Выберите и закажите слуховой аппарат, который подходит именно вам. Наши специалисты помогут с выбором и настройкой.
            </p>
          </div>

          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="w-full lg:w-1/4">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h2 className="text-lg font-semibold mb-4">Фильтры</h2>
                
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-2">Категории</h3>
                  <Tabs 
                    defaultValue="all" 
                    orientation="vertical" 
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                    className="w-full"
                  >
                    <TabsList className="flex flex-col h-auto bg-muted/50 rounded-md w-full">
                      <TabsTrigger value="all" className="justify-start">
                        Все категории
                      </TabsTrigger>
                      <TabsTrigger value="behind-the-ear" className="justify-start">
                        Заушные аппараты
                      </TabsTrigger>
                      <TabsTrigger value="in-the-ear" className="justify-start">
                        Внутриушные аппараты
                      </TabsTrigger>
                      <TabsTrigger value="in-the-canal" className="justify-start">
                        Внутриканальные аппараты
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                <div className="mb-6">
                  <Button variant="outline" className="w-full">Сбросить фильтры</Button>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="text-sm font-medium mb-2">Нужна помощь?</h3>
                  <p className="text-sm text-muted-foreground mb-2">Позвоните нам для консультации:</p>
                  <a href="tel:+74957990926" className="text-brand font-medium">+7 (495) 799-09-26</a>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-3/4">
              <div className="flex flex-col sm:flex-row gap-4 justify-between mb-6">
                <div className="relative">
                  <Input
                    placeholder="Поиск по названию или бренду"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="max-w-sm"
                  />
                </div>
                
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span className="text-sm text-muted-foreground">Сортировать по:</span>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Популярности" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Популярности</SelectItem>
                      <SelectItem value="price-low">Цена (по возрастанию)</SelectItem>
                      <SelectItem value="price-high">Цена (по убыванию)</SelectItem>
                      <SelectItem value="name">Названию</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {sortedProducts.length === 0 ? (
                <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                  <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium mb-2">Товары не найдены</h3>
                  <p className="text-muted-foreground">
                    Попробуйте изменить параметры поиска или сбросить фильтры
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <Card key={product.id} className="overflow-hidden transition-all hover:shadow-md group">
                      <div className="relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {product.isNew && (
                          <Badge className="absolute top-2 right-2 bg-brand text-white">Новинка</Badge>
                        )}
                        {product.isBestseller && (
                          <Badge variant="outline" className="absolute top-2 right-2 border-brand bg-white text-brand">
                            Хит продаж
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <div className="mb-2">
                          <Badge variant="outline" className="bg-brand/5 text-brand border-brand/20">
                            {product.brand}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-medium line-clamp-2 mb-1 group-hover:text-brand transition-colors">
                          {product.name}
                        </h3>
                        <div className="text-sm text-muted-foreground mb-3">
                          {product.category === "behind-the-ear" && "Заушный"}
                          {product.category === "in-the-ear" && "Внутриушной"}
                          {product.category === "in-the-canal" && "Внутриканальный"}
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div className="font-semibold">
                            {product.price.toLocaleString()} ₽
                          </div>
                          <Button size="sm" className="gap-2">
                            <ShoppingCart className="h-4 w-4" />
                            В корзину
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Catalog;
