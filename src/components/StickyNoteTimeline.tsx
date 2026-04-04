const principles = [
  "It starts with One. Scale happens by solving the problem of one person, repeatedly.",
  "Be faithful in the little things. Progress and growth is a result of the cumulative effect of little tasks done well.",
  "We embrace the ‘hard’ things, not unnecessarily. To possess grit when it matters, produces good oil that comes from intense pressing.",
  "Faster isn’t always better. We prioritise longevity and we know that requires endurance and vision. Every solution we build should be self-sustaining and for the long term.",
  "It’s never about the limelight or building a platform for ourselves. We prefer to be nameless and faceless, with the works of our hands as the testimony of our impact.",
  "We think deliberately and act intentionally. We mean what we say and we say what we mean. We want our ‘yes’ to be yes, and ‘no’ be no.",
  "We are biased towards execution, especially because our goal is to solve real problems that impact the lives of people. We firmly believe that actions speak louder than words.",
  "Relational over transactional. More than resources, accolades, or competencies, we want to build deep lasting connections with our community to walk this journey together.",
  "Profitability over valuation; substance over form.",
  "We operate lean but with full commitment. United by a shared purpose, we want to move with agility and adaptability, combined with continuous iterative improvement, in thoughtful dedication towards change.",
];

export default function StickyNoteTimeline() {
  return (
    <div className="relative px-4 md:px-16 py-16 bg-gray-50">
      {/* Vertical center line */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 transform -translate-x-1/2" />

      <div className="space-y-12">
        {principles.map((text, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative flex justify-${isLeft ? "start" : "end"} w-full`}
            >
              <div
                className={`bg-yellow-100 rounded-xl shadow-lg p-6 max-w-md text-gray-800 
                ${isLeft ? "ml-0 mr-auto" : "ml-auto mr-0"}`}
              >
                <p className="text-base leading-relaxed">{text}</p>
              </div>

              {/* Dot in center */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-400 border-4 border-white rounded-full shadow-md z-10" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
