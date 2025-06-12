
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  navigation: Array<{ name: string; href: string }>;
  catalogItems: Array<{ name: string; href: string }>;
  onAppointmentClick: () => void;
  onChatClick: () => void;
}

const MobileMenu = ({ 
  isMobileMenuOpen, 
  setIsMobileMenuOpen, 
  navigation, 
  catalogItems, 
  onAppointmentClick,
  onChatClick 
}: MobileMenuProps) => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
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
            <Button 
              className="w-full tehnika-button-green"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onAppointmentClick();
              }}
            >
              ЗАПИСАТЬСЯ НА ПРИЕМ
            </Button>
          </div>
          <Button variant="outline" className="flex items-center gap-2" onClick={() => {
            setIsMobileMenuOpen(false);
            onChatClick();
          }}>
            <MessageCircle className="h-4 w-4" />
            Чат со специалистом
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
