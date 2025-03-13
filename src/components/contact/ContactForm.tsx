
import React from "react";
import { ExternalLink } from "lucide-react";

const ContactForm: React.FC = () => {
  return (
    <div className="lg:col-span-3 glass-card bg-white/10 backdrop-blur-md p-8 animate-slide-left">
      <h3 className="text-2xl font-bold text-white mb-6">Envie sua mensagem</h3>
      
      <div className="flex flex-col items-center justify-center">
        <p className="text-white/70 mb-6 text-center">
          Utilize nosso formulário para entrar em contato com a nossa equipe
        </p>
        
        <a 
          href="https://forms.zohopublic.com/contato5001/form/GuiadeColaborao/formperma/nSiACkp26_U_c3xsakPMsZoOMv5XgHLgkTDa_m5jQPU" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary flex items-center justify-center mb-4"
        >
          Acessar formulário de contato <ExternalLink className="ml-2 h-4 w-4" />
        </a>
        
        <p className="text-white/60 text-sm text-center mt-4">
          Ao preencher o formulário, nossa equipe entrará em contato o mais breve possível.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
