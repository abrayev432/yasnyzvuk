
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CatalogDropdownProps {
  catalogItems: Array<{ name: string; href: string }>;
}

const CatalogDropdown = ({ catalogItems }: CatalogDropdownProps) => {
  const [isCatalogHovered, setIsCatalogHovered] = useState(false);
  const catalogTimeoutRef = useRef<NodeJS.Timeout>();

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

  return (
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
  );
};

export default CatalogDropdown;
