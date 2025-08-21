import React from 'react';
import { Code, MessageCircle, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const openWhatsApp = () => {
    window.open('https://wa.me/244932831874', '_blank');
  };

  const openEmail = () => {
    window.open('mailto:innovacode1888@gmail.com', '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/innovaCode.jpg" 
                alt="Innovacode Logo" 
                className="h-12 w-12 rounded-lg object-cover"
              />
              <span className="text-2xl font-bold">Innovacode</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transformamos ideias em soluções digitais modernas e funcionais, 
              contribuindo para o crescimento tecnológico em Angola.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={openWhatsApp}
                className="bg-orange-400 hover:bg-orange-500 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5 text-gray-900" />
              </button>
              <button
                onClick={openEmail}
                className="bg-blue-300 hover:bg-blue-400 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-gray-900" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-400">Links Rápidos</h3>
            <div className="space-y-3">
              <button onClick={() => scrollToSection('inicio')} className="block text-gray-300 hover:text-orange-400 transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('missao')} className="block text-gray-300 hover:text-orange-400 transition-colors">
                Missão
              </button>
              <button onClick={() => scrollToSection('servicos')} className="block text-gray-300 hover:text-orange-400 transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection('contactos')} className="block text-gray-300 hover:text-orange-400 transition-colors">
                Contactos
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-blue-300">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MessageCircle className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>+244 932 831 874</p>
                  <p>+244 938 406 941</p>
                </div>
              </div>
 
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">Angola, Luanda – Talatona</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} Innovacode. Todos os direitos reservados.
            </p>
            <p className="text-gray-400">
              Desenvolvido em Angola
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;