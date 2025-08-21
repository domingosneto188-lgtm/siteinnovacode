import React from 'react';

const Divider = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-400 via-blue-300 to-blue-400">
      <div 
        className="h-64 bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/80 via-blue-300/80 to-blue-400/80"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Inovação & Tecnologia
            </h2>
            <p className="text-xl text-white/90">
              Construindo o futuro digital de Angola
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Divider;