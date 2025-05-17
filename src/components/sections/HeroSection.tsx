
import React, { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get scroll position but throttle it
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroContentStyle = {
    transform: `translateY(${scrollY * 0.2}px)`,
    opacity: Math.max(0, 1 - scrollY * 0.002)
  };

  const scrollToNext = () => {
    const quemSomosSection = document.getElementById("quem-somos");
    if (quemSomosSection) {
      quemSomosSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Full-screen background image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/lovable-uploads/98001d01-b5f7-4eb0-90df-913a0d3e4ff6.png" 
          alt="Orange digital background with South America fingerprint" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div> {/* Optional overlay for better text readability */}
      </div>
      
      {/* Content */}
      <div
        id="hero-content" 
        className="container relative z-10 px-4 sm:px-6 text-center"
        style={heroContentStyle}
      >
        <div>
          <span className="inline-block py-1 px-3 rounded-full bg-bity-600/20 text-white text-sm font-medium mb-6">
            Agência de Publicidade
          </span>
        </div>
        
        <h2 className="text-xl md:text-3xl lg:text-4xl text-white font-light mb-8 max-w-3xl mx-auto leading-relaxed">
          Aqui, publicidade é mais que um hobby
        </h2>
        
        <p className="text-white/80 max-w-xl mx-auto mb-12">
          Transformamos ideias em campanhas que capturam a essência da sua marca e conectam com seu público de forma autêntica e impactante.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            className="btn-primary"
            onClick={() => scrollToSection('servicos')}
          >
            Nossos Serviços
          </button>
          <button 
            className="btn-secondary"
            onClick={() => scrollToSection('contato')}
          >
            Entre em Contato
          </button>
        </div>
      </div>
      
      {/* Scroll indicator - Perfectly centered on all devices */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer text-center"
        onClick={scrollToNext}
      >
        <ArrowDown className="text-white h-8 w-8 mx-auto" />
      </div>
    </section>
  );
}

export default HeroSection;
