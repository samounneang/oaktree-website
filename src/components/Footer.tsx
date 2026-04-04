import { Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-700 border-t border-gray-300 text-base">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-16 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3  md:grid-cols-3 gap-12 text-center sm:text-left">
          {/* Brand & Social */}
          <div>
            <Link to="/" className="block mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Oaktree Venture Studio</h3>
            </Link>
            <p className="text-sm sm:text-base mb-6 max-w-md mx-auto sm:mx-0">
              Partnering with visionary entrepreneurs to build the next generation of impactful ventures.
            </p>
            <div className="flex justify-center sm:justify-start flex-wrap gap-4">
              <a href="https://www.linkedin.com/company/oaktree-venture-studio/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-orange-400 text-white rounded-full flex items-center justify-center hover:bg-black transition">
                <Linkedin size={20} />
              </a>
              {/* <a href="#" className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-black transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-black transition">
                <Mail size={20} />
              </a> */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Services</h4>
            <ul className="space-y-3 text-sm sm:text-base">
              <li><a href="#" className="hover:text-black transition">Ideation & Validation</a></li>
              <li><a href="#" className="hover:text-black transition">Product Development</a></li>
              <li><a href="#" className="hover:text-black transition">Funding & Investment</a></li>
              <li><a href="#" className="hover:text-black transition">Ecosystem building</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Company</h4>
            <ul className="space-y-3 text-sm sm:text-base">
              <li><a href="/who-we-are/our-path" className="hover:text-black transition">About Us</a></li>
              <li><a href="/portfolio" className="hover:text-black transition">Portfolio</a></li>
              <li><a href="/who-we-are/our-culture" className="hover:text-black transition">Team</a></li>
              <li><a href="/join-us" className="hover:text-black transition">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6 text-center text-sm sm:text-base">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
      
            <a href="#" className="flex items-center gap-2 hover:text-black transition">
              <Mail size={18} />
              <span>hello@oaktreeventurestudio.com</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm">
            <a href="/privacy-policy" className="hover:text-black transition">Privacy Policy</a>
            {/* <a href="#" className="hover:text-black transition">Terms of Service</a> */}
            <span>© {currentYear} Oaktree Venture Studio. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
