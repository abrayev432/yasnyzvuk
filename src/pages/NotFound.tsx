
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container flex flex-col items-center justify-center px-4 py-16 md:py-32">
        <h1 className="text-6xl font-bold text-brand mb-6">404</h1>
        <p className="text-xl text-gray-600 mb-8 text-center">
          Упс! Страница, которую вы ищете, не существует.
        </p>
        <Button asChild size="lg">
          <Link to="/">Вернуться на главную</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
