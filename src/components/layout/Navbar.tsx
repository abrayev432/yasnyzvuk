
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Headphones, Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 text-brand">
          <Headphones className="h-6 w-6" />
          <span className="text-xl font-bold">Ясный звук</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm font-medium text-foreground transition-colors hover:text-brand"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+78001234567" className="flex items-center text-foreground hover:text-brand">
            <Phone className="mr-2 h-4 w-4" />
            <span className="text-sm font-medium">8 (800) 123-45-67</span>
          </a>
          <Button variant="default" size="sm">
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
          "fixed inset-x-0 top-16 z-50 bg-white md:hidden transition-all duration-300 ease-in-out border-t",
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <nav className="container flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="py-2 text-base font-medium text-foreground hover:text-brand"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          <a href="tel:+78001234567" className="flex items-center text-foreground hover:text-brand py-2">
            <Phone className="mr-2 h-4 w-4" />
            <span className="text-base font-medium">8 (800) 123-45-67</span>
          </a>
          <Button className="w-full mt-2">
            Заказать звонок
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
