
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Phone, Menu, X, MessageCircle, ShoppingCart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CartModal } from "@/components/cart/CartModal";
import ChatModal from "../chat/ChatModal";

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const navigation = [
    {
      name: "УСЛУГИ",
      href: "/services"
    },
    {
      name: "О КОМПАНИИ",
      href: "/about"
    },
    {
      name: "СТАТЬИ",
      href: "/news"
    }
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Верхняя полоса с контактами */}
      <div className="bg-gray-50 border-b border-gray-200 py-2">
        <div className="container flex items-center justify-between px-4 md:px-6 text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="h-4 w-4 text-brand" />
              <span>Выберите город</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:block text-gray-600">
              Для всех регионов
            </div>
            <a href="tel:+74993941797" className="flex items-center gap-2 text-gray-800 font-medium hover:text-brand">
              <Phone className="h-4 w-4" />
              +7 499 394-17-97
            </a>
            <div className="hidden md:block text-gray-500 text-xs">
              Звонить с ПН по СБ с 10:00 до 18:00
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <ShoppingCart className="h-4 w-4" />
              <span className="text-brand font-medium">0 шт.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Основная навигация */}
      <header className={`sticky top-0 z-40 w-full bg-white transition-all ${isScrolled ? "shadow-md" : "border-b border-gray-200"}`}>
        <div className="container flex items-center justify-between px-4 md:px-6 py-4">
          <button onClick={handleLogoClick} className="flex items-center gap-2 cursor-pointer">
            <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">ЯЗ</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800">Ясный звук</span>
              <span className="text-xs text-brand">оживляем тишину</span>
            </div>
          </button>

          <nav className="hidden lg:flex items-center space-x-6">
            {/* Кнопка каталог в стиле скриншота с brand цветом */}
            <Button asChild className="bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-all duration-300">
              <Link to="/catalog" className="flex items-center gap-2">
                <Menu className="h-4 w-4" />
                КАТАЛОГ
              </Link>
            </Button>
            
            {navigation.map(item => (
              <Link 
                key={item.name} 
                to={item.href} 
                className={`text-sm font-medium transition-colors hover:text-brand uppercase tracking-wide ${
                  isActive(item.href) ? "text-brand" : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex hover:bg-brand/10" 
              onClick={() => setIsChatOpen(true)}
            >
              <MessageCircle className="h-5 w-5 text-brand" />
            </Button>

            <CartModal />

            <Button asChild className="hidden md:inline-flex tehnika-button-green">
              <Link to="/contacts" className="gap-2 uppercase tracking-wide">
                ЗАПИСАТЬСЯ НА ПРИЕМ
              </Link>
            </Button>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Меню">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <div className="flex flex-col space-y-4 pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-medium">Меню</span>
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  {/* Кнопка каталог в мобильном меню с brand цветом */}
                  <Button asChild className="bg-brand hover:bg-brand-dark text-white font-semibold rounded-full">
                    <Link to="/catalog" onClick={() => setIsMobileMenuOpen(false)}>
                      <Menu className="h-4 w-4 mr-2" />
                      КАТАЛОГ
                    </Link>
                  </Button>
                  
                  {navigation.map(item => (
                    <Link 
                      key={item.name} 
                      to={item.href} 
                      className={`py-2 uppercase tracking-wide ${
                        isActive(item.href) ? "text-brand font-medium" : "text-gray-700"
                      }`} 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4">
                    <Button asChild className="w-full tehnika-button-green">
                      <Link to="/contacts" onClick={() => setIsMobileMenuOpen(false)}>
                        ЗАПИСАТЬСЯ НА ПРИЕМ
                      </Link>
                    </Button>
                  </div>
                  <Button variant="outline" className="flex items-center gap-2" onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsChatOpen(true);
                  }}>
                    <MessageCircle className="h-4 w-4" />
                    Чат со специалистом
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </header>
    </>
  );
};

export default Navbar;
