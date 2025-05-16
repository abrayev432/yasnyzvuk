
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
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            Отзывы наших клиентов
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Узнайте, что говорят о нас люди, которые уже улучшили качество своей жизни
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="border-none shadow-xl overflow-hidden">
              <div className="h-2 bg-brand" />
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`h-5 w-5 ${index < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="mb-6 text-gray-600 italic text-balance">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-14 w-14 rounded-full object-cover border-2 border-white shadow-md mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
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
