import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const seatItems = [
  {
    title: "Investors",
    desc: "Contribute capital for the development of the startups by either investing in our studio or directly in our ventures. Access quality deal flow and better founder economics through us.",
  },
  {
    title: "Founder",
    desc: "Explore and validate ideas with us as an Entrepreneur-in-Residence. We are there with you, building the ventures from the ground up. Benefit from our well-defined processes, ecosystem of resources, and a team of functional experts.",
  },
  {
    title: "Partners",
    desc: "Collaborate with us on providing more support to startups within the ecosystem. Areas we are looking at include capacity building, talent development, business support, and research.",
  },
];

const SeatAtTableSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14 px-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          <span className="text-green-600">Have a Seat at the Table</span>
        </h2>
        <p className="text-base sm:text-lg md:text-2xl text-gray-600 max-w-4xl mx-auto text-left sm:text-center leading-relaxed">
          A mature startup ecosystem requires the collaboration and development
          of stakeholders with the goal to build ventures that foster innovation,
          drive economic growth, and create positive impact for local communities.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {seatItems.map((item, index) => {
          const colorClasses = [
            "border-green-50 hover:border-green-50 hover:bg-green-100 text-green-600",
            "border-blue-50 hover:border-blue-50 hover:bg-blue-100 text-blue-400",
            "border-yellow-50 hover:border-yellow-50 hover:bg-yellow-100 text-orange-400",
          ];

          return (
            <div
              key={index}
              className={`rounded-xl p-6 sm:p-8 flex flex-col items-start group border ${colorClasses[index % colorClasses.length]}`}
            >
              <h4 className="text-xl sm:text-2xl font-bold mb-3">{item.title}</h4>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 sm:mt-16 text-center">
        <Link
          to="/join-us"
          className="inline-block bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-green-700 transition-colors"
        >
          Join Us <ArrowRight size={20} className="inline-block ml-2" />
        </Link>
      </div>
    </div>
  </section>
);

export default SeatAtTableSection;
