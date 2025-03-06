
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
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="h-10">
            <img 
              src="/lovable-uploads/3a833654-d110-41b2-8a59-f2e3c89f2c4c.png" 
              alt="500BITY" 
              className="h-full"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-foreground hover:text-bity-600 transition-colors"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection("quem-somos")}
            className="text-foreground hover:text-bity-600 transition-colors"
          >
            Quem Somos
          </button>
          <button
            onClick={() => scrollToSection("servicos")}
            className="text-foreground hover:text-bity-600 transition-colors"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="text-foreground hover:text-bity-600 transition-colors"
          >
            Contato
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-foreground hover:text-bity-600 transition-colors"
          >
            FAQ
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white pt-20 px-6 md:hidden transition-all duration-300 ease-in-out z-40",
          isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-6">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-lg font-medium py-2 border-b border-gray-100"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection("quem-somos")}
            className="text-lg font-medium py-2 border-b border-gray-100"
          >
            Quem Somos
          </button>
          <button
            onClick={() => scrollToSection("servicos")}
            className="text-lg font-medium py-2 border-b border-gray-100"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="text-lg font-medium py-2 border-b border-gray-100"
          >
            Contato
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-lg font-medium py-2 border-b border-gray-100"
          >
            FAQ
          </button>
        </nav>
      </div>
    </header>
  );
}
