
import React, { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

const ContatoSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulando envio do formulário
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
      });
    }, 1500);
  };

  return (
    <section id="contato" className="py-20 md:py-32 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/3e5a0c11-e335-46be-867c-ffaf2e16f327.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.15) saturate(1.2)'
        }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-bity-600/20 text-bity-200 text-sm font-medium mb-6 animate-slide-down">
            Fale Conosco
          </span>
          <h2 className="text-4xl font-bold text-white mb-6 animate-slide-up">Entre em Contato</h2>
          <p className="text-white/70 max-w-2xl mx-auto animate-slide-up delay-100">
            Estamos ansiosos para ouvir sobre seu projeto. Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card bg-white/10 backdrop-blur-md p-6 animate-slide-right">
              <div className="flex items-start">
                <div className="bg-bity-600 p-3 rounded-full text-white mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-white/70">contato@500bity.com.br</p>
                  <p className="text-white/70">comercial@500bity.com.br</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card bg-white/10 backdrop-blur-md p-6 animate-slide-right delay-100">
              <div className="flex items-start">
                <div className="bg-bity-600 p-3 rounded-full text-white mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Telefone</h3>
                  <p className="text-white/70">+55 (11) 98765-4321</p>
                  <p className="text-white/70">+55 (11) 3456-7890</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card bg-white/10 backdrop-blur-md p-6 animate-slide-right delay-200">
              <div className="flex items-start">
                <div className="bg-bity-600 p-3 rounded-full text-white mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Endereço</h3>
                  <p className="text-white/70">Av. Paulista, 1578</p>
                  <p className="text-white/70">São Paulo - SP, Brasil</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3 glass-card bg-white/10 backdrop-blur-md p-8 animate-slide-left">
            <h3 className="text-2xl font-bold text-white mb-6">Envie sua mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/90 mb-2 text-sm" htmlFor="nome">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/20 border border-white/10 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-bity-600 transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label className="block text-white/90 mb-2 text-sm" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/20 border border-white/10 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-bity-600 transition-all"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white/90 mb-2 text-sm" htmlFor="telefone">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full bg-white/20 border border-white/10 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-bity-600 transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-2 text-sm" htmlFor="mensagem">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-white/20 border border-white/10 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-bity-600 transition-all"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="inline-block h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></span>
                ) : (
                  <Send className="mr-2 h-4 w-4" />
                )}
                {isSubmitting ? "Enviando..." : "Enviar mensagem"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
