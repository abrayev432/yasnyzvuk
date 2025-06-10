
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Battery, Check, Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const BatteryTesterDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const product = {
    id: 106,
    name: "Тестер для батареек",
    category: "batteries",
    price: 1300,
    image: "/lovable-uploads/7f807c40-77a9-4ad5-b69b-cd5f2ade44e1.png",
    brand: "",
    description: "Цифровой тестер для проверки заряда батареек слуховых аппаратов",
    inStock: true
  };

  const features = [
    "Цифровой дисплей с четким отображением уровня заряда",
    "Совместимость со всеми типами батареек для слуховых аппаратов",
    "Компактный размер для удобного хранения",
    "Простота использования - одним нажатием",
    "Долговечная конструкция",
    "Брелок в комплекте для удобного ношения"
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast({
      title: "Товар добавлен в корзину",
      description: `${product.name} (${quantity} шт.) успешно добавлен в корзину.`,
    });
  };

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="aspect-square rounded-xl overflow-hidden bg-gray-50">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-brand/5 text-brand border-brand/20">
                <Battery className="h-3 w-3 mr-1" />
                Батарейки
              </Badge>
            </div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-muted-foreground text-lg mb-4">
              {product.description}
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-3xl font-bold text-brand">
              {product.price.toLocaleString()} ₽
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <label htmlFor="quantity" className="text-sm font-medium">
                  Количество:
                </label>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border rounded px-3 py-1"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <Button
              onClick={handleAddToCart}
              size="lg"
              className="w-full gap-2"
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-5 w-5" />
              {product.inStock ? "Добавить в корзину" : "Нет в наличии"}
            </Button>
          </div>

          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-brand" />
                Особенности
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BatteryTesterDetail;
