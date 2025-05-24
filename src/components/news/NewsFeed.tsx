
import { Calendar, MessageSquare, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface NewsPost {
  id: number;
  title: string;
  content: string;
  date: string;
  category: string;
  image?: string;
}

const NewsFeed = () => {
  const newsData: NewsPost[] = [
    {
      id: 1,
      title: "Верните радость ясного звука в вашу жизнь",
      content: "Современные слуховые аппараты помогают тысячам людей каждый день возвращать полноценное восприятие звуков. Наши специалисты проводят индивидуальный подбор для каждого клиента.",
      date: "2025-01-20",
      category: "Здоровье",
      image: "/lovable-uploads/d9416cbc-5ba5-460d-9eb1-d80d296aec7f.jpg"
    },
    {
      id: 2,
      title: "Новое поступление: Современные цифровые слуховые аппараты",
      content: "В нашем магазине появились новейшие модели цифровых слуховых аппаратов от ведущих мировых производителей. Улучшенная технология шумоподавления и беспроводное подключение.",
      date: "2025-01-18",
      category: "Новинки",
      image: "/lovable-uploads/d9416cbc-5ba5-460d-9eb1-d80d296aec7f.jpg"
    },
    {
      id: 3,
      title: "Объединение чатов: Новая система поддержки клиентов",
      content: "Мы объединили все каналы связи в единую группу поддержки. Теперь вы можете связаться с нашими специалистами через WhatsApp, Telegram или онлайн-чат - все запросы обрабатываются единой командой.",
      date: "2025-01-15",
      category: "Сервис"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Здоровье":
        return "bg-green-100 text-green-800";
      case "Новинки":
        return "bg-blue-100 text-blue-800";
      case "Сервис":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-center mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Новости и обновления
            </h2>
            <p className="text-gray-600 md:text-xl max-w-2xl">
              Следите за последними новостями, поступлениями товаров и улучшениями наших услуг
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsData.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {post.image && (
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge className={getCategoryColor(post.category)}>
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('ru-RU')}
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {post.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-brand/5 border-brand/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-brand/10 p-3 rounded-full">
                  <Users className="w-8 h-8 text-brand" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand">
                Единая группа поддержки клиентов
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Все наши чаты объединены в одну команду поддержки. Независимо от того, 
                пишете ли вы в WhatsApp, Telegram или используете онлайн-чат на сайте - 
                вас обслуживают одни и те же квалифицированные специалисты.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  WhatsApp
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  Telegram
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  Онлайн-чат
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsFeed;
