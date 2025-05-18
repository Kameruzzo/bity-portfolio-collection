
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
          ? "py-4 bg-[#FF5722]/90 backdrop-blur-md shadow-md"
          : "py-6 bg-[#FF5722]/80"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-center">
        {/* Centered logo */}
        <div className="flex items-center justify-center relative h-10">
          {/* Logo (visible when not scrolled) */}
          <a href="#inicio" className="h-10 flex items-center justify-center">
            <img 
              src="/lovable-uploads/9040b7ae-4b7c-44cf-baf4-9d8d558470a0.png" 
              alt="500BITY" 
              className={cn("h-full transition-opacity duration-300",
                scrolled ? "brightness-0" : "")}
            />
          </a>
        </div>
      </div>
    </header>
  );
}
