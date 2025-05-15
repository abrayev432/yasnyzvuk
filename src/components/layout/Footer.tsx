
import { Link } from "react-router-dom";
import { Headphones, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container px-4 py-12 mx-auto md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-brand">
              <Headphones className="h-6 w-6" />
              <span className="text-xl font-bold">Ясный звук</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Специализированный магазин слуховых аппаратов с профессиональной консультацией и подбором.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase text-foreground">Каталог</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/catalog/behind-the-ear" className="text-muted-foreground hover:text-brand transition">
                  Заушные слуховые аппараты
                </Link>
              </li>
              <li>
                <Link to="/catalog/in-the-ear" className="text-muted-foreground hover:text-brand transition">
                  Внутриушные слуховые аппараты
                </Link>
              </li>
              <li>
                <Link to="/catalog/in-the-canal" className="text-muted-foreground hover:text-brand transition">
                  Внутриканальные слуховые аппараты
                </Link>
              </li>
              <li>
                <Link to="/catalog/accessories" className="text-muted-foreground hover:text-brand transition">
                  Аксессуары
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase text-foreground">Информация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-brand transition">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-brand transition">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-muted-foreground hover:text-brand transition">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-muted-foreground hover:text-brand transition">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase text-foreground">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex">
                <MapPin className="mr-2 h-5 w-5 text-brand" />
                <span className="text-muted-foreground">ул. Примерная, д. 123, Москва, Россия</span>
              </li>
              <li className="flex">
                <Phone className="mr-2 h-5 w-5 text-brand" />
                <a href="tel:+78001234567" className="text-muted-foreground hover:text-brand transition">
                  8 (800) 123-45-67
                </a>
              </li>
              <li className="flex">
                <Mail className="mr-2 h-5 w-5 text-brand" />
                <a href="mailto:info@yasnyzvuk.ru" className="text-muted-foreground hover:text-brand transition">
                  info@yasnyzvuk.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between mt-12 pt-8 border-t border-gray-200 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ясный звук. Все права защищены.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-xs text-muted-foreground">
              Разработано с заботой о клиентах
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
