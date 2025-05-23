
import React, { useEffect, useRef } from "react";
import { Award, Users, Zap } from "lucide-react";

const QuemSomosSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="quem-somos"
      ref={sectionRef}
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-gray-100 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-gray-100 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-gray-200 text-black text-sm font-medium mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            Nossa História
          </span>
          <h2 className="text-center mx-auto animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="section-title inline-block">Quem Somos</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
              Somos uma agência de publicidade apaixonada por criar conexões significativas entre marcas e pessoas, transformando ideias em histórias memoráveis.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left column - Text content */}
          <div className="space-y-6">
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <h3 className="text-2xl font-bold mb-3">Nossa Missão</h3>
              <p className="text-gray-600">
                Elevar marcas através da criatividade e estratégia, entregando resultados tangíveis que superam expectativas e criam conexões duradouras com o público-alvo.
              </p>
            </div>
            
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
              <h3 className="text-2xl font-bold mb-3">Nossa Visão</h3>
              <p className="text-gray-600">
                Ser reconhecida como uma referência em soluções criativas que transformam a maneira como as marcas se comunicam e se conectam com seu público.
              </p>
            </div>
            
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400">
              <h3 className="text-2xl font-bold mb-3">Nossos Valores</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Award className="mr-3 h-6 w-6 text-black flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Excelência</h4>
                    <p className="text-gray-600 text-sm">Buscamos a perfeição em cada projeto, superando expectativas.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="mr-3 h-6 w-6 text-black flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Colaboração</h4>
                    <p className="text-gray-600 text-sm">Trabalhamos juntos, valorizando cada perspectiva única.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="mr-3 h-6 w-6 text-black flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Inovação</h4>
                    <p className="text-gray-600 text-sm">Desafiamos o convencional, buscando soluções criativas.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right column - Image */}
          <div className="relative animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
            <div className="relative overflow-hidden">
              <img 
                src="/lovable-uploads/04b76cee-bfc1-44ac-88a2-3a3809774071.png" 
                alt="Nossos Valores" 
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomosSection;
