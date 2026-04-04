const OurCulture = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div
          className="flex flex-col lg:flex-row items-start gap-10 p-6 lg:p-12 rounded-lg "
          style={{ backgroundColor: '#221f20' }}
        >
          {/* Left Text */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-white">
              How we do is who we are
            </h1>
          </div>

          {/* Right Image with grayscale + hover color effect */}
          <div className="lg:w-1/2 relative h-[20rem] overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
              alt="Principles"
              className="w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700 ease-in-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 rounded-lg pointer-events-none" />
          </div>
        </div>

        {/* Principles List */}
        <div className="px-4 lg:px-20 mt-14">
          <ol className="space-y-10 text-lg leading-relaxed text-gray-800">
            {[
              {
                title: '1. It starts with One. ',
                desc: 'Scale happens by solving the problem of one person, repeatedly. ',
              },
              {
                title: '2. Be faithful in the little things.',
                desc: ' Progress and growth is a result of the cumulative effect of little tasks done well. ',
              },
              {
                title: '3. We embrace the ‘hard’ things, not unnecessarily. ',
                desc: 'To possess grit when it matters, produces good oil that comes from intense pressing. ',
              },
              {
                title: '4. Faster isn’t always better. ',
                desc: 'We prioritise longevity and we know that requires endurance and vision. Every solution we build should be self-sustaining and for the long term. ',
              },
              {
                title: '5. It’s never about the limelight or building a platform for ourselves.',
                desc: 'We prefer to be nameless and faceless, with the works of our hands as the testimony of our impact. ',
              },
              {
                title: '6. We think deliberately and act intentionally.',
                desc: 'We mean what we say and we say what we mean. We want our ‘yes’ to be yes, and ‘no’ be no. ',
              },
              {
                title: '7. We are biased towards execution, especially because our goal is to solve real problems that impact the lives of people. ',
                desc: 'We firmly believe that actions speak louder than words. ',
              },
              {
                title: '8. Relational over transactional. ',
                desc: 'More than resources, accolades, or competencies, we want to build deep lasting connections with our community to walk this journey together. .',
              },
              {
                title: '9. Move the needle.',
                desc: 'Profitability over valuation; substance over form. ',
              },
              {
                title: '10. We operate lean but with full commitment.',
                desc: ' United by a shared purpose, we want to move with agility and adaptability, combined with continuous iterative improvement, in thoughtful dedication towards change. ',
              },
            ].map((principle, index) => (
              <li key={index}>
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                  {principle.title}
                </h3>
                <p className="text-base text-gray-700">{principle.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default OurCulture;
