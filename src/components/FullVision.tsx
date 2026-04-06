import React, { useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FullVision: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* World Map Background */}
      <img
        src="/assets/worldmap.png"
        alt="World Map"
        className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none"
        style={{ filter: "brightness(0.7) grayscale(1)" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-80" />

      {/* Main Content */}
      <div
        className={`relative z-10 max-w-2xl mx-auto px-4 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2
          className="text-4xl md:text-5xl font-bold mb-6 font-[Playfair Display]"
          style={{ color: "#00c660" }}
        >
          Our Vision
        </h2>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 font-light italic font-[Roboto]">
          "To work with, create, and establish ventures that provide{" "}
          <strong>security</strong>, generate <strong>opportunity</strong>, and
          are rooted in <strong>purpose</strong>."
        </p>
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-orange-300 mb-2 font-[Playfair Display]">
            People at the heart of it all
          </h3>
          <p className="text-base md:text-lg text-gray-300 mb-2 font-[Roboto]">
            We see our ventures as building pathways to impact the lives of our
            stakeholders: employees, customers, communities, and nations.
          </p>
          <p className="text-lg md:text-xl font-bold text-orange-300 italic font-[Roboto]">
            Panta ta ethne
          </p>
        </div>
        <Link
          to="/who-we-are/our-path"
          className="inline-flex items-center text-white px-6 py-3 font-medium rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl space-x-3 group"
          style={{ backgroundColor: "#00c660" }}
        >
          <span>Learn More About Us</span>
          <ArrowRight
            size={24}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
};

export default FullVision;
