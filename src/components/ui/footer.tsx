
import React from "react";
import { cn } from "@/lib/utils";
import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-bity-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-3">
              <span className="font-black">500</span>BITY
            </h3>
            <p className="text-gray-300 max-w-xs">
              Transformando ideias em campanhas memoráveis que elevam sua marca ao próximo nível.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
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

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-3">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Marketing Digital</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Design Gráfico</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Gestão de Redes Sociais</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Produção de Conteúdo</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Publicidade</a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-3">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Av. Paulista, 1578, São Paulo - SP, Brasil</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">+55 (11) 98765-4321</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">contato@500bity.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>© 2025 500BITY. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
