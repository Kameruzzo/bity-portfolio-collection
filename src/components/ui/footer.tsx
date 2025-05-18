
import React, { useState } from "react";
import { Instagram, Mail } from "lucide-react";

export function Footer() {
  const [clickedButtons, setClickedButtons] = useState({
    instagram: false,
    email: false
  });

  const handleButtonClick = (platform: 'instagram' | 'email') => {
    setClickedButtons(prev => ({
      ...prev,
      [platform]: true
    }));
  };

  return (
    <footer className="bg-[#FF5722] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
          <div className="space-y-4">
            <div className="h-10">
              <img 
                src="/lovable-uploads/9040b7ae-4b7c-44cf-baf4-9d8d558470a0.png" 
                alt="500BITY" 
                className="h-full object-contain"
              />
            </div>
            <p className="text-gray-100 max-w-xs">
              Transformando ideias em campanhas memoráveis que elevam sua marca ao próximo nível.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://instagram.com/500bity" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`text-white hover:text-gray-200 transition-colors ${clickedButtons.instagram ? 'text-gray-300' : ''}`} 
                aria-label="Instagram"
                onClick={() => handleButtonClick('instagram')}
              >
                <Instagram size={24} />
              </a>
              <a 
                href="mailto:contato@500bity.com.br" 
                className={`text-white hover:text-gray-200 transition-colors ${clickedButtons.email ? 'text-gray-300' : ''}`} 
                aria-label="Email"
                onClick={() => handleButtonClick('email')}
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-3">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-100 hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#quem-somos" className="text-gray-100 hover:text-white transition-colors">Quem Somos</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-100 hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#contato" className="text-gray-100 hover:text-white transition-colors">Contato</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-100 hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center text-white">
          <p>© 2025 500BITY. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
