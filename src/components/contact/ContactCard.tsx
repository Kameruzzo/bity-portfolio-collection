
import React from "react";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  onClick?: () => void;
  delay?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ 
  icon, 
  title, 
  content, 
  onClick,
  delay = "" 
}) => {
  return (
    <div className={`glass-card bg-white/10 backdrop-blur-md p-6 animate-slide-right ${delay}`}>
      <div className="flex items-start">
        <div 
          className={`bg-black p-3 rounded-full text-white mr-4 ${onClick ? 'cursor-pointer' : ''}`}
          onClick={onClick}
        >
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          {content}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
