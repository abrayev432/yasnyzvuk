import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const products = [
  {
    id: "phonak-audeo-p50",
    name: "Phonak Audeo P50",
    brand: "Phonak",
    type: "behind-ear",
    price: 85000,
    image: "/lovable-uploads/38ee5e38-602d-45ae-8ee4-ea16bcb0520f.png",
    description: "Современный заушный слуховой аппарат с превосходным качеством звука",
    features: ["Водостойкость IP68", "Bluetooth подключение", "Перезаряжаемый аккумулятор"]
  },
  {
    id: "oticon-opn-s1",
    name: "Oticon Opn S1",
    brand: "Oticon",
    type: "behind-ear",
    price: 92000,
    image: "/lovable-uploads/d24e5916-884c-424d-a991-0991c5986c39.png",
    description: "Премиальный слуховой аппарат с открытой платформой и 360° звуком",
    features: ["OpenSound Navigator", "Bluetooth", "Made for iPhone"]
  },
  {
    id: "resound-linx-quattro-9",
    name: "ReSound LiNX Quattro 9",
    brand: "ReSound",
    type: "behind-ear",
    price: 98000,
    image: "/lovable-uploads/49157797-08a8-4a49-a608-8cb209a9199d.png",
    description: "Интеллектуальный слуховой аппарат с расширенным динамическим диапазоном",
    features: ["Spatial Sense", "Direct streaming", "Rechargeable"]
  },
  {
    id: "signia-silk-7x",
    name: "Signia Silk 7x",
    brand: "Signia",
    type: "in-ear",
    price: 110000,
    image: "/lovable-uploads/6e93515d-b95d-4a97-8869-88112b397ca3.png",
    description: "Невидимый внутриушной слуховой аппарат с высоким качеством звука",
    features: ["miniReceiver", "Directional microphones", "Wireless connectivity"]
  },
  {
    id: "widex-evoke-440",
    name: "Widex Evoke 440",
    brand: "Widex",
    type: "in-ear",
    price: 105000,
    image: "/lovable-uploads/c92c939d-9801-424a-891c-4a59b9919145.png",
    description: "Самообучающийся слуховой аппарат с искусственным интеллектом",
    features: ["Fluid Sound Analyzer", "Real-time processing", "Personalization"]
  },
  {
    id: "starkey-livio-edge-ai",
    name: "Starkey Livio Edge AI",
    brand: "Starkey",
    type: "behind-ear",
    price: 120000,
    image: "/lovable-uploads/5995095d-8c13-454d-a94f-e5149a0998b9.png",
    description: "Первый в мире слуховой аппарат с искусственным интеллектом и датчиками здоровья",
    features: ["Brain Tracking", "Fall Detection", "Language Translation"]
  }
];

const Catalog = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const { addToCart } = useCart();

  const category = searchParams.get('category');
  const type = searchParams.get('type');

  useEffect(() => {
    let filtered = products;
    
    if (category) {
      filtered = filtered.filter(product => 
        product.type === category || product.brand.toLowerCase() === category.toLowerCase()
      );
    }
    
    if (type) {
      filtered = filtered.filter(product => product.type === type);
    }
    
    setFilteredProducts(filtered);
  }, [category, type]);

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
    toast.success(`${product.name} добавлен в корзину`);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Каталог слуховых аппаратов",
    "description": "Широкий выбор слуховых аппаратов от ведущих производителей",
    "url": "https://yasniy-zvuk.ru/catalog",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": filteredProducts.map((product, index) => ({
        "@type": "Product",
        "position": index + 1,
        "name": product.name,
        "description": product.description,
        "image": product.image,
        "offers": {
          "@type": "Offer",
          "price": product.price,
          "priceCurrency": "RUB",
          "availability": "https://schema.org/InStock"
        }
      }))
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Каталог слуховых аппаратов - купить в Москве"
        description="Широкий выбор слуховых аппаратов от ведущих производителей Phonak, Oticon, ReSound. Профессиональный подбор и настройка. Доставка по Москве."
        keywords="каталог слуховых аппаратов, купить слуховой аппарат Москва, Phonak, Oticon, ReSound, заушные, внутриушные"
        structuredData={structuredData}
        url="https://yasniy-zvuk.ru/catalog"
      />
      
      <div className="bg-gray-50 py-12">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
              Каталог слуховых аппаратов
            </h1>
            <p className="text-muted-foreground max-w-3xl">
              Выберите подходящий слуховой аппарат из нашего каталога. 
              Все устройства сертифицированы и имеют официальную гарантию.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="mb-2">
                      {product.brand}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mb-2">
                    <Link 
                      to={`/catalog/${product.id}`}
                      className="hover:text-brand transition-colors"
                    >
                      {product.name}
                    </Link>
                  </CardTitle>
                  <p className="text-muted-foreground text-sm mb-3">
                    {product.description}
                  </p>
                  {product.features && (
                    <ul className="text-xs text-muted-foreground mb-3">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="flex items-center gap-1">
                          <span className="w-1 h-1 bg-brand rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
                <CardFooter className="p-4 pt-0 flex items-center justify-between">
                  <div className="text-xl font-bold text-brand">
                    {product.price.toLocaleString()} ₽
                  </div>
                  <Button 
                    size="sm" 
                    onClick={() => handleAddToCart(product)}
                    className="gap-2"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                По выбранным критериям товары не найдены.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Catalog;
