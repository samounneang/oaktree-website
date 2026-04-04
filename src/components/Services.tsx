import React from 'react';
import { Lightbulb, Code, DollarSign, Users, BarChart, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: 'Ideation & Validation',
      description: 'Transform concepts into viable business models through rigorous market research and validation.',
      features: ['Market Analysis', 'Customer Discovery', 'Business Model Design', 'Competitive Intelligence']
    },
    {
      icon: Code,
      title: 'Product Development',
      description: 'Build world-class products with our experienced development and design teams.',
      features: ['Technical Architecture', 'MVP Development', 'UI/UX Design', 'Quality Assurance']
    },
    {
      icon: DollarSign,
      title: 'Funding & Investment',
      description: 'Secure capital through our network and strategic funding partnerships.',
      features: ['Seed Funding', 'Series A Preparation', 'Investor Introductions', 'Financial Modeling']
    },
    {
      icon: Users,
      title: 'Team Building',
      description: 'Recruit top talent and build high-performing teams that scale with your vision.',
      features: ['Executive Search', 'Team Scaling', 'Culture Development', 'Compensation Planning']
    },
    {
      icon: BarChart,
      title: 'Growth & Scale',
      description: 'Accelerate growth through data-driven strategies and operational excellence.',
      features: ['Go-to-Market Strategy', 'Sales Optimization', 'Marketing Automation', 'Partnership Development']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Navigate challenges with comprehensive risk assessment and mitigation strategies.',
      features: ['Legal & Compliance', 'IP Protection', 'Operational Risk', 'Strategic Planning']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Support 
            <span className="text-emerald-800"> at Every Stage</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From initial concept to market leadership, we provide the full spectrum of services 
            needed to build and scale exceptional companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                <service.icon className="text-emerald-800" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-emerald-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-colors">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;