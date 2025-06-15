
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Check,
  ShoppingCart,
  Package,
  ShieldCheck,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { accessories, Accessory } from "@/data/accessories";

const AccessoryDetail = () => {
  const { accessoryId } = useParams<{ accessoryId: string }>();
  const { cart, addToCart } = useCart();
  const { toast } = useToast();
  const [accessory, setAccessory] = useState<Accessory | null>(null);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    if (accessoryId) {
      const foundAccessory = accessories.find(
        (acc) => acc.id.toString() === accessoryId
      );
      setAccessory(foundAccessory || null);
    }
  }, [accessoryId]);

  useEffect(() => {
    if (accessory) {
      const itemInCart = cart.find((item) => item.id === accessory.id);
      setIsInCart(!!itemInCart);
    }
  }, [cart, accessory]);

  const handleAddToCart = () => {
    if (accessory) {
      addToCart(accessory);
      toast({
        title: "Товар добавлен в корзину",
        description: `${accessory.name} успешно добавлен в корзину.`,
      });
    }
  };

  if (!accessoryId) {
    return (
      <Layout>
        <div className="container py-24 text-center">
          <h2 className="text-2xl font-bold mb-4">Неверная ссылка</h2>
          <p className="mb-4">Не указан ID товара в URL</p>
          <Link to="/accessories" className="text-brand">Вернуться в каталог аксессуаров</Link>
        </div>
      </Layout>
    );
  }

  if (!accessory) {
    return (
      <Layout>
        <div className="container py-24 text-center">
          <h2 className="text-2xl font-bold mb-4">Аксессуар не найден</h2>
          <p className="mb-4">Товар с ID "{accessoryId}" не найден.</p>
          <Link to="/accessories" className="text-brand">Вернуться в каталог аксессуаров</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <Link to="/accessories" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Назад к аксессуарам
            </Link>
            
            <div className="flex items-center gap-2 mb-2">
              {accessory.brand && (
                <Badge variant="outline" className="bg-brand/5 text-brand border-brand/20">
                  {accessory.brand}
                </Badge>
              )}
            </div>
            
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl mb-2">
              {accessory.name}
            </h1>
            <p className="text-muted-foreground">
              {accessory.category === "batteries" && "Батарейки для слуховых аппаратов"}
              {accessory.category === "care" && "Средства по уходу"}
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                <img 
                  src={accessory.image} 
                  alt={accessory.name} 
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Цена</p>
                    <p className="text-3xl font-bold">{accessory.price.toLocaleString()} ₽</p>
                  </div>
                  <Button 
                    onClick={handleAddToCart}
                    disabled={isInCart || !accessory.inStock}
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
                        {accessory.inStock ? "В корзину" : "Нет в наличии"}
                      </>
                    )}
                  </Button>
                </div>
                
                <div className="text-muted-foreground mb-6">
                    <p>{accessory.description}</p>
                </div>

                <div className="space-y-3 text-sm border-t pt-6">
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-green-500" />
                    <span>{accessory.inStock ? "В наличии" : "Нет в наличии"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-green-500" />
                    <span>Оригинальный товар</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AccessoryDetail;
