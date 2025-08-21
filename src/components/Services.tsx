import React from 'react';
import { Globe, Smartphone, Code, GraduationCap, ShoppingCart, User, FileText, Laptop } from 'lucide-react';

const Services = () => {
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
                style={{ animationDelay: `${index * 0.1}s` }}
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
  );
};

export default Services;