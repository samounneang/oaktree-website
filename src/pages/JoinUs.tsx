import React, { useState } from 'react';
import { Flag, Mail, Send, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import  jobs from '../data/jobs'; // Adjust the import path as necessary
import Job from '../data/types/jobtype';
import { useNavigate } from 'react-router-dom';

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

  const [selectedJob, setSelectedJob] = useState<any | null>(null);

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

const handleClick = (job: Job) => {
    if (!job.isAvailable) return;
    navigate('/job-detail', { state: { job } });
  };
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <section className="py-20 z-20 w-full">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Who we are looking for <span className="text-green-600"> </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-900 max-w-3xl mx-auto leading-relaxed">
            Whether you’re joining us as part of our functional team or as a Founder-in-Residence (FIR), we believe these are the attributes that will make you a great fit with us! 
          </p>
          <br /><br /><br />
          {[
            { label: "Problem Solvers.", desc: "There are enough people who create problems in the world; let’s try to balance that out. ;)" },
            { label: "Boldness.", desc: "It takes courage to be optimistic and take actions that might not “make sense” or go against the flow. " },
            { label: "Care for others.", desc: "Treat others with kindness and respect regardless of their background, accolades, and what they can offer you. " },
            { label: "Desire for growth.", desc: "To maintain an insatiable appetite for learning and to view failure as an opportunity instead of a condemnation. Curiosity doesn’t have to kill the cat!" },
            { label: "Authenticity.", desc: "Being open and genuine in a world that seeks to diminish or contort you is absolutely freeing. We celebrate individuality instead of conformity." },
            { label: "Team players.", desc: "Our team-first approach enables us to turn individuals into a collective, exponentially compounding what we can do. " },
            { label: "Have fun!", desc: " It’s important to do what brings you joy. We work hard, and we want to play hard too. Let’s bring back some levity, laughter, and light to our work!" },
          ].map((item, index) => (
            <p
              key={index}
              className=" text-gray-900 max-w-3xl mx-auto leading-relaxed text-left mb-6 text-xl"
            >
              <strong>{item.label}</strong> {item.desc}
            </p>
          ))}
        </div>
      </section>


      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            <span className="text-orange-600">Join Our Team</span>
          </h2>
        </div>
        <div className="space-y-6">
          {/* {jobs.map((job, i) => (
  <div
    key={i}
    onClick={() => job.isAvailable && setSelectedJob(job)}
    className={`group block rounded-xl px-6 py-5 transition-colors duration-300 relative ${
      job.isAvailable
        ? 'bg-white hover:bg-green-100 cursor-pointer'
        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
    }`}
  >
    <div className="flex justify-between items-center">
      <div>
        <h4 className={`text-xl font-semibold ${
          job.isAvailable ? 'text-gray-900' : 'text-gray-400'
        }`}>
          {job.title}
        </h4>
        <p className={`text-sm mt-1 ${
          job.isAvailable ? 'text-gray-600' : 'text-gray-400'
        }`}>
          {job.description}
        </p>
      </div>
      {job.isAvailable && (
        <span className="text-xl text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
          →
        </span>
      )}
    </div>
  </div>
))} */}

{jobs.map((job, i) => (
  <div
    key={i}
    //onClick={() => job.isAvailable && setSelectedJob(job)}
    onClick={() => handleClick(job)}

    className={`group block rounded-xl px-6 py-5 transition-colors duration-300 relative border ${
      job.isAvailable
        ? 'bg-white hover:bg-green-200 cursor-pointer'
        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
    }`}
  >
    <div className="flex justify-between items-center">
      <div>
        <h4 className={`text-xl font-semibold ${
          job.isAvailable ? 'text-gray-900' : 'text-gray-400'
        }`}>
          {job.title.length > 100 ? job.title.slice(0, 100) + '...' : job.title}
        </h4>
        <p className={`text-sm mt-1 ${
          job.isAvailable ? 'text-gray-600' : 'text-gray-400'
        }`}>
          {/* {job.description} */}
        </p>
      </div>
      {job.isAvailable && (
        <span className="text-xl text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
          →
        </span>
      )}
    </div>
  </div>
))}



          <AnimatePresence>
            {selectedJob && (
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="fixed top-0 right-0 w-full sm:w-[600px] h-full bg-white shadow-lg z-50 p-6 overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-green-600">{selectedJob.title}</h2>
                  <button onClick={() => setSelectedJob(null)} className="text-gray-500 hover:text-gray-800">
                    <X size={24} />
                  </button>
                </div>
                <p className="text-gray-700 text-md">{selectedJob.description}</p>
            
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Partners Contact Form */}
      <section className="py-20 bg-white z-30 relative ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Join Our Community</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="bg-blue-50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center">
                      <Mail className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">hello@oaktreeventurestudio.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center">
                      <Flag className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Locations</p>
                      <div className="flex items-center justify-between w-32">
                        <img src="https://flagcdn.com/sg.svg" alt="Singapore" className="w-8 h-6 shadow" />
                        <img src="https://flagcdn.com/au.svg" alt="Australia" className="w-10 h-8 shadow" />
                        <img src="https://flagcdn.com/kh.svg" alt="Cambodia" className="w-8 h-6 shadow" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company/Organization</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">Your Role *</label>
                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="">Select your role</option>
                    <option value="entrepreneur">Entrepreneur</option>
                    <option value="investor">Investor</option>
                    <option value="advisor">Industry Expert/Advisor</option>
                    <option value="corporate">Corporate Partner</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 resize-none"
                  placeholder="Any additional information you'd like to share..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center space-x-2"
              >
                <span>Connect with us</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default JoinUs;