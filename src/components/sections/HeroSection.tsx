
import React, { useEffect } from "react";
import { ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const heroContent = document.getElementById("hero-content");
      const scrollPosition = window.scrollY;
      
      if (heroContent) {
        // Parallax effect
        heroContent.style.transform = `translateY(${scrollPosition * 0.2}px)`;
        heroContent.style.opacity = `${1 - scrollPosition * 0.002}`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-bity-900 to-black opacity-90"></div>
      
      {/* Animated shapes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-bity-600/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-bity-700/30 rounded-full blur-3xl animate-float delay-300"></div>
      
      {/* Content */}
      <div
        id="hero-content" 
        className="container relative z-10 px-4 sm:px-6 text-center"
      >
        <div className="animate-slide-down">
          <span className="inline-block py-1 px-3 rounded-full bg-bity-600/20 text-white text-sm font-medium mb-6">
            Agência de Publicidade
          </span>
        </div>
        
        <h1 className="hero-text text-4xl md:text-6xl lg:text-7xl text-white mb-6 animate-slide-up">
          <span className="block">
            <span className="text-white">500</span>
            <span className="text-bity-600">BITY</span>
          </span>
        </h1>
        
        <h2 className="text-xl md:text-3xl lg:text-4xl text-white font-light mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-100">
          Aqui, publicidade é mais que um hobby
        </h2>
        
        <p className="text-white/80 max-w-xl mx-auto mb-12 animate-slide-up delay-200">
          Transformamos ideias em campanhas que capturam a essência da sua marca e conectam com seu público de forma autêntica e impactante.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300">
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
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce cursor-pointer"
        onClick={scrollToNext}
      >
        <ArrowDown className="text-white h-8 w-8" />
      </div>
    </section>
  );
};

export default HeroSection;
