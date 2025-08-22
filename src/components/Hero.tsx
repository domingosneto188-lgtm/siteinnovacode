import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

const Hero = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/244932831874', '_blank');
  };

  return (
    <>
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/fundo1.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Transformamos
                <span className="text-orange-400 block">ideias em soluções</span>
                <span className="text-blue-300">digitais</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                Desenvolvemos websites modernos, aplicações mobile e oferecemos formação profissional em tecnologias digitais em Angola.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openWhatsApp}
                  className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Fale Connosco no WhatsApp</span>
                </button>
                <button
                  onClick={() =>
                    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                >
                  <span>Conhecer Serviços</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

 
    </>
  );
};

export default Hero;
