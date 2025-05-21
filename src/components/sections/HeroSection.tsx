
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
      {/* Full-screen background image with gradient overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/lovable-uploads/ed6a646e-9028-4950-8e58-ca254dc100a5.png" 
          alt="Digital South America" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>
      
      {/* Content */}
      <div
        id="hero-content" 
        className="container relative z-10 px-4 sm:px-6 text-center"
        style={heroContentStyle}
      >
        <div className="bg-black/20 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl max-w-4xl mx-auto">
          <div className="mb-6">
            <img 
              src="/lovable-uploads/9040b7ae-4b7c-44cf-baf4-9d8d558470a0.png" 
              alt="500BITY" 
              className="h-16 mx-auto mb-6"
            />
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-white font-light mb-8 max-w-3xl mx-auto leading-tight">
            O Jeito Sul-Americano de Fazer Publicidade
          </h2>
          
          <p className="text-white/90 max-w-xl mx-auto mb-12 text-xl">
            Transformamos ideias em campanhas que capturam a essência da sua marca e conectam com seu público de forma autêntica e impactante.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              className="bg-[#FF5722] hover:bg-[#FF5722]/90 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all text-lg font-medium"
              onClick={() => scrollToSection('servicos')}
            >
              Nossos Serviços
            </button>
            <button 
              className="bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all text-lg font-medium"
              onClick={() => scrollToSection('contato')}
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - Perfectly centered on all devices */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer text-center"
        onClick={scrollToNext}
      >
        <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20">
          <ArrowDown className="text-white h-6 w-6 mx-auto" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
