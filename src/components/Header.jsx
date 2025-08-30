import { X, Menu } from "lucide-react";

import useAppContext from "../hooks";

const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useAppContext();

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Advocate Together Coaching LLC
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
              <a href="#services" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Services</a>
              <a href="#about" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
              <a href="#testimonials" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">Home</a>
              <a href="#services" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">Services</a>
              <a href="#about" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">About</a>
              <a href="#testimonials" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">Testimonials</a>
              <a href="#contact" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;