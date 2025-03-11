
import React from "react";
import ContactForm from "../contact/ContactForm";
import ContactInfo from "../contact/ContactInfo";

const ContatoSection: React.FC = () => {
  return (
    <section id="contato" className="py-20 md:py-32 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/3e5a0c11-e335-46be-867c-ffaf2e16f327.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.15) saturate(0)'
        }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-gray-800/20 text-gray-200 text-sm font-medium mb-6 animate-slide-down">
            Fale Conosco
          </span>
          <h2 className="text-4xl font-bold text-white mb-6 animate-slide-up">Entre em Contato</h2>
          <p className="text-white/70 max-w-2xl mx-auto animate-slide-up delay-100">
            Estamos ansiosos para ouvir sobre seu projeto. Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
