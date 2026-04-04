const HowWeBuild = () => {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Banner */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gray-800">What we do</span>
          </h1>
          <p className="text-xl text-gray-900 leading-relaxed max-w-4xl mx-auto">
            Putting 100% of our focus towards identifying just a couple of problems to address each year, matching those problems with the right talent, and resourcing those companies (human and financial) at the earliest stage allows us to systemize venture building and rapidly scale their growth.
          </p>
          <br />
          <p className="text-xl text-gray-900 leading-relaxed max-w-4xl mx-auto">
            We turn the most promising ideas into independent ventures through a rigorous process of ideation, validation, and iteration. By making venture building a repeatable process, we increase the odds of success by providing our founders with full functional support, reducing time to market, and a clear pathway to access alternative resources and capital.
          </p>
        </div>
      </section>

      {/* Building Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We implement a clear structure across the startup lifecycle from zero to spin-out to ensure higher chances of success.
            </p>
          </div>

          <div className="flex flex-col">
            <img
              src="/assets/metology.png"
              alt="Stage"
              className="w-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Uncomment and use these sections later if needed */}

      {/* 
      Core Capabilities
      <section className="py-20 bg-gray-50">
        ...
      </section>

      Success Metrics
      <section className="py-20 bg-emerald-900 text-white">
        ...
      </section>

      Call to Action
      <section className="py-20 bg-white">
        ...
      </section>
      */}
    </div>
  );
};

export default HowWeBuild;
