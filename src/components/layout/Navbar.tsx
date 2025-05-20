
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Phone, Menu, X, MessageCircle } from "lucide-react";
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

  const navigation = [
    { name: "Главная", href: "/" },
    { name: "Каталог", href: "/catalog" },
    { name: "Услуги", href: "/services" },
    { name: "О нас", href: "/about" },
    { name: "Контакты", href: "/contacts" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/80 backdrop-blur-md py-4"
      }`}
    >
      <div className="container flex items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/d661252f-c37c-4eb0-8503-135afdf6f91b.png" 
            alt="Ясный звук" 
            className="h-10 w-auto" 
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-brand ${
                isActive(item.href)
                  ? "text-brand"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+74957990926"
            className="hidden md:flex items-center text-sm font-medium gap-2 hover:text-brand"
          >
            <Phone className="h-4 w-4" />
            +7 (495) 799-09-26
          </a>

          <Button 
            variant="ghost" 
            size="icon" 
            className="hidden md:flex" 
            onClick={() => setIsChatOpen(true)}
          >
            <MessageCircle className="h-5 w-5" />
          </Button>

          <CartModal />

          <Button asChild size="sm" className="hidden md:inline-flex rounded-full">
            <Link to="/contacts" className="gap-2">
              Записаться на прием
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Меню"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80">
              <div className="flex flex-col space-y-4 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-medium">Меню</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`py-2 ${
                      isActive(item.href)
                        ? "text-brand font-medium"
                        : "text-muted-foreground"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button asChild className="w-full rounded-full">
                    <Link to="/contacts" onClick={() => setIsMobileMenuOpen(false)}>
                      Записаться на прием
                    </Link>
                  </Button>
                </div>
                <a
                  href="tel:+74957990926"
                  className="flex items-center gap-2 py-2 text-muted-foreground"
                >
                  <Phone className="h-4 w-4" />
                  +7 (495) 799-09-26
                </a>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsChatOpen(true);
                  }}
                >
                  <MessageCircle className="h-4 w-4" />
                  Чат с администратором
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </header>
  );
};

export default Navbar;
