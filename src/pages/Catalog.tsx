import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ShoppingCart, Star, Volume2, Headphones, Settings, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import { useEffect } from "react";

const Catalog = () => {
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 1,
      name: "Слуховой аппарат Oticon More 1",
      description: "Премиальный слуховой аппарат с искусственным интеллектом",
      price: 120000,
      image: "/lovable-uploads/0a999559-8437-4921-8a81-56911ef98994.jpg",
      brand: "Oticon",
      category: "Слуховые аппараты",
      rating: 4.5,
      reviews: 62,
      discount: 10,
      isNew: true,
      features: ["BrainHearing™", "Polaris™ платформа", "Bluetooth®"],
    },
    {
      id: 2,
      name: "Слуховой аппарат Phonak Audéo Paradise P90",
      description: "Современный слуховой аппарат с широкими возможностями",
      price: 110000,
      image: "/lovable-uploads/0a999559-8437-4921-8a81-56911ef98994.jpg",
      brand: "Phonak",
      category: "Слуховые аппараты",
      rating: 4.2,
      reviews: 48,
      discount: 5,
      isNew: false,
      features: ["AutoSense OS™", "RogerDirect™", "myPhonak app"],
    },
    {
      id: 3,
      name: "Слуховой аппарат Signia Xperience 7X",
      description: "Слуховой аппарат с технологией обработки звука в реальном времени",
      price: 115000,
      image: "/lovable-uploads/0a999559-8437-4921-8a81-56911ef98994.jpg",
      brand: "Signia",
      category: "Слуховые аппараты",
      rating: 4.7,
      reviews: 75,
      discount: 0,
      isNew: true,
      features: ["Acoustic-Motion Sensors", "Own Voice Processing", "Signia app"],
    },
    {
      id: 4,
      name: "Аксессуар Oticon ConnectClip",
      description: "Многофункциональный аксессуар для слуховых аппаратов Oticon",
      price: 15000,
      image: "/lovable-uploads/0a999559-8437-4921-8a81-56911ef98994.jpg",
      brand: "Oticon",
      category: "Аксессуары",
      rating: 4.3,
      reviews: 32,
      discount: 0,
      isNew: false,
      features: ["Микрофон", "Пульт ДУ", "Bluetooth®"],
    },
    {
      id: 5,
      name: "Батарейки для слуховых аппаратов Rayovac ProLine",
      description: "Надежные батарейки для слуховых аппаратов",
      price: 1500,
      image: "/lovable-uploads/0a999559-8437-4921-8a81-56911ef98994.jpg",
      brand: "Rayovac",
      category: "Батарейки",
      rating: 4.6,
      reviews: 58,
      discount: 0,
      isNew: false,
      features: ["Тип 13", "60 штук в упаковке", "Долгий срок службы"],
    },
    {
      id: 6,
      name: "Средство для чистки слуховых аппаратов Audinell",
      description: "Эффективное средство для ухода за слуховыми аппаратами",
      price: 2000,
      image: "/lovable-uploads/0a999559-8437-4921-8a81-56911ef98994.jpg",
      brand: "Audinell",
      category: "Аксессуары",
      rating: 4.4,
      reviews: 41,
      discount: 0,
      isNew: false,
      features: ["Спрей", "Салфетки", "Щеточка"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <Layout>
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 py-16 md:py-24 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">
              Каталог товаров
            </h1>
            <p className="text-xl text-muted-foreground">
              Широкий выбор слуховых аппаратов и аксессуаров от ведущих
              производителей
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="w-full"
                variants={cardVariants}
                whileHover="hover"
              >
                <Card className="h-full flex flex-col">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-semibold leading-none line-clamp-1">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <Link to={`/catalog/${product.id}`}>
                    <div className="relative overflow-hidden rounded-md aspect-video">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover w-full h-full"
                      />
                      {product.discount ? (
                        <Badge className="absolute top-2 left-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                          Скидка {product.discount}%
                        </Badge>
                      ) : null}
                      {product.isNew ? (
                        <Badge className="absolute top-2 right-2 bg-blue-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                          Новинка
                        </Badge>
                      ) : null}
                    </div>
                  </Link>
                  <CardContent className="px-4 py-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium">
                          {product.rating}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          ({product.reviews} отзывов)
                        </span>
                      </div>
                      <div className="text-xl font-bold">
                        {product.price.toLocaleString("ru-RU")} ₽
                      </div>
                      <ul className="list-disc pl-4 text-sm text-muted-foreground">
                        {product.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <Button
                        size="sm"
                        className="rounded-full"
                        onClick={() => addToCart(product)}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        В корзину
                      </Button>
                      <Link to={`/catalog/${product.id}`}>
                        <Button variant="outline" size="sm" className="rounded-full">
                          Подробнее
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Catalog;
