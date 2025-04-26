import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = ({ darkMode }) => {
  return (
    <footer 
      id="contact"
      className={`py-8 ${
        darkMode ? 'bg-black text-white' : 'bg-white text-black'
      } relative`}
    >
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
        darkMode 
          ? 'from-black via-white to-black' 
          : 'from-white via-black to-white'
      }`}></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="font-['Bebas_Neue'] text-2xl mb-2">CODER'S CAFE</div>
            <p className="text-sm opacity-70">© 2025 Coder's Cafe | Raviranjan</p>
          </div>
          
          <div className="flex space-x-6">
            <SocialIcon href="https://github.com" icon={<Github size={24} />} />
            <SocialIcon href="https://linkedin.com" icon={<Linkedin size={24} />} />
            <SocialIcon href="https://instagram.com" icon={<Instagram size={24} />} />
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <FooterLink href="#home">Home</FooterLink>
            <FooterLink href="#domains">Courses</FooterLink>
            <FooterLink href="#team">Team</FooterLink>
            <FooterLink href="#events">Events</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, icon }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-2 rounded-full transition-transform duration-300 hover:scale-110 hover:opacity-80"
      aria-label="Social media link"
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ href, children }) => {
  return (
    <a 
      href={href} 
      className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-200"
    >
      {children}
    </a>
  );
};

export default Footer;