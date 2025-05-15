
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
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
                  <a href="tel:+78001234567" className="hover:text-brand">
                    8 (800) 123-45-67
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
                <p>Пн-Сб: 10:00 - 20:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Отправить сообщение</h3>
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Имя
                  </label>
                  <Input id="name" placeholder="Введите имя" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Телефон
                  </label>
                  <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="email@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  placeholder="Напишите ваш вопрос или комментарий"
                  className="min-h-[120px]"
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit" className="w-full md:w-auto">
                  Отправить
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Нажимая кнопку "Отправить", вы соглашаетесь с нашей{" "}
                <a href="/privacy" className="text-brand hover:underline">
                  политикой конфиденциальности
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
