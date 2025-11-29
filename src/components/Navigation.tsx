import { Home, ShoppingCart, MapPin, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { icon: Home, label: "Nosotros", href: "#nosotros" },
    { icon: ShoppingCart, label: "Productos", href: "#productos" },
    { icon: MapPin, label: "Ubicación", href: "#ubicacion" },
    { icon: Phone, label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between py-2 sm:py-3 md:py-4">
          <ul className="flex gap-1 sm:gap-3 md:gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex flex-col items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2 md:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-secondary transition-all group"
                >
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-[0.625rem] sm:text-xs md:text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors uppercase whitespace-nowrap">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
