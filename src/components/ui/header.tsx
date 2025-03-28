
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Use passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
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
          ? "py-4 bg-gray-200/90 backdrop-blur-md shadow-md"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex-1"></div> {/* Spacer for centering logo */}
        
        <div className="flex items-center justify-center flex-1 relative h-10">
          {/* White logo (visible when not scrolled) */}
          <a href="#inicio" className={cn("h-10 absolute inset-0 flex items-center justify-center transition-opacity duration-300", 
            scrolled ? "opacity-0" : "opacity-100")}>
            <img 
              src="/lovable-uploads/3a833654-d110-41b2-8a59-f2e3c89f2c4c.png" 
              alt="500BITY" 
              className="h-full"
            />
          </a>
          
          {/* Black logo (visible when scrolled) */}
          <a href="#inicio" className={cn("h-10 absolute inset-0 flex items-center justify-center transition-opacity duration-300", 
            scrolled ? "opacity-100" : "opacity-0")}>
            <img 
              src="/lovable-uploads/3a833654-d110-41b2-8a59-f2e3c89f2c4c.png" 
              alt="500BITY" 
              className="h-full brightness-0"
            />
          </a>
        </div>

        <div className="flex-1 flex justify-end">
          <nav className="flex items-center space-x-8">
            {["inicio", "quem-somos", "servicos", "contato", "faq"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={cn(
                  "transition-colors font-medium hidden md:block",
                  scrolled ? "text-black hover:text-bity-600" : "text-white hover:text-bity-600"
                )}
              >
                {section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ")}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
