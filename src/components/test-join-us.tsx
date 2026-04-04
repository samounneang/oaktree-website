import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Users, Briefcase, Heart, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    experience: '',
    idea: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50 z-20 w-full">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Who we are looking for <span className="text-green-600"> </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-900 max-w-3xl mx-auto leading-relaxed">
            Whether you’re joining us as part of our functional team or as a Founder-in-Residence (FIR), we believe these are the attributes that will make you a great fit for us!
          </p>
          <br /><br /><br />
          {[
            { label: "Problem Solvers.", desc: "There are enough people who create problems in the world; let’s try to balance that out." },
            { label: "Boldness.", desc: "It takes courage to be optimistic and take actions that might not “make sense” or go against the flow." },
            { label: "Care for others.", desc: "Treat others with kindness and respect regardless of their background, accolades, and what they can offer you." },
            { label: "Desire for growth.", desc: "Maintain an insatiable appetite for learning and view failure as an opportunity instead of a condemnation." },
            { label: "Authenticity.", desc: "Being open and genuine in a world that seeks to diminish or contort you is absolutely freeing." },
            { label: "Team players.", desc: "Our team-first approach enables us to turn individuals into a collective, exponentially compounding what we can do." },
            { label: "Have fun!", desc: "We work hard, and we want to play hard too. Let’s bring back some levity, laughter, and light to our work!" },
          ].map((item, index) => (
            <p
              key={index}
              className="text-xl md:text-2xl text-gray-900 max-w-3xl mx-auto leading-relaxed text-left mb-6"
            >
              <strong>{item.label}</strong> {item.desc}
            </p>
          ))}
        </div>
      </section>

      {/* Team Opportunities Section */}
      <section className="py-20 bg-gray-50 z-30 z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8  relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-orange-600">Join Our Team</span>
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* <div className="w-full lg:w-1/2">
              <img
                src="https://images.pexels.com/photos/18834540/pexels-photo-18834540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Modern office building exterior"
                className="rounded-2xl shadow-lg object-cover w-full h-80 lg:h-full"
              />
            </div> */}
            <div className="w-full lg:w-1/1">
              <div className="space-y-6">
                {[
                  {
                    title: "Marketing Specialist",
                    description: "Lead campaigns, manage social media, and drive brand growth.",
                    path: "/jobs/marketing"
                  },
                  {
                    title: "Full‑Stack Engineer",
                    description: "React, Node.js, scalable app development.",
                    path: "/jobs/fullstack"
                  },
                  {
                    title: "UI/UX Designer",
                    description: "Figma, intuitive interfaces, design systems.",
                    path: "/jobs/uiux"
                  },
                  {
                    title: "Project Coordinator",
                    description: "Manage timelines and support team success.",
                    path: "/jobs/coordination"
                  },
                  {
                    title: "Content Strategist",
                    description: "Storytelling, messaging, content planning.",
                    path: "/jobs/content"
                  },
                ].map((job, i) => (
                  <Link
                    to={job.path}
                    key={i}
                    className="group block bg-white rounded-xl px-6 py-5 transition-colors duration-300 hover:bg-green-100 relative"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{job.title}</h4>
                        <p className="text-gray-600 text-sm mt-1">{job.description}</p>
                      </div>
                      <span className="text-xl text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                        →
                      </span>
                    </div>
                  </Link>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default JoinUs;