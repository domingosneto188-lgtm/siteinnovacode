import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/244932831874', '_blank');
  };

  const openEmail = () => {
    window.open('mailto:innovacode1888@gmail.com', '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefones',
      items: ['+244 932 831 874', '+244 938 406 941'],
      action: openWhatsApp
    },
    {
      icon: Mail,
      title: 'Email',
      items: ['innovacode1888@gmail.com'],
      action: openEmail
    },
    {
      icon: MapPin,
      title: 'Localização',
      items: ['Angola, Luanda – Talatona'],
      action: null
    }
  ];

  return (
    <section id="contactos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Entre em Contacto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para transformar suas ideias em realidade digital
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            
            return (
              <div
                key={contact.title}
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-orange-400 transition-all duration-300 hover:scale-105 hover:shadow-xl group ${
                  contact.action ? 'cursor-pointer' : ''
                }`}
                onClick={contact.action || undefined}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-orange-400 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {contact.title}
                </h3>
                
                <div className="space-y-2">
                  {contact.items.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-gray-600 font-medium">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center">
          <button
            onClick={openWhatsApp}
            className="bg-gradient-to-r from-orange-400 to-blue-300 hover:from-orange-500 hover:to-blue-400 text-white px-12 py-4 rounded-full font-bold text-xl transition-all duration-300 flex items-center justify-center space-x-3 mx-auto hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="h-6 w-6" />
            <span>Falar no WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;