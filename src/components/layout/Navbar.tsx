
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Headphones, Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { title: "Главная", path: "/" },
    { title: "Каталог", path: "/catalog" },
    { title: "О нас", path: "/about" },
    { title: "Услуги", path: "/services" },
    { title: "Контакты", path: "/contacts" },
  ];

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-white/95 shadow-md backdrop-blur-md" : "bg-white"
    )}>
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 text-brand">
          <Headphones className="h-7 w-7" />
          <span className="text-xl font-bold">Ясный звук</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium text-foreground transition-colors hover:text-brand relative group",
                location.pathname === link.path && "text-brand"
              )}
            >
              {link.title}
              <span className={cn(
                "absolute inset-x-0 bottom-0 h-0.5 bg-brand transform origin-left transition-transform",
                location.pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              )}></span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <a href="tel:+74957990926" className="flex items-center text-foreground hover:text-brand transition-colors group">
            <Phone className="mr-2 h-4 w-4 text-brand group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">+7 (495) 799-09-26</span>
          </a>
          <Button variant="default" size="sm" className="rounded-full shadow-sm">
            Заказать звонок
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-x-0 top-20 z-50 bg-white/95 md:hidden transition-all duration-300 ease-in-out border-t backdrop-blur-md",
          isMenuOpen ? "translate-y-0 opacity-100 shadow-lg" : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <nav className="container flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "py-2 text-base font-medium text-foreground hover:text-brand",
                location.pathname === link.path && "text-brand"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          <a href="tel:+74957990926" className="flex items-center text-foreground hover:text-brand py-2">
            <Phone className="mr-2 h-4 w-4 text-brand" />
            <span className="text-base font-medium">+7 (495) 799-09-26</span>
          </a>
          <Button className="w-full mt-2 rounded-full">
            Заказать звонок
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
