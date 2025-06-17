
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Как правильно выбрать слуховой аппарат: полное руководство",
      excerpt: "Подробное руководство по выбору слухового аппарата с учетом степени потери слуха, образа жизни и бюджета.",
      image: "/lovable-uploads/modern-hearing-aid.jpg",
      date: "15 июня 2024",
      readTime: "5 мин",
      category: "Руководства",
      slug: "kak-vybrat-slukhovoy-apparat"
    },
    {
      id: 2,
      title: "Цифровые vs аналоговые слуховые аппараты: в чем разница?",
      excerpt: "Сравнение цифровых и аналоговых слуховых аппаратов, их преимущества и недостатки.",
      image: "/lovable-uploads/behind-ear-hearing-aid.jpg",
      date: "10 июня 2024",
      readTime: "4 мин",
      category: "Технологии",
      slug: "cifrovye-vs-analogovye"
    },
    {
      id: 3,
      title: "Уход за слуховыми аппаратами: советы экспертов",
      excerpt: "Практические советы по ежедневному уходу за слуховым аппаратом для продления срока его службы.",
      image: "/lovable-uploads/hearing-specialist.jpg",
      date: "5 июня 2024",
      readTime: "3 мин",
      category: "Уход",
      slug: "ukhod-za-slukhovymi-apparatami"
    },
    {
      id: 4,
      title: "Шум в ушах (тиннитус): причины и методы лечения",
      excerpt: "Все о шуме в ушах: причины возникновения, диагностика и современные методы лечения тиннитуса.",
      image: "/lovable-uploads/tinnitus-masking-article.png",
      date: "1 июня 2024",
      readTime: "6 мин",
      category: "Здоровье",
      slug: "tinnitus-prichiny-lechenie"
    },
    {
      id: 5,
      title: "Слуховые аппараты для детей: особенности выбора",
      excerpt: "Как выбрать слуховой аппарат для ребенка: особенности детской аудиологии и рекомендации специалистов.",
      image: "/lovable-uploads/in-ear-hearing-aid.jpg",
      date: "28 мая 2024",
      readTime: "5 мин",
      category: "Дети",
      slug: "slukhovye-apparaty-dlya-detey"
    },
    {
      id: 6,
      title: "Беспроводные технологии в слуховых аппаратах",
      excerpt: "Обзор современных беспроводных технологий в слуховых аппаратах: Bluetooth, FM-системы, индукционная связь.",
      image: "/lovable-uploads/in-canal-hearing-aid.jpg",
      date: "25 мая 2024",
      readTime: "4 мин",
      category: "Технологии",
      slug: "besprovodnye-tekhnologii"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Блог о слуховых аппаратах - Ясный звук",
    "description": "Статьи о слуховых аппаратах, советы по выбору и уходу от экспертов",
    "url": "https://yasniy-zvuk.ru/blog",
    "blogPost": articles.map(article => ({
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.excerpt,
      "datePublished": article.date,
      "url": `https://yasniy-zvuk.ru/blog/${article.slug}`,
      "author": {
        "@type": "Organization",
        "name": "Ясный звук"
      }
    }))
  };

  return (
    <Layout>
      <SEOHead
        title="Блог о слуховых аппаратах - статьи и советы экспертов"
        description="Полезные статьи о слуховых аппаратах: выбор, настройка, уход. Советы от экспертов магазина Ясный звук для улучшения качества слуха."
        keywords="слуховые аппараты статьи, как выбрать слуховой аппарат, уход за слуховыми аппаратами, тиннитус, потеря слуха"
        structuredData={structuredData}
        url="https://yasniy-zvuk.ru/blog"
      />
      
      <div className="bg-gray-50 py-12">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
              Блог о слуховых аппаратах
            </h1>
            <p className="text-muted-foreground max-w-3xl">
              Экспертные статьи о слуховых аппаратах, советы по выбору и уходу, 
              последние новости в области аудиологии от специалистов магазина "Ясный звук".
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-brand text-white">
                    {article.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${article.slug}`}
                    className="inline-flex items-center text-brand hover:text-brand/80 font-medium"
                  >
                    Читать далее
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Нужна персональная консультация?</h2>
            <p className="text-muted-foreground mb-6">
              Наши специалисты помогут подобрать слуховой аппарат именно для вас
            </p>
            <Link 
              to="/contacts"
              className="inline-flex items-center justify-center px-8 py-3 bg-brand text-white rounded-lg hover:bg-brand/90 transition-colors"
            >
              Записаться на консультацию
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
