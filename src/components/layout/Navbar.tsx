import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Phone, Menu, X, MessageCircle, ShoppingCart, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CartModal } from "@/components/cart/CartModal";
import ChatModal from "../chat/ChatModal";

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCatalogHovered, setIsCatalogHovered] = useState(false);
  const catalogTimeoutRef = useRef<NodeJS.Timeout>();

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

  const handleCatalogMouseEnter = () => {
    if (catalogTimeoutRef.current) {
      clearTimeout(catalogTimeoutRef.current);
    }
    setIsCatalogHovered(true);
  };

  const handleCatalogMouseLeave = () => {
    catalogTimeoutRef.current = setTimeout(() => {
      setIsCatalogHovered(false);
    }, 150);
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

  const catalogItems = [
    { name: "Все слуховые аппараты", href: "/catalog" },
    { name: "Внутриушные слуховые аппараты", href: "/catalog?type=in-ear" },
    { name: "Внутриканальные слуховые аппараты", href: "/catalog?type=in-canal" },
    { name: "Заушные слуховые аппараты", href: "/catalog?type=behind-ear" },
    { name: "Слуховые аппараты для пожилых", href: "/catalog?type=elderly" },
    { name: "Бренды", href: "/catalog?section=brands" },
    { name: "Аксессуары", href: "/accessories" }
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <>
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
            {/* Кнопка каталог с выпадающим меню */}
            <div 
              className="relative"
              onMouseEnter={handleCatalogMouseEnter}
              onMouseLeave={handleCatalogMouseLeave}
            >
              <Button asChild className="bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-all duration-300">
                <Link to="/catalog" className="flex items-center gap-2">
                  <Menu className="h-4 w-4" />
                  КАТАЛОГ
                  <ChevronDown className="h-4 w-4" />
                </Link>
              </Button>
              
              {/* Выпадающее меню */}
              {isCatalogHovered && (
                <div 
                  className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                  onMouseEnter={handleCatalogMouseEnter}
                  onMouseLeave={handleCatalogMouseLeave}
                >
                  <div className="py-2">
                    {catalogItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand transition-colors"
                        onClick={() => setIsCatalogHovered(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
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
                  
                  {/* Пункты каталога в мобильном меню */}
                  <div className="pl-4 space-y-2">
                    {catalogItems.map((item, index) => (
                      <Link 
                        key={index}
                        to={item.href} 
                        className="block py-2 text-sm text-gray-600 hover:text-brand"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  
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
