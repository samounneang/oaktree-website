import React from "react";
import {
  Lightbulb,
  Target,
  Users,
  Heart,
  DollarSignIcon,
  Landmark,
  Settings,
  Megaphone,
  Code,
  Figma,
} from "lucide-react";

const supportItems = [
  {
    title: "Design",
    icon: <Figma className="text-green-800" size={36} />,
    desc: "Designs that are both user-friendly and visually striking.",
  },
  {
    title: "Development",
    icon: <Code className="text-green-800" size={36} />,
    desc: "Modern and responsive web interfaces built with React, Vue, or Angular.",
  },
  {
    title: "DevOps",
    icon: <Users className="text-green-800" size={36} />,
    desc: "Robust RESTful or GraphQL APIs using Node, .NET, or Python.",
  },
  {
    title: "Marketing",
    icon: <Megaphone className="text-green-800" size={36} />,
    desc: "Scalable, secure data modeling with SQL and NoSQL.",
  },
  {
    title: "Operations",
    icon: <Settings className="text-green-800" size={36} />,
    desc: "Automated pipelines and reliable deployment processes.",
  },
  {
    title: "Legal",
    icon: <Landmark className="text-green-800" size={36} />,
    desc: "Managed cloud infrastructure on AWS, Azure, or GCP.",
  },
  {
    title: "Finance",
    icon: <DollarSignIcon className="text-green-800" size={36} />,
    desc: "Thorough unit, integration, and end-to-end testing.",
  },
  {
    title: "Talent Acquisition",
    icon: <Heart className="text-green-800" size={36} />,
    desc: "Reliable ongoing support for updates and bug fixes.",
  },
];

const FullStackSupportSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          <span className="text-green-600">Your Full-Stack Support</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Drawing from our experience in building companies at all stages, we understand that being a founder involves being exposed to many functions that you may not have experience in. That’s where we come in to provide a suite of resources so you can focus on building.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {supportItems.map((item, index) => (
          <div
            key={index}
            className="text-center group bg-white p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              {item.icon}
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
            {/* <p className="text-gray-600 text-sm">{item.desc}</p> */}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FullStackSupportSection;
