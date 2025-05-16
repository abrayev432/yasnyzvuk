
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Анна Петрова",
    text: "Благодаря слуховому аппарату, подобранному специалистами магазина, я снова могу наслаждаться разговорами с близкими. Очень благодарна за внимательный подход и грамотную консультацию!",
    rating: 5,
    image: "/assets/images/testimonial-woman-1.jpg",
  },
  {
    name: "Иван Соколов",
    text: "Долго не решался на слуховой аппарат, но после консультации в 'Ясном звуке' понял, что зря откладывал. Аппарат почти незаметен, а качество звука превзошло все ожидания.",
    rating: 5,
    image: "/assets/images/testimonial-man-1.jpg",
  },
  {
    name: "Елена Николаева",
    text: "Удобно, что в магазине можно не только купить аппарат, но и пройти аудиометрию. Специалисты помогли подобрать модель точно под мои потребности. Очень довольна обслуживанием!",
    rating: 4,
    image: "/assets/images/testimonial-woman-2.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Отзывы наших клиентов
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Узнайте, что говорят о нас люди, которые уже улучшили качество своей жизни
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`h-5 w-5 ${index < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="mb-6 text-gray-600 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">Клиент</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
