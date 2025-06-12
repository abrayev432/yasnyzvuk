
import { Link, useLocation } from "react-router-dom";

interface NavLinksProps {
  navigation: Array<{ name: string; href: string }>;
}

const NavLinks = ({ navigation }: NavLinksProps) => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <>
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
    </>
  );
};

export default NavLinks;
