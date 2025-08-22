import React, { useState } from 'react';
import { Globe, Smartphone, Code, GraduationCap, ShoppingCart, User, FileText, Laptop, ChevronDown } from 'lucide-react';

const ServicesPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      category: 'Criação de Websites',
      icon: Globe,
      color: 'orange',
      items: [
        { name: 'Institucionais', icon: FileText },
        { name: 'E-commerce', icon: ShoppingCart },
        { name: 'Portfólios', icon: User },
        { name: 'Landing Pages', icon: Globe }
      ]
    },
    {
      category: 'Desenvolvimento Mobile',
      icon: Smartphone,
      color: 'blue',
      description: 'Aplicações móveis com React Native para iOS e Android'
    },
    {
      category: 'Desenvolvimento Web',
      icon: Code,
      color: 'white',
      items: [
        { name: 'React JS', icon: Code },
        { name: 'PHP com Laravel', icon: Code }
      ]
    },
    {
      category: 'Formação ao Domicílio',
      icon: GraduationCap,
      color: 'orange',
      items: [
        { name: 'Desenvolvimento Web', icon: Code },
        { name: 'React Native', icon: Smartphone },
        { name: 'Excel', icon: FileText },
        { name: 'Informática Básica', icon: Laptop }
      ]
    }
  ];

  const faqs = [
    {
      question: "Quais tipos de sites vocês desenvolvem?",
      answer: "Trabalhamos com sites institucionais, e-commerce, portfólios, landing pages e sistemas personalizados."
    },
    {
      question: "Quanto tempo leva para desenvolver um site?",
      answer: "Depende do tamanho e complexidade. Projetos simples podem levar de 1 a 2 semanas, enquanto sistemas maiores exigem mais tempo."
    },
    {
      question: "Vocês oferecem manutenção após a entrega?",
      answer: "Sim, oferecemos planos de manutenção e suporte para garantir que seu site esteja sempre atualizado e seguro."
    },
    {
      question: "Como funciona o pagamento?",
      answer: "Os valores são definidos de acordo com a necessidade do cliente. Trabalhamos com planos flexíveis e acessíveis."
    },
    {
      question: "Posso pedir alterações depois do site pronto?",
      answer: "Claro! Realizamos ajustes e implementações extras de acordo com a demanda do cliente."
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'orange':
        return {
          bg: 'bg-orange-400',
          bgLight: 'bg-orange-50',
          text: 'text-orange-600',
          border: 'border-orange-200',
          hover: 'hover:border-orange-400'
        };
      case 'blue':
        return {
          bg: 'bg-blue-400',
          bgLight: 'bg-blue-50',
          text: 'text-blue-600',
          border: 'border-blue-200',
          hover: 'hover:border-blue-400'
        };
      case 'white':
        return {
          bg: 'bg-gray-100',
          bgLight: 'bg-gray-50',
          text: 'text-gray-600',
          border: 'border-gray-200',
          hover: 'hover:border-gray-400'
        };
      default:
        return {
          bg: 'bg-orange-400',
          bgLight: 'bg-orange-50',
          text: 'text-orange-600',
          border: 'border-orange-200',
          hover: 'hover:border-orange-400'
        };
    }
  };

  return (
    <div>
      {/* Seção de Serviços */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas em tecnologia para impulsionar o seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              const Icon = service.icon;
              
              return (
                <div
                  key={service.category}
                  className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${colors.border} ${colors.hover} transition-all duration-300 hover:scale-105 hover:shadow-xl group`}
                >
                  <div className={`${colors.bg} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.category}
                  </h3>
                  
                  {service.description && (
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                  )}

                  {service.items && (
                    <div className="space-y-3">
                      {service.items.map((item, itemIndex) => {
                        const ItemIcon = item.icon;
                        return (
                          <div key={itemIndex} className="flex items-center space-x-3">
                            <div className={`${colors.bgLight} p-2 rounded-lg`}>
                              <ItemIcon className={`h-4 w-4 ${colors.text}`} />
                            </div>
                            <span className="text-gray-700 font-medium">{item.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção Modelos */}
      <section id="modelos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Alguns Modelos de Sites
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Confira alguns modelos criados pela InovaCode que podem inspirar o seu próximo projeto
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 bg-white">
              <img src="/modelo1.jpg" alt="Modelo 1" className="w-full h-64 object-cover" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 bg-white">
              <img src="/modelo3.jpg" alt="Modelo 3" className="w-full h-64 object-cover" />
            </div>
          </div>

          <div className="text-center mt-8">
            <a 
              href="https://wa.me/244932831874" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-orange-500 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:bg-orange-600 transition-all"
            >
              Peça o seu site agora
            </a>
          </div>
        </div>
      </section>

      {/* Seção de FAQ */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tire suas dúvidas mais comuns antes de falar com a nossa equipe
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md border border-gray-200">
                <button
                  className="w-full flex justify-between items-center p-5 text-left text-gray-900 font-medium"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {faq.question}
                  <ChevronDown className={`h-5 w-5 transform transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a 
              href="https://wa.me/244932831874" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-orange-500 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:bg-orange-600 transition-all"
            >
              Ainda tem dúvidas? Fale conosco
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
