
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Bubble Background */}
      {/* <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-emerald-100 opacity-30 animate-bubble"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              bottom: `-${Math.random() * 200}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div> */}

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-black mb-6 leading-snug sm:leading-snug md:leading-tight font-[Playfair Display]">
              We build <span className="text-green-500">ventures</span> that build{" "}
              <span className="text-blue-500">people</span> in developing{" "}
              <span className="text-yellow-500">countries</span>
            </h1>
          </div>

          {/* Image */}
          <div className="relative flex justify-center">
            <img
              src="/assets/company-logo.png"

              alt="Innovation and Technology"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-700 rounded-full flex justify-center items-start">
          <div className="w-1 h-2 sm:h-3 bg-gray-700 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
