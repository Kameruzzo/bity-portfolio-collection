
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <span className="text-bity-600 ml-4">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div
        className={cn(
          "transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Que tipo de clientes a 500BITY atende?",
      answer: "Atendemos empresas de todos os portes e segmentos, desde startups até grandes corporações. Nossa abordagem personalizada permite adaptar nossas estratégias às necessidades específicas de cada cliente."
    },
    {
      question: "Qual é o processo de trabalho da 500BITY?",
      answer: "Nosso processo começa com uma análise aprofundada do seu negócio e objetivos. Em seguida, desenvolvemos uma estratégia personalizada, implementamos as ações planejadas e monitoramos constantemente os resultados para otimizações."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "O tempo para obter resultados varia de acordo com o projeto e os objetivos estabelecidos. Alguns resultados podem ser percebidos em semanas, enquanto estratégias mais complexas podem levar alguns meses para atingir seu potencial máximo."
    },
    {
      question: "Como a 500BITY mede o sucesso de uma campanha?",
      answer: "Utilizamos métricas específicas alinhadas aos objetivos de cada projeto, como engajamento, conversões, tráfego, vendas e ROI. Fornecemos relatórios detalhados e transparentes sobre o desempenho das campanhas."
    },
    {
      question: "É possível contratar serviços individuais ou apenas pacotes completos?",
      answer: "Oferecemos tanto serviços individuais quanto pacotes completos. Nossa abordagem é flexível e adaptamos nossas soluções às necessidades e ao orçamento de cada cliente."
    },
    {
      question: "Como faço para iniciar um projeto com a 500BITY?",
      answer: "Entre em contato conosco através do formulário em nosso site, por e-mail ou telefone. Agendaremos uma reunião inicial para entender suas necessidades e objetivos, e a partir daí desenvolveremos uma proposta personalizada para seu projeto."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-bity-100 text-bity-600 text-sm font-medium mb-6 animate-slide-down">
            Dúvidas Frequentes
          </span>
          <h2 className="section-title text-center mx-auto animate-slide-up">
            Perguntas Frequentes
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 animate-slide-up delay-100">
              Respostas para as perguntas mais comuns sobre nossos serviços e processos.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto glass-card p-8 animate-fade-in">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFaq(index)}
            />
          ))}
        </div>

        <div className="mt-16 text-center animate-slide-up delay-300">
          <h3 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Se você não encontrou a resposta que procurava, nossa equipe está pronta para ajudar.
          </p>
          <a href="#contato" className="btn-primary">
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
