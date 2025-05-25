
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Имя должно содержать не менее 2 символов"),
  email: z.string().email("Введите корректный email"),
  phone: z.string().min(6, "Введите корректный номер телефона"),
});

type FormValues = z.infer<typeof formSchema>;

const Checkout = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { cart, totalPrice, clearCart } = useCart();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);

    try {
      // Формируем данные о товарах в корзине
      const orderItems = cart.map(item => `${item.name} - ${item.quantity} шт. × ${item.price.toLocaleString()} ₽`).join('\n');
      
      // Создаем mailto ссылку для отправки заказа
      const subject = `Новый заказ от ${data.name}`;
      const body = `
Данные покупателя:
Имя: ${data.name}
Email: ${data.email}
Телефон: ${data.phone}

Заказанные товары:
${orderItems}

Общая сумма: ${totalPrice.toLocaleString()} ₽

---
Отправлено с сайта yasnyzvuk.ru
      `.trim();

      const mailtoLink = `mailto:abrayev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Открываем почтовый клиент
      window.location.href = mailtoLink;
      
      // Очищаем форму и корзину
      form.reset();
      clearCart();
      toast({
        title: "Заказ оформлен",
        description: "Ваш почтовый клиент должен открыться для отправки заказа",
      });
    } catch (error) {
      console.error("Error preparing order email:", error);
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при оформлении заказа",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (cart.length === 0) {
    return (
      <Layout>
        <div className="bg-gray-50 py-12">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h1 className="text-3xl font-bold mb-4">Корзина пуста</h1>
              <p className="text-muted-foreground mb-6">
                Добавьте товары в корзину для оформления заказа
              </p>
              <Button asChild>
                <a href="/catalog">Перейти в каталог</a>
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl mb-8">
              Оформить заказ
            </h1>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Форма заказа */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6">Данные покупателя</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Имя *</FormLabel>
                          <FormControl>
                            <Input placeholder="Введите ваше имя" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Электронная почта *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Телефон *</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+7 (___) ___-__-__" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={isSubmitting} className="w-full">
                      {isSubmitting ? "Оформление..." : "Оформить заказ"}
                    </Button>
                  </form>
                </Form>
              </div>

              {/* Сводка заказа */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6">Ваш заказ</h2>
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center py-2 border-b">
                      <div>
                        <h3 className="font-medium text-sm">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.quantity} шт. × {item.price.toLocaleString()} ₽
                        </p>
                      </div>
                      <div className="font-medium">
                        {(item.price * item.quantity).toLocaleString()} ₽
                      </div>
                    </div>
                  ))}
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Итого:</span>
                      <span>{totalPrice.toLocaleString()} ₽</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium mb-2">Информация о доставке</h3>
                  <p className="text-sm text-muted-foreground">
                    После оформления заказа наш менеджер свяжется с вами для уточнения деталей доставки и оплаты.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
