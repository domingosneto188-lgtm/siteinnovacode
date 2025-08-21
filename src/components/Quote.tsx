import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';

const Quote = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/244932831874', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Sparkles className="h-16 w-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para começar seu projeto?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Solicite um orçamento personalizado e descubra como podemos transformar suas ideias em soluções digitais de sucesso.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Orçamento Gratuito
            </h3>
            <p className="text-gray-300 mb-8">
              Entre em contacto connosco pelo WhatsApp e receba uma proposta personalizada para o seu projeto.
            </p>
            
            <button
              onClick={openWhatsApp}
              className="bg-orange-400 hover:bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-xl transition-all duration-300 flex items-center justify-center space-x-3 mx-auto hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="h-6 w-6" />
              <span>Pedir Orçamento via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;