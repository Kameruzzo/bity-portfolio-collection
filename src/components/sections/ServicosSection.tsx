
import React, { useEffect, useRef } from "react";
import { Camera, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1",
        "animate-on-scroll opacity-0 translate-y-10 transition-all duration-700",
        delay
      )}
    >
      <div className="bg-black text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicosSection: React.FC = () => {
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

  const services = [
    {
      title: "Gestão de Redes Sociais",
      description: "Cuidamos da sua presença digital com conteúdo engajador e estratégias de crescimento.",
      icon: <Share2 size={24} />,
      delay: "delay-100"
    },
    {
      title: "Fotografia Publicitária",
      description: "Imagens de alta qualidade que valorizam seus produtos e serviços.",
      icon: <Camera size={24} />,
      delay: "delay-300"
    }
  ];

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gray-50 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-16 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-gray-200 text-black text-sm font-medium mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            O que oferecemos
          </span>
          <h2 className="text-center mx-auto animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="section-title inline-block">Nossos Serviços</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
              Conheça as soluções criativas que oferecemos para impulsionar sua marca e conectar-se com seu público-alvo de forma eficiente.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-3xl">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicosSection;
