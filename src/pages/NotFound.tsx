
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { AlertCircle, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container flex flex-col items-center justify-center px-4 py-16 md:py-32 min-h-[60vh]">
        <div className="text-center space-y-6 max-w-md">
          <div className="flex justify-center">
            <AlertCircle className="h-24 w-24 text-brand/70" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-brand mb-6">404</h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Страница не найдена
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Упс! Страница, которую вы ищете, не существует или была перемещена.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="flex items-center gap-2">
              <Link to="/">
                <Home className="h-4 w-4" />
                Вернуться на главную
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <Link to="/catalog">
                Перейти в каталог
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            <p>Если вы считаете, что это ошибка, свяжитесь с нами:</p>
            <a 
              href="tel:+74957990926" 
              className="text-brand hover:underline font-medium"
            >
              +7 (495) 799-09-26
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
