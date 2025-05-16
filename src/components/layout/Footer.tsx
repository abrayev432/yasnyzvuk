
import { Link } from "react-router-dom";
import { Headphones, Mail, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 py-16 mx-auto md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-white">
              <Headphones className="h-6 w-6 text-brand" />
              <span className="text-xl font-bold">Ясный звук</span>
            </Link>
            <p className="text-sm text-gray-300">
              Специализированный магазин слуховых аппаратов с профессиональной консультацией и подбором.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-medium uppercase text-gray-400">Каталог</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/catalog/behind-the-ear" className="text-gray-300 hover:text-brand transition-colors">
                  Заушные слуховые аппараты
                </Link>
              </li>
              <li>
                <Link to="/catalog/in-the-ear" className="text-gray-300 hover:text-brand transition-colors">
                  Внутриушные слуховые аппараты
                </Link>
              </li>
              <li>
                <Link to="/catalog/in-the-canal" className="text-gray-300 hover:text-brand transition-colors">
                  Внутриканальные слуховые аппараты
                </Link>
              </li>
              <li>
                <Link to="/catalog/accessories" className="text-gray-300 hover:text-brand transition-colors">
                  Аксессуары
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-medium uppercase text-gray-400">Информация</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-brand transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-brand transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-gray-300 hover:text-brand transition-colors">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-300 hover:text-brand transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-medium uppercase text-gray-400">Контакты</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex">
                <MapPin className="mr-3 h-5 w-5 text-brand flex-shrink-0" />
                <span className="text-gray-300">ул. Люблинская д. 100 кор. 2, Москва, Россия</span>
              </li>
              <li className="flex">
                <Phone className="mr-3 h-5 w-5 text-brand flex-shrink-0" />
                <a href="tel:+74957990926" className="text-gray-300 hover:text-brand transition-colors">
                  +7 (495) 799-09-26
                </a>
              </li>
              <li className="flex">
                <Mail className="mr-3 h-5 w-5 text-brand flex-shrink-0" />
                <a href="mailto:info@yasnyzvuk.ru" className="text-gray-300 hover:text-brand transition-colors">
                  info@yasnyzvuk.ru
                </a>
              </li>
              <li className="flex">
                <Clock className="mr-3 h-5 w-5 text-brand flex-shrink-0" />
                <div className="text-gray-300">
                  <p>пн.-сб.: 10:00-20:00</p>
                  <p>вс.: выходной</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between mt-16 pt-8 border-t border-gray-800 md:flex-row">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Ясный звук. Все права защищены.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-xs text-gray-500">
              Разработано с заботой о клиентах
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
