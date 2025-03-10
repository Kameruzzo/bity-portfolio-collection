
import React, { useState } from "react";
import { Mail, Send, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const ContatoSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send form data to Apidog API
      const response = await fetch("https://jvv78o77xu.apidog.io/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Ocorreu um erro ao enviar sua mensagem");
      }
      
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({
        nome: "",
        email: "",
        mensagem: "",
      });
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast.error("Erro ao enviar mensagem. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMailClick = () => {
    window.open("mailto:500bity.chat@gmail.com", "_blank");
  };

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
          {/* Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card bg-white/10 backdrop-blur-md p-6 animate-slide-right">
              <div className="flex items-start">
                <div 
                  className="bg-black p-3 rounded-full text-white mr-4 cursor-pointer"
                  onClick={handleMailClick}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <a 
                    href="mailto:500bity.chat@gmail.com" 
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    500bity.chat@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="glass-card bg-white/10 backdrop-blur-md p-6 animate-slide-right delay-200">
              <div className="flex items-start">
                <div className="bg-black p-3 rounded-full text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Instagram</h3>
                  <a href="https://instagram.com/500bity" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">@500bity</a>
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
                    className="w-full bg-white/20 border border-white/10 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white transition-all"
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
                    className="w-full bg-white/20 border border-white/10 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white transition-all"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
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
                  className="w-full bg-white/20 border border-white/10 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-white transition-all"
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
              
              <div className="mt-4 pt-4 border-t border-white/10 text-white/60 text-sm text-center">
                Prefere outro método? <a 
                  href="https://forms.zohopublic.com/contato5001/form/GuiadeColaborao/formperma/nSiACkp26_U_c3xsakPMsZoOMv5XgHLgkTDa_m5jQPU" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 inline-flex items-center"
                >
                  Acesse nosso formulário alternativo <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
