import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (id: string) => {
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        scrolled
          ? "py-4 bg-white/90 backdrop-blur-md shadow-md"
          : "py-6 bg-black/10 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#inicio" className="h-10">
            <img 
              src="/lovable-uploads/3a833654-d110-41b2-8a59-f2e3c89f2c4c.png" 
              alt="500BITY" 
              className="h-full"
            />
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {["inicio", "quem-somos", "servicos", "contato", "faq"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={cn(
                "transition-colors",
                scrolled
                  ? "text-gray-800 hover:text-black"
                  : "text-white hover:text-gray-200"
              )}
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ")}
            </button>
          ))}
        </nav>

        <button
          className={cn(
            "md:hidden",
            scrolled ? "text-gray-800" : "text-white"
          )}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 bg-white pt-20 px-6 md:hidden transition-all duration-300 ease-in-out z-40",
          isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-6">
          {["inicio", "quem-somos", "servicos", "contato", "faq"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-lg font-medium py-2 border-b border-gray-100 text-gray-800 hover:text-black transition-colors"
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ")}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
