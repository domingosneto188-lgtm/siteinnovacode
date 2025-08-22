import React, { useState, useEffect } from 'react';
import { Code, Menu, X, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/244932831874', '_blank');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/innovaCode.png" 
              alt="Innovacode Logo" 
              className="h-12 w-12 rounded-lg object-cover"
            />
            <span className="text-2xl font-bold text-gray-900">Innovacode</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-yellow-500 transition-colors">
              Início
            </button>

            <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-orange-400 transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection('contactos')} className="text-gray-700 hover:text-orange-400 transition-colors">
              Contactos
            </button>
            <button
              onClick={openWhatsApp}
              className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Pedir Orçamento</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-orange-400 transition-colors text-left">
                Início
              </button>
              <button onClick={() => scrollToSection('objectivos')} className="text-gray-700 hover:text-orange-400 transition-colors text-left">
                
              </button>
              <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-orange-400 transition-colors text-left">
                Serviços
              </button>
              <button onClick={() => scrollToSection('contactos')} className="text-gray-700 hover:text-orange-400 transition-colors text-left">
                Contactos
              </button>
              <button
                onClick={openWhatsApp}
                className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-2 w-2" />
                <span>Pedir Orçamento</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
