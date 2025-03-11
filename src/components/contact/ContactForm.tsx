
import React, { useState } from "react";
import { Send, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface ContactFormData {
  nome: string;
  email: string;
  mensagem: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
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
      // Try sending to Apidog API first
      try {
        const response = await fetch("https://jvv78o77xu.apidog.io/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData)
        });
        
        if (!response.ok) {
          throw new Error("API response was not ok");
        }
        
        const data = await response.json();
        console.log("Form submission successful:", data);
        
        toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        setFormData({
          nome: "",
          email: "",
          mensagem: "",
        });
        return; // Exit early if successful
      } catch (apiError) {
        console.error("Error with Apidog API, falling back to Supabase:", apiError);
        // Fall through to Supabase if API fails
      }
      
      // Fallback to Supabase Edge Function
      const { data, error } = await supabase.functions.invoke("contact-form", {
        body: formData
      });
      
      if (error) {
        throw new Error(error.message);
      }
      
      console.log("Form submitted via Supabase fallback:", data);
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

  return (
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
  );
};

export default ContactForm;
