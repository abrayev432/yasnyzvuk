
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Package } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

// Product database
const products = [
  {
    id: 1,
    name: "Слуховой аппарат ReSound KEY KE277-DWH",
    category: "behind-the-ear",
    price: 40500,
    image: "https://vitaurum.ru/wa-data/public/shop/products/16/74/127416/images/7816/7816.450x0.png",
    brand: "ReSound",
    isNew: true,
    isBestseller: false,
    slug: "resound-key-ke277"
  },
  {
    id: 2,
    name: "Слуховой аппарат Oticon Zircon 1 miniRITE T",
    category: "behind-the-ear",
    price: 122000,
    image: "https://avatars.mds.yandex.net/get-marketpic/7741417/picbeb707c76808c52998c2db5ab35d5b43/orig",
    brand: "Oticon",
    isNew: false,
    isBestseller: true,
    slug: "oticon-zircon-1"
  },
  {
    id: 3,
    name: "Слуховой аппарат Oticon Ruby 2 BTE PP 13",
    category: "behind-the-ear",
    price: 83000,
    image: "https://vitaurum.ru/wa-data/public/shop/products/68/73/127368/images/7136/7136.450x0.png",
    brand: "Oticon",
    isNew: true,
    isBestseller: false,
    slug: "oticon-ruby-2"
  },
  {
    id: 5,
    name: "Слуховой аппарат Oticon Xceed 3 BTE SP",
    category: "behind-the-ear",
    price: 80000,
    image: "https://vitaurum.ru/wa-data/public/shop/products/57/76/127657/images/7092/7092.450x0.jpg",
    brand: "Oticon",
    isNew: false,
    isBestseller: true,
    slug: "oticon-xceed-3"
  },
  {
    id: 6,
    name: "Слуховой аппарат Phonak Audeo P50-312",
    category: "behind-the-ear",
    price: 126000,
    image: "https://www.radugazvukov.ru/upload/iblock/e73/wwa3mzrbty1e204dcruafye6h31fxlph/Phonak_Audeo_P-312.jpg",
    brand: "Phonak",
    isNew: true,
    isBestseller: false,
    slug: "phonak-audeo-p50"
  },
];

const Catalog = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("popular");
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  // Parse URL parameters on component mount and when URL changes
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const categoryParam = queryParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [location.search]);
  
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

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast({
      title: "Товар добавлен в корзину",
      description: `${product.name} успешно добавлен в корзину.`,
    });
  };

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
                  <Button variant="outline" className="w-full" onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                    setSortBy("popular");
                  }}>Сбросить фильтры</Button>
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
                        <Link to={`/catalog/${product.slug}`}>
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
                        </Link>
                      </div>
                      <CardContent className="p-4">
                        <div className="mb-2">
                          <Badge variant="outline" className="bg-brand/5 text-brand border-brand/20">
                            {product.brand}
                          </Badge>
                        </div>
                        <Link to={`/catalog/${product.slug}`}>
                          <h3 className="text-lg font-medium line-clamp-2 mb-1 group-hover:text-brand transition-colors">
                            {product.name}
                          </h3>
                        </Link>
                        <div className="text-sm text-muted-foreground mb-3">
                          {product.category === "behind-the-ear" && "Заушный"}
                          {product.category === "in-the-ear" && "Внутриушной"}
                          {product.category === "in-the-canal" && "Внутриканальный"}
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div className="font-semibold">
                            {product.price.toLocaleString()} ₽
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" asChild>
                              <Link to={`/catalog/${product.slug}`}>
                                Подробнее
                              </Link>
                            </Button>
                            <Button size="sm" onClick={() => handleAddToCart(product)}>
                              <ShoppingCart className="h-4 w-4" />
                            </Button>
                          </div>
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
