import React from 'react';

const services = [
  {
    id: 'otimizado',
    image: '/card3.jpg', // 🔁 Substitua pelo caminho da sua imagem
    title: 'Site Otimizado',
    description:
      'Criamos sites rápidos e leves com código limpo, imagens otimizadas e SEO técnico, proporcionando a melhor experiência ao usuário.',
  },
  {
    id: 'velocidade',
    image: '/carde2.jpg',
    title: 'Velocidade',
    description:
      'Sites lentos afastam visitantes. Nossos projetos são pensados para máxima performance, com tempo de carregamento mínimo.',
  },
  {
    id: 'seo',
    image: '/carde1.png',
    title: 'Visibilidade no Google',
    description:
      'Utilizamos boas práticas de SEO para garantir que seu site seja facilmente encontrado por quem realmente importa: seus clientes.',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Por que escolher nossos serviços?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções modernas, focadas em resultados reais com tecnologia de ponta.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center border border-gray-200 hover:border-gray-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
