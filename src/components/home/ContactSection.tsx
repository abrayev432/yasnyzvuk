import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";
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
  phone: z.string().min(6, "Введите корректный номер телефона"),
  email: z.string().email("Введите корректный email"),
  message: z.string().min(5, "Сообщение должно содержать не менее 5 символов"),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);

    try {
      // Создаем mailto ссылку для отправки email
      const subject = `Новое обращение с сайта от ${data.name}`;
      const body = `
Имя: ${data.name}
Телефон: ${data.phone}
Email: ${data.email}

Сообщение:
${data.message}

---
Отправлено с сайта yasnyzvuk.ru
      `.trim();

      const mailtoLink = `mailto:info@yasnyzvuk.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Открываем почтовый клиент
      window.location.href = mailtoLink;
      
      // Очищаем форму и показываем сообщение об успехе
      form.reset();
      toast({
        title: "Сообщение подготовлено",
        description: "Ваш почтовый клиент должен открыться для отправки сообщения",
      });
    } catch (error) {
      console.error("Error preparing email:", error);
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при подготовке сообщения",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Свяжитесь с нами
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Остались вопросы? Мы с радостью на них ответим
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                <MapPin className="h-6 w-6 text-brand" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Адрес</h3>
                <address className="not-italic text-muted-foreground mt-1">
                  ул. Люблинская д. 100 кор. 2<br />
                  Москва, Россия
                </address>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                <Phone className="h-6 w-6 text-brand" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Телефон</h3>
                <p className="text-muted-foreground mt-1">
                  <a href="tel:+74957990926" className="hover:text-brand">
                    +7 (495) 799-09-26
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                <Mail className="h-6 w-6 text-brand" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-muted-foreground mt-1">
                  <a href="mailto:info@yasnyzvuk.ru" className="hover:text-brand">
                    info@yasnyzvuk.ru
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Часы работы</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Пн-Сб: 10:00 - 19:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Отправить сообщение</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Имя</FormLabel>
                        <FormControl>
                          <Input placeholder="Введите имя" {...field} />
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
                        <FormLabel>Телефон</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+7 (___) ___-__-__" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Сообщение</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Напишите ваш вопрос или комментарий"
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end">
                  <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                    {isSubmitting ? "Отправка..." : "Отправить"}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Нажимая кнопку "Отправить", вы соглашаетесь с нашей{" "}
                  <a href="/privacy" className="text-brand hover:underline">
                    политикой конфиденциальности
                  </a>
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
