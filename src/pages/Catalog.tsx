import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { ShoppingCart, Search, Filter } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";

const Catalog = () => {
  const [searchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState(typeFilter || "all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  
  const { addToCart } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 1,
      name: "Phonak Audéo Paradise P90",
      type: "behind-ear",
      brand: "Phonak",
      price: 85000,
      originalPrice: 95000,
      description: "Премиальный заушный слуховой аппарат с Bluetooth",
      image: "/lovable-uploads/083d6d65-028b-48bf-8d3e-636baa2a7a6b.png",
      features: ["Bluetooth", "Водозащита", "Перезаряжаемый"],
      discount: 10,
      category: "hearing-aid"
    },
    {
      id: 2,
      name: "Oticon More 1",
      type: "behind-ear",
      brand: "Oticon",
      price: 92000,
      originalPrice: 102000,
      description: "Инновационный слуховой аппарат с технологией BrainHearing",
      image: "/lovable-uploads/5543292b-184c-4549-a519-930399a1f504.png",
      features: ["BrainHearing", "OpenSound Navigator", "Bluetooth"],
      discount: 10,
      category: "hearing-aid"
    },
    {
      id: 3,
      name: "ReSound ONE 9",
      type: "behind-ear",
      brand: "ReSound",
      price: 88000,
      description: "Слуховой аппарат с уникальным расположением микрофонов",
      image: "/lovable-uploads/49548ab1-e091-4999-8467-1299954829ba.png",
      features: ["M&RIE", "Direct Streaming", "Rechargeable"],
      category: "hearing-aid"
    },
    {
      id: 4,
      name: "Signia Styletto X",
      type: "behind-ear",
      brand: "Signia",
      price: 95000,
      description: "Стильный и современный слуховой аппарат",
      image: "/lovable-uploads/6e9f0954-9f1d-4a93-859f-5a854ff1549b.png",
      features: ["Own Voice Processing", "Bluetooth", "Rechargeable"],
      category: "hearing-aid"
    }
  ];

  const handleAddToCart = (product: any) => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      brand: product.brand,
      category: product.category
    };
    
    addToCart(cartItem);
    
    toast({
      title: "Товар добавлен в корзину",
      description: `${product.name} добавлен в корзину`,
    });
  };

  const productTypes = ["all", "behind-ear", "in-ear", "in-canal"];
  const productBrands = ["all", "Phonak", "Oticon", "ReSound", "Signia"];
  const priceRanges = ["all", "0-50000", "50000-100000", "100000+"];

  const filteredProducts = products.filter((product) => {
    const searchTermLower = searchTerm.toLowerCase();
    const matchesSearch = product.name.toLowerCase().includes(searchTermLower) || product.description.toLowerCase().includes(searchTermLower);
    const matchesType = selectedType === "all" || product.type === selectedType;
    const matchesBrand = selectedBrand === "all" || product.brand === selectedBrand;
    
    let matchesPrice = true;
    if (priceRange !== "all") {
      const [minStr, maxStr] = priceRange.split("-");
      const min = parseInt(minStr, 10);
      const max = parseInt(maxStr, 10) || Infinity;
      matchesPrice = product.price >= min && product.price <= max;
    }

    return matchesSearch && matchesType && matchesBrand && matchesPrice;
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
  };

  const handleBrandChange = (value: string) => {
    setSelectedBrand(value);
  };

  const handlePriceChange = (value: string) => {
    setPriceRange(value);
  };

  return (
    <Layout>
      <SEOHead 
        title="Каталог слуховых аппаратов - Ясный звук"
        description="Широкий выбор слуховых аппаратов от ведущих производителей. Заушные, внутриушные и внутриканальные модели. Профессиональная консультация и настройка."
        keywords="слуховые аппараты, каталог, купить слуховой аппарат, Phonak, Oticon, ReSound, заушные, внутриушные"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Каталог слуховых аппаратов",
          "description": "Широкий выбор слуховых аппаратов от ведущих производителей",
          "url": "https://yasnyzvuk.ru/catalog",
          "mainEntity": {
            "@type": "ItemList",
            "numberOfItems": filteredProducts.length,
            "itemListElement": filteredProducts.map((product, index) => ({
              "@type": "Product",
              "position": index + 1,
              "name": product.name,
              "image": product.image,
              "offers": {
                "@type": "Offer",
                "price": product.price,
                "priceCurrency": "RUB"
              }
            }))
          }
        }}
      />
      
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <section className="bg-white py-12 md:py-20 border-b border-gray-200">
          <div className="container px-4 md:px-6">
            <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4 items-center">
              <div className="col-span-2">
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Каталог слуховых аппаратов
                </h1>
                <p className="text-muted-foreground">
                  Выберите слуховой аппарат, подходящий именно вам
                </p>
              </div>

              <div className="col-span-2 lg:col-span-1 flex items-center">
                <Input
                  type="search"
                  placeholder="Поиск по названию"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-6 md:py-8 border-b border-gray-200">
          <div className="container px-4 md:px-6">
            <div className="grid gap-4 md:grid-cols-4 items-center">
              <div>
                <Label htmlFor="type">Тип аппарата</Label>
                <Select onValueChange={handleTypeChange} defaultValue={selectedType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Все типы" />
                  </SelectTrigger>
                  <SelectContent>
                    {productTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type === "all" ? "Все типы" : type.replace("-", " ")}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="brand">Производитель</Label>
                <Select onValueChange={handleBrandChange} defaultValue={selectedBrand}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Все бренды" />
                  </SelectTrigger>
                  <SelectContent>
                    {productBrands.map((brand) => (
                      <SelectItem key={brand} value={brand}>
                        {brand === "all" ? "Все бренды" : brand}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="price">Цена</Label>
                <Select onValueChange={handlePriceChange} defaultValue={priceRange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Любая" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Любая</SelectItem>
                    <SelectItem value="0-50000">до 50 000 ₽</SelectItem>
                    <SelectItem value="50000-100000">50 000 - 100 000 ₽</SelectItem>
                    <SelectItem value="100000+">от 100 000 ₽</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button variant="outline" className="hidden md:flex">
                <Filter className="mr-2 h-4 w-4" />
                Сбросить фильтры
              </Button>
            </div>
          </div>
        </section>

        <div className="container px-4 py-12 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <div className="relative">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      {product.discount && (
                        <Badge className="absolute top-2 right-2 bg-red-500">
                          -{product.discount}%
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg mb-2">
                      <Link 
                        to={`/catalog/${product.id}`}
                        className="hover:text-brand transition-colors"
                      >
                        {product.name}
                      </Link>
                    </CardTitle>
                    <CardDescription className="mb-3">
                      {product.description}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-2xl font-bold text-brand">
                          {product.price.toLocaleString()} ₽
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through ml-2">
                            {product.originalPrice.toLocaleString()} ₽
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        className="flex-1"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        В корзину
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to={`/catalog/${product.id}`}>
                          Подробнее
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                По вашему запросу товары не найдены
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Catalog;
