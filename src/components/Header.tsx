import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Who we are',
      path: '/who-we-are',
      children: [
        { name: 'Our Path', path: '/who-we-are/our-path' },
        { name: 'Our Culture', path: '/who-we-are/our-culture' },
      ],
    },
    { name: 'How we build', path: '/how-we-build' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Join us', path: '/join-us' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white bg-opacity-0 backdrop-blur-md'
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 px-8 sm:px-12 lg:px-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/assets/brand-logo.png"
              alt="Oaktree Venture Studio Logo"
              className="w-65 h-12"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.children ? (
                <div className="relative group" key={item.name}>
                  <span
                    className={`cursor-pointer font-medium transition-colors text-base hover:text-green-600 font-[Playfair Display] ${
                      isActive(item.path)
                        ? 'text-green-600 font-semibold'
                        : isScrolled
                        ? 'text-gray-800'
                        : 'text-black'
                    }`}
                  >
                    {item.name}
                  </span>
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-200 z-50">
                    {item.children.map((child) => (
                        <Link
                        key={child.name}
                        to={child.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-green-500 hover:bg-gray-50 w-56"
                        >
                        {child.name}
                        </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-base font-medium font-[Playfair Display] transition-colors hover:text-green-600 ${
                    isActive(item.path)
                      ? 'text-green-600 font-semibold'
                      : isScrolled
                      ? 'text-gray-800'
                      : 'text-black'
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
         <button
  className={`md:hidden p-2 rounded-full border ${
    isScrolled ? 'text-gray-800 border-gray-300' : 'text-gray-800 border-white'
  } bg-white shadow`}
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>
  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
</button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="py-4 space-y-4">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.name} className="px-4">
                    <span className="block font-semibold text-gray-700 mb-2 font-[Playfair Display]">
                      {item.name}
                    </span>
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className="block text-gray-600 hover:text-green-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-4 py-2 font-[Playfair Display] text-base transition-colors ${
                      isActive(item.path)
                        ? 'text-green-600 font-semibold'
                        : 'text-gray-700 hover:text-green-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="px-4">
                <Link
                  to="/join-us"
                  className="block w-full bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-500 transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
