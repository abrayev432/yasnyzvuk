
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  ArrowLeft,
  Check,
  ShoppingCart
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";

// Define product data structure
type ProductSpec = {
  name: string;
  value: string;
};

type ProductData = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  brand: string;
  isNew: boolean;
  isBestseller: boolean;
  description: string;
  features: string[];
  specs: ProductSpec[];
};

// Product database
const productsDatabase: Record<string, ProductData> = {
  "oticon-zircon-1": {
    id: 2,
    name: "Oticon Zircon 1 miniRITE T",
    category: "behind-the-ear",
    price: 122000,
    image: "https://www.radugazvukov.ru/upload/iblock/8a5/7nnm96djgygm4qqeedewiy4dxbll18ea/Zircon_miniRITE_600.jpg",
    brand: "Oticon",
    isNew: false,
    isBestseller: true,
    description: "Oticon Zircon 1 miniRITE T — современный заушный слуховой аппарат премиум-класса, обеспечивающий пользователям исключительное качество звука и комфорт использования в любой обстановке.",
    features: [
      "Технология глубокого нейронного обучения для естественного звучания",
      "Подавление шума с сохранением речевой информации",
      "Беспроводное подключение к смартфону и другим устройствам",
      "Перезаряжаемый аккумулятор с длительным сроком службы",
      "Водонепроницаемая конструкция (IP68)",
      "Поддержка приложения для смартфона для персональных настроек"
    ],
    specs: [
      { name: "Тип", value: "Заушный (miniRITE T)" },
      { name: "Класс", value: "Премиум" },
      { name: "Каналы обработки", value: "64" },
      { name: "Батарея", value: "Перезаряжаемый аккумулятор" },
      { name: "Степень потери слуха", value: "От легкой до тяжелой" },
      { name: "Беспроводное соединение", value: "Bluetooth, 2,4 ГГц" },
      { name: "Защита от влаги и пыли", value: "IP68" },
      { name: "Гарантия", value: "12 месяцев" }
    ]
  },
  "oticon-xceed-3": {
    id: 5,
    name: "Oticon Xceed 3 BTE SP",
    category: "behind-the-ear",
    price: 80000,
    image: "https://vitaurum.ru/wa-data/public/shop/products/57/76/127657/images/7092/7092.450x0.jpg",
    brand: "Oticon",
    isNew: false,
    isBestseller: true,
    description: "Oticon Xceed 3 BTE SP — мощный заушный слуховой аппарат, разработанный специально для людей с тяжелыми потерями слуха, обеспечивающий четкость речи и комфорт в сложных акустических условиях.",
    features: [
      "Технология OpenSound для доступа к 360° звукового окружения",
      "Высокая выходная мощность для тяжелых потерь слуха",
      "Адаптивное шумоподавление без искажения речи",
      "Различные программы прослушивания для разных условий",
      "Встроенная система подавления обратной связи",
      "Надежный и простой в использовании"
    ],
    specs: [
      { name: "Тип", value: "Заушный (BTE SP)" },
      { name: "Класс", value: "Средний" },
      { name: "Каналы обработки", value: "48" },
      { name: "Батарея", value: "13 тип" },
      { name: "Степень потери слуха", value: "От умеренной до глубокой" },
      { name: "Беспроводное соединение", value: "Есть" },
      { name: "Защита от влаги и пыли", value: "IP58" },
      { name: "Гарантия", value: "12 месяцев" }
    ]
  },
  "resound-key-ke277": {
    id: 1,
    name: "ReSound KEY KE277-DWH",
    category: "behind-the-ear",
    price: 40500,
    image: "https://vitaurum.ru/wa-data/public/shop/products/16/74/127416/images/7816/7816.450x0.png",
    brand: "ReSound",
    isNew: true,
    isBestseller: false,
    description: "ReSound KEY KE277-DWH — современный заушный слуховой аппарат начального уровня, предлагающий отличное соотношение цены и качества с надежной технологией для улучшения разборчивости речи.",
    features: [
      "Технология направленных микрофонов для улучшения разборчивости речи",
      "Система шумоподавления для комфортного восприятия",
      "Автоматическое переключение программ в разных звуковых условиях",
      "Компактный и эргономичный дизайн",
      "Защита от влаги и пыли",
      "Доступная цена при высоком качестве звучания"
    ],
    specs: [
      { name: "Тип", value: "Заушный (BTE)" },
      { name: "Класс", value: "Базовый" },
      { name: "Каналы обработки", value: "16" },
      { name: "Батарея", value: "312 тип" },
      { name: "Степень потери слуха", value: "От легкой до средне-тяжелой" },
      { name: "Беспроводное соединение", value: "Нет" },
      { name: "Защита от влаги и пыли", value: "IP57" },
      { name: "Гарантия", value: "12 месяцев" }
    ]
  },
  "oticon-ruby-2": {
    id: 3,
    name: "Oticon Ruby 2 BTE PP 13",
    category: "behind-the-ear",
    price: 83000,
    image: "https://vitaurum.ru/wa-data/public/shop/products/68/73/127368/images/7136/7136.450x0.png",
    brand: "Oticon",
    isNew: true,
    isBestseller: false,
    description: "Oticon Ruby 2 BTE PP 13 — эффективный заушный слуховой аппарат среднего класса, предлагающий баланс между современными технологиями и доступной ценой для комфортного слушания.",
    features: [
      "Технология шумоподавления для улучшения разборчивости речи",
      "Система защиты от свиста и обратной связи",
      "Адаптация к различным звуковым средам",
      "Компактный дизайн и удобное управление",
      "Совместимость с беспроводными аксессуарами",
      "Длительный срок службы батареи"
    ],
    specs: [
      { name: "Тип", value: "Заушный (BTE PP)" },
      { name: "Класс", value: "Средний" },
      { name: "Каналы обработки", value: "32" },
      { name: "Батарея", value: "13 тип" },
      { name: "Степень потери слуха", value: "От легкой до тяжелой" },
      { name: "Беспроводное соединение", value: "Есть" },
      { name: "Защита от влаги и пыли", value: "IP68" },
      { name: "Гарантия", value: "12 месяцев" }
    ]
  },
  "phonak-audeo-p50": {
    id: 6,
    name: "Phonak Audeo P50-312",
    category: "behind-the-ear",
    price: 126000,
    image: "https://www.radugazvukov.ru/upload/iblock/e73/wwa3mzrbty1e204dcruafye6h31fxlph/Phonak_Audeo_P-312.jpg",
    brand: "Phonak",
    isNew: true,
    isBestseller: false,
    description: "Phonak Audeo P50-312 — инновационный заушный слуховой аппарат с технологией Paradise, обеспечивающий превосходное качество звука, кристально чистую передачу речи и беспрецедентную связность с цифровыми устройствами.",
    features: [
      "Технология Paradise для более естественного и богатого звучания",
      "Универсальная связность с любыми Bluetooth-устройствами",
      "Улучшенное понимание речи в шумной обстановке",
      "Автоматическое переключение между устройствами",
      "Водостойкая конструкция для активного образа жизни",
      "Совместимость с приложением myPhonak для персональных настроек"
    ],
    specs: [
      { name: "Тип", value: "Заушный (RIC)" },
      { name: "Класс", value: "Премиум" },
      { name: "Каналы обработки", value: "16" },
      { name: "Батарея", value: "312 тип" },
      { name: "Степень потери слуха", value: "От легкой до средне-тяжелой" },
      { name: "Беспроводное соединение", value: "Bluetooth 5.0" },
      { name: "Защита от влаги и пыли", value: "IP68" },
      { name: "Гарантия", value: "12 месяцев" }
    ]
  }
};

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const { cart, addToCart } = useCart();
  const { toast } = useToast();
  const [product, setProduct] = useState<ProductData | null>(null);
  const [isInCart, setIsInCart] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    console.log("ProductId from URL:", productId);
    console.log("Available products:", Object.keys(productsDatabase));
    
    if (productId && productsDatabase[productId]) {
      console.log("Product found:", productsDatabase[productId]);
      setProduct(productsDatabase[productId]);
      
      // Set document title based on product
      const foundProduct = productsDatabase[productId];
      document.title = `Слуховой аппарат ${foundProduct.name}`;
    } else {
      console.log("Product not found for productId:", productId);
    }
  }, [productId]);

  useEffect(() => {
    if (product) {
      const productInCart = cart.find(item => item.id === product.id);
      setIsInCart(!!productInCart);
    }
  }, [cart, product]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast({
        title: "Товар добавлен в корзину",
        description: `${product.name} успешно добавлен в корзину.`,
      });
    }
  };

  if (!productId) {
    return (
      <Layout>
        <div className="container py-24 text-center">
          <h2 className="text-2xl font-bold mb-4">Неверная ссылка</h2>
          <p className="mb-4">Не указан ID товара в URL</p>
          <Link to="/catalog" className="text-brand">Вернуться в каталог</Link>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="container py-24 text-center">
          <h2 className="text-2xl font-bold mb-4">Товар не найден</h2>
          <p className="mb-4">Товар с ID "{productId}" не найден в каталоге</p>
          <p className="mb-4 text-sm text-gray-600">
            Доступные товары: {Object.keys(productsDatabase).join(", ")}
          </p>
          <Link to="/catalog" className="text-brand">Вернуться в каталог</Link>
        </div>
      </Layout>
    );
  }

  // Get display name with "Слуховой аппарат" prefix for all products
  const getDisplayName = () => {
    return `Слуховой аппарат ${product.name}`;
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <Link to="/catalog" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Назад в каталог
            </Link>
            
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-brand/5 text-brand border-brand/20">
                {product.brand}
              </Badge>
              {product.isNew && (
                <Badge className="bg-brand text-white">Новинка</Badge>
              )}
              {product.isBestseller && (
                <Badge variant="outline" className="border-brand bg-white text-brand">
                  Хит продаж
                </Badge>
              )}
            </div>
            
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl mb-2">
              {getDisplayName()}
            </h1>
            <p className="text-muted-foreground">
              {product.category === "behind-the-ear" && "Заушный слуховой аппарат"}
              {product.category === "in-the-ear" && "Внутриушной слуховой аппарат"}
              {product.category === "in-the-canal" && "Внутриканальный слуховой аппарат"}
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Цена</p>
                    <p className="text-3xl font-bold">{product.price.toLocaleString()} ₽</p>
                  </div>
                  <Button 
                    onClick={handleAddToCart}
                    disabled={isInCart}
                    className="gap-2"
                  >
                    {isInCart ? (
                      <>
                        <Check className="h-4 w-4" />
                        В корзине
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="h-4 w-4" />
                        В корзину
                      </>
                    )}
                  </Button>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Бесплатная консультация</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Индивидуальная настройка</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Гарантийное обслуживание</span>
                  </div>
                </div>
              </div>
              
              <Card>
                <CardContent className="p-0">
                  <Tabs defaultValue="description">
                    <TabsList className="w-full grid grid-cols-2">
                      <TabsTrigger value="description">Описание</TabsTrigger>
                      <TabsTrigger value="specs">Характеристики</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="description" className="p-6">
                      <p className="mb-4">{product.description}</p>
                      <h3 className="font-medium mb-3">Ключевые особенности:</h3>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-brand mt-1" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                    
                    <TabsContent value="specs" className="p-6">
                      <div className="space-y-2">
                        {product.specs.map((spec, index) => (
                          <div key={index} className="grid grid-cols-2 py-2 border-b border-gray-100 last:border-0">
                            <span className="text-muted-foreground">{spec.name}</span>
                            <span>{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Консультация по подбору и настройке</h2>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <p className="mb-4">
                Перед приобретением слухового аппарата рекомендуем записаться на консультацию к нашему специалисту. 
                Это поможет подобрать модель, которая идеально подойдет под ваши потребности и степень снижения слуха.
              </p>
              <div className="flex justify-end">
                <Button asChild className="rounded-full">
                  <Link to="/contacts">Записаться на консультацию</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
