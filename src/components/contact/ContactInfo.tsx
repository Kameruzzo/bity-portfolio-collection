
import React from "react";
import { Mail } from "lucide-react";
import ContactCard from "./ContactCard";

const ContactInfo: React.FC = () => {
  const handleMailClick = () => {
    window.open("mailto:500bity.chat@gmail.com", "_blank");
  };

  return (
    <div className="lg:col-span-2 space-y-6">
      <ContactCard
        icon={<Mail size={20} />}
        title="Email"
        content={
          <a 
            href="mailto:500bity.chat@gmail.com" 
            className="text-white/70 hover:text-white transition-colors"
          >
            500bity.chat@gmail.com
          </a>
        }
        onClick={handleMailClick}
      />
      
      <ContactCard
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        }
        title="Instagram"
        content={
          <a 
            href="https://instagram.com/500bity" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/70 hover:text-white transition-colors"
          >
            @500bity
          </a>
        }
        delay="delay-200"
      />
    </div>
  );
};

export default ContactInfo;
