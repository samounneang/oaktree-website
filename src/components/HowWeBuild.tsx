import { Link, ArrowRight } from "lucide-react";

const HowWeBuild = () => {
  return (
     <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              How We <span className="text-emerald-800">Build</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Our proven methodology for creating and scaling successful ventures from concept to market leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-3xl font-bold text-emerald-800 mb-4">01</div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Ideation & Validation</h4>
              <p className="text-gray-600 leading-relaxed">
                We start with rigorous market research and validation to ensure every venture addresses real market needs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-3xl font-bold text-emerald-800 mb-4">02</div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Build & Launch</h4>
              <p className="text-gray-600 leading-relaxed">
                Our expert teams work alongside founders to build, test, and launch minimum viable products.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-3xl font-bold text-emerald-800 mb-4">03</div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Scale & Grow</h4>
              <p className="text-gray-600 leading-relaxed">
                We provide ongoing support for scaling operations, securing funding, and achieving market leadership.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/how-we-build"
              className="inline-flex items-center bg-emerald-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-colors space-x-2"
            >
              <span>Explore Our Process</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

  );
}

export default HowWeBuild;