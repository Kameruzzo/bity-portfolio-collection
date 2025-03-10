import React from "react";
import { Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
          <div className="space-y-4">
            <div className="h-10">
              <img 
                src="/lovable-uploads/65914150-5be4-4237-8abb-91492cc8963d.png" 
                alt="500BITY" 
                className="h-full object-contain"
              />
            </div>
            <p className="text-gray-300 max-w-xs">
              Transformando ideias em campanhas memoráveis que elevam sua marca ao próximo nível.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://instagram.com/500bity" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-bity-600 transition-colors" 
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="mailto:contato@500bity.com.br" 
                className="text-white hover:text-bity-600 transition-colors" 
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-3">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#quem-somos" className="text-gray-300 hover:text-white transition-colors">Quem Somos</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-white transition-colors">Contato</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>© 2025 500BITY. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
