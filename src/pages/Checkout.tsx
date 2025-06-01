
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Trash2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { cart, removeFromCart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Clear the cart
      clearCart();

      // Show a success toast
      toast.success("Заказ успешно оформлен!");

      // Reset the form
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Не удалось оформить заказ. Пожалуйста, попробуйте еще раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cart.length === 0) {
    return (
      <Layout>
        <div className="container py-20 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold mb-4">Ваша корзина пуста</h2>
          <p className="text-muted-foreground mb-8">Пожалуйста, добавьте товары в корзину, чтобы оформить заказ.</p>
          <Button asChild size="lg" className="rounded-full">
            <Link to="/catalog">Перейти в каталог</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-8">Оформление заказа</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Ваш заказ</CardTitle>
              <CardDescription>Проверьте детали вашего заказа.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">Количество: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <p className="font-medium">{item.price * item.quantity} ₽</p>
                    <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Итого</span>
                <span>{calculateTotal()} ₽</span>
              </div>
              <Link to="/catalog" className="text-sm text-muted-foreground hover:text-brand flex items-center gap-1">
                <ArrowLeft className="w-4 h-4" />
                Продолжить покупки
              </Link>
            </CardContent>
          </Card>

          {/* Contact Information Form */}
          <Card>
            <CardHeader>
              <CardTitle>Контактная информация</CardTitle>
              <CardDescription>Введите ваши контактные данные для оформления заказа.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="address">Адрес</Label>
                  <Input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="city">Город</Label>
                  <Input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="postalCode">Почтовый индекс</Label>
                  <Input type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
                </div>
                <Button disabled={isSubmitting} className="w-full rounded-full">
                  {isSubmitting ? "Оформление..." : "Оформить заказ"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
