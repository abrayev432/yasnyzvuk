
import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartModal } from "@/components/cart/CartModal";
import ChatModal from "../chat/ChatModal";
import AppointmentForm from "../AppointmentForm";
import CatalogDropdown from "./CatalogDropdown";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

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

  const catalogItems = [
    { name: "Все слуховые аппараты", href: "/catalog" },
    { name: "Внутриушные слуховые аппараты", href: "/catalog?type=in-ear" },
    { name: "Внутриканальные слуховые аппараты", href: "/catalog?type=in-canal" },
    { name: "Заушные слуховые аппараты", href: "/catalog?type=behind-ear" },
    { name: "Аксессуары", href: "/accessories" }
  ];

  return (
    <>
      <header className={`sticky top-0 z-40 w-full bg-white transition-all ${isScrolled ? "shadow-md" : "border-b border-gray-200"}`}>
        <div className="container flex items-center justify-between px-4 md:px-6 py-4">
          <button onClick={handleLogoClick} className="flex items-center gap-2 cursor-pointer">
            <img 
              src="/lovable-uploads/fe8c03ba-b977-4605-9e9c-52ee8c6111d8.png" 
              alt="Ясный звук - слуховые аппараты" 
              className="h-12 w-auto"
            />
          </button>

          <nav className="hidden lg:flex items-center space-x-8 ml-8">
            <CatalogDropdown catalogItems={catalogItems} />
            <NavLinks navigation={navigation} />
          </nav>

          <div className="flex items-center gap-4 ml-auto">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex hover:bg-brand/10" 
              onClick={() => setIsChatOpen(true)}
            >
              <MessageCircle className="h-5 w-5 text-brand" />
            </Button>

            <CartModal />

            <Button 
              className="hidden md:inline-flex tehnika-button-green"
              onClick={() => setIsAppointmentOpen(true)}
            >
              <span className="gap-2 uppercase tracking-wide">
                ЗАПИСАТЬСЯ НА ПРИЕМ
              </span>
            </Button>

            <MobileMenu 
              isMobileMenuOpen={isMobileMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
              navigation={navigation}
              catalogItems={catalogItems}
              onAppointmentClick={() => setIsAppointmentOpen(true)}
              onChatClick={() => setIsChatOpen(true)}
            />
          </div>
        </div>
        
        <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        <AppointmentForm open={isAppointmentOpen} onOpenChange={setIsAppointmentOpen} />
      </header>
    </>
  );
};

export default Navbar;
