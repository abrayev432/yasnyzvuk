import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 py-16 mx-auto md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/73734014-4b6a-42ea-ba93-6269c3768514.png" 
                alt="Ясный звук" 
                className="h-20 w-auto" 
              />
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
                  <p>пн.-сб.: 10:00-19:00</p>
                  <p>вс.: выходной</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Мы в социальных сетях</h3>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-brand transition-colors rounded-full"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-brand transition-colors rounded-full"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-brand transition-colors rounded-full"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between pt-8 border-t border-gray-800 md:flex-row">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Ясный звук. Все права защищены.
          </p>
          <div className="mt-4 md:mt-0 flex flex-col items-center md:items-end">
            <p className="text-xs text-gray-500 mb-2">
              Разработано с заботой о клиентах
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500">Принимаем к оплате:</span>
              <div className="flex space-x-2">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/200px-MasterCard_Logo.svg.png" 
                  alt="Mastercard" 
                  className="h-6 w-auto"
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" 
                  alt="Visa" 
                  className="h-6 w-auto"
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Mir-logo.svg/200px-Mir-logo.svg.png" 
                  alt="Мир" 
                  className="h-6 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
