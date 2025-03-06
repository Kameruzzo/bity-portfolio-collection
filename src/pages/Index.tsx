
import React, { useEffect } from "react";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import HeroSection from "@/components/sections/HeroSection";
import QuemSomosSection from "@/components/sections/QuemSomosSection";
import ServicosSection from "@/components/sections/ServicosSection";
import ContatoSection from "@/components/sections/ContatoSection";
import FaqSection from "@/components/sections/FaqSection";

const Index = () => {
  useEffect(() => {
    // Setup smooth scrolling with offset for header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            const headerOffset = 100;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    // Initialize animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.section-transition').forEach((section) => {
      observer.observe(section);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <QuemSomosSection />
        <ServicosSection />
        <ContatoSection />
        <FaqSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
