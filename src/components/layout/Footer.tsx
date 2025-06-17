import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Компания</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-foreground">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-muted-foreground hover:text-foreground">
                  Новости
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground">
                  Блог
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Каталог</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog" className="text-muted-foreground hover:text-foreground">
                  Все товары
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=behind-the-ear" className="text-muted-foreground hover:text-foreground">
                  Заушные аппараты
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=in-the-ear" className="text-muted-foreground hover:text-foreground">
                  Внутриушные аппараты
                </Link>
              </li>
              <li>
                <Link to="/accessories" className="text-muted-foreground hover:text-foreground">
                  Аксессуары
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Помощь</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-foreground">
                  Частые вопросы
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-muted-foreground hover:text-foreground">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-muted-foreground hover:text-foreground">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                г. Москва
              </li>
              <li>
                <a href="tel:+74957990926" className="text-muted-foreground hover:text-foreground">
                  +7 (495) 799-09-26
                </a>
              </li>
              <li className="text-muted-foreground">
                Пн-Пт: 9:00-18:00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 py-4 border-t text-center text-muted-foreground">
          &copy; {currentYear} Ясный звук. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
