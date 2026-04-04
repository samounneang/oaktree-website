import React from 'react';
import { ArrowRight, Handshake, Blocks, Network } from 'lucide-react';
// import './BubbleAnimation.css';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <Handshake size={48} className="text-green-600" />,
    title: "We Are Hands-On",
    description:
      "As venture builders, we are operators too. We understand what founders go through and are fully committed to using our experience to co-build great ventures together. You will have access to a team of functional experts fluent in all areas of company building.",
  },
  {
    icon: <Blocks size={48} className="text-blue-400" />,
    title: "Robust Venture Building System",
    description:
      "We reduce the complexity and increase the probability of success by developing a repeatable, clearly-defined approach to venture building.",
  },
  {
    icon: <Network size={48} className="text-orange-400" />,
    title: "Shared Resources & Network",
    description:
      "Leverage our founder support ecosystem—access tools, expertise, and a strong network of partners to accelerate your journey.",
  },
];

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
}) => (
  <div className=" p-8 rounded-3xl hover:bg-green-100 transition duration-300">
    <div className="flex items-center space-x-4 mb-4">
      <div>{icon}</div>
      <h4 className="text-xl md:text-2xl font-semibold text-gray-900 font-[Playfair Display]">
        {title}
      </h4>
    </div>
    <p className="text-gray-600 text-base md:text-lg leading-relaxed font-[Roboto]">{description}</p>
  </div>
);

const SimpleScrollCards: React.FC = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden py-20 px-4 sm:px-6 lg:px-20">
      {/* Bubble Animation Background */}
      {/* <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-green-100 opacity-30 animate-bubble"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              bottom: `-${Math.random() * 150}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div> */}

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-[Playfair Display]">
            <span className="text-green-600">Why Us</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-orange-400 mb-4 font-[Playfair Display]">
            We're All In With You
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-6 font-[Roboto]">
            A nascent or budding startup ecosystem presents additional risks on top of the inherent challenges in the journey of a founder.
          </p>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-6 font-[Roboto]">
            We are willing to share, and ready to give. We are committed to navigating the unknown, overcoming the challenges, standing through the failures, so that we can celebrate the wins together.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 animate-fade-in-up">
          {features.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>

        {/* CTA Button */}
        <Link to="/who-we-are/our-path" className="mt-16 flex justify-center">
          <span 
            className="inline-flex items-center bg-green-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-medium text-base md:text-lg hover:bg-green-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <span>Learn More About Us</span>
            <ArrowRight size={20} className="ml-2" />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default SimpleScrollCards;
