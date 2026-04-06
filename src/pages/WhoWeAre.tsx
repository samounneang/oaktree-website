import { motion } from "framer-motion";

const Path = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-white text-gray-800 pt-20 font-sans"
    >
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-green-600">Our Path</h1>
        <p className="text-lg md:text-2xl leading-relaxed text-gray-700">
          We plant trees that others will one day sit beneath. To build an economy of hope.
        </p>
      </section>

      {/* Why We Do What We Do */}
      <section className="bg-[#221f20] py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 sm:px-6 lg:px-8">
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white">Why We Do What We Do</h2>
            <p className="text-lg md:text-2xl leading-relaxed text-white">
              We believe that entrepreneurship is one of the most powerful forces for positive change in the world.
              We want to co-build startups with locals that address existing needs and solve systemic problems,
              especially in developing countries.
            </p>
          </div>
          <img
            src="/assets/pexels-photo-3184394.jpeg"
            alt="Why We Do What We Do"
            className="w-full md:w-1/2 h-72 md:h-96 object-cover rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Our Vision */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 sm:px-6 lg:px-8">
          <img
            src="/assets/pexels-photo-6913191.jpeg"
            alt="Our Vision"
            className="w-full md:w-1/2 h-72 md:h-96 object-cover rounded-lg shadow-md"
          />
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-green-600">Our Vision</h2>
            <p className="text-lg md:text-2xl leading-relaxed text-gray-700 mb-4">
              Panta ta ethne - All nations, all people
            </p>
            <p className="text-lg md:text-2xl leading-relaxed text-gray-700">
              To work with, create, and establish ventures that provide security, generate opportunity, and are rooted in purpose, thereby transforming lives and bringing freedom.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-[#221f20] py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 sm:px-6 lg:px-8">
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white">Our Mission</h2>
            <p className="text-lg md:text-2xl leading-relaxed text-white">
              We co-found ventures, empower founders, and strengthen startup ecosystems in developing countries,
              using entrepreneurship as open pathways to reach and impact people, communities, and nations.
            </p>
          </div>
          <img
            src="/assets/pexels-photo-3755440.webp"
            alt="Our Mission"
            className="w-full md:w-1/2 h-72 md:h-96 object-cover rounded-lg shadow-md"
          />
        </div>
      </section>
    </motion.div>
  );
};

export default Path;
