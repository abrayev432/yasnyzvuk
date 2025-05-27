
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Calendar, Megaphone, CreditCard, Brain, Heart, Headphones, Ear } from "lucide-react";

const newsItems = [
  {
    id: 6,
    title: "Слуховые аппараты: возвращение в мир звуков",
    description: "Слух – одно из важнейших чувств, позволяющее нам общаться, наслаждаться музыкой, ощущать безопасность и просто полноценно жить. Потеря слуха, к сожалению, затрагивает миллионы людей по всему миру, значительно снижая качество их жизни.",
    date: "27 мая 2025",
    icon: Ear,
    category: "Образование"
  },
  {
    id: 1,
    title: "Мы принимаем электронные сертификаты от социального фонда России",
    description: "Теперь вы можете использовать электронные сертификаты от социального фонда России для приобретения слуховых аппаратов в нашем центре.",
    date: "25 мая 2025",
    icon: CreditCard,
    category: "Сертификаты",
    image: "https://avatars.mds.yandex.net/i?id=bc1626da9b2f22a21eb6c1d80f5ca345a324af44-5222019-images-thumbs&n=13"
  },
  {
    id: 2,
    title: "Верни радость звука",
    description: "Новая программа реабилитации слуха для людей с нарушениями слуха. Индивидуальный подход и современные технологии.",
    date: "15 мая 2025",
    icon: Megaphone,
    category: "Программа"
  },
  {
    id: 3,
    title: "Oticon Real™ - революция в мире слуховых аппаратов",
    description: "Новая линейка слуховых аппаратов Oticon Real™ предлагает уникальную технологию Deep Neural Network (DNN), которая обучена на более чем 12 миллионах реальных звуковых сценариев. Это позволяет обеспечить более естественное и четкое восприятие звука в любых условиях.",
    date: "24 мая 2025",
    icon: Headphones,
    category: "Новинки",
    image: "https://i.ibb.co/b6SqRvL/oticon-logo.png"
  },
  {
    id: 4,
    title: "Искусственный интеллект в слуховых аппаратах: революция в области аудиологии",
    description: "Современные слуховые аппараты с ИИ автоматически адаптируются к окружающей среде, фильтруют шум и улучшают качество звука в режиме реального времени.",
    date: "24 мая 2025",
    icon: Brain,
    category: "Технологии"
  },
  {
    id: 5,
    title: "Связь между потерей слуха и здоровьем сердца: новые исследования",
    description: "Ученые обнаружили прямую связь между нарушениями слуха и сердечно-сосудистыми заболеваниями. Своевременное лечение потери слуха может снизить риск развития болезней сердца.",
    date: "24 мая 2025",
    icon: Heart,
    category: "Здоровье"
  }
];

const NewsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mb-4">
            Новости и события
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Следите за последними новостями нашего центра слуха и новыми поступлениями
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {newsItems.map((item) => (
              <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  {item.image && (
                    <div className="w-full h-48 overflow-hidden rounded-t-lg">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-10 w-10 rounded-full bg-brand/10 flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-brand" />
                      </div>
                      <span className="text-xs font-medium text-brand bg-brand/10 px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                    <CardDescription className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {item.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default NewsSection;
