import { ArrowRight, Building, Heart, Lightbulb, Rocket, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

const WhatWebuild = () => {
  return (
    
      <section className="py-20 bg-white sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              What We <span className="text-emerald-800">Build</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              We focus on creating ventures across key industries that have the potential to make significant impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-emerald-50 transition-colors">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                <Rocket className="text-emerald-800" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Technology Ventures</h4>
              <p className="text-gray-600 leading-relaxed">
                AI, blockchain, and emerging technologies that solve complex problems.
              </p>
            </div>

            <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-emerald-50 transition-colors">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                <Heart className="text-emerald-800" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Healthcare Innovation</h4>
              <p className="text-gray-600 leading-relaxed">
                Digital health solutions that improve patient outcomes and accessibility.
              </p>
            </div>

            <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-emerald-50 transition-colors">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                <Building className="text-emerald-800" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Sustainable Business</h4>
              <p className="text-gray-600 leading-relaxed">
                Environmentally conscious ventures that drive positive change.
              </p>
            </div>

            <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-emerald-50 transition-colors">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                <Users className="text-emerald-800" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Social Impact</h4>
              <p className="text-gray-600 leading-relaxed">
                Ventures that address social challenges and create community value.
              </p>
            </div>

            <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-emerald-50 transition-colors">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                <Target className="text-emerald-800" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Financial Services</h4>
              <p className="text-gray-600 leading-relaxed">
                Fintech solutions that democratize access to financial services.
              </p>
            </div>

            <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-emerald-50 transition-colors">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                <Lightbulb className="text-emerald-800" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Education Technology</h4>
              <p className="text-gray-600 leading-relaxed">
                Learning platforms that make education more accessible and effective.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              to="/portfolio"
              className="inline-flex items-center bg-amber-400 text-emerald-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-300 transition-colors space-x-2"
            >
              <span>View Our Portfolio</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
  );
}
export default WhatWebuild;