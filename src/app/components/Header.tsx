import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      {/* Top bar with contact info */}
      <div className="bg-[#1e40af] text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="mailto:info@naploglogistics.com" className="flex items-center gap-2 hover:text-orange-300 transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden md:inline">info@naploglogistics.com</span>
            </a>
          </div>
          <div className="text-xs md:text-sm">
            24*7 Customer Support Available
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            {/* ✅ FIXED LOGO */}
            <img
              src="https://naploglogistics.com/storage/app/public/YvtUcqKeFhDhscByH5yTUe14Z76Hs6VyhOxPoHz2.png"
              alt="Naplog Logistics"
              className="h-12 w-12 md:h-16 md:w-16 object-contain"
            />
            <div>
              <h1 className="text-[#1e40af] font-bold text-xl md:text-2xl">NAPLOG</h1>
              <p className="text-xs text-gray-600">Logistics Pvt. Ltd.</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-[#1e40af] font-semibold' : 'text-gray-700 hover:text-[#1e40af]'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-[#1e40af] font-semibold' : 'text-gray-700 hover:text-[#1e40af]'}`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors ${isActive('/services') ? 'text-[#1e40af] font-semibold' : 'text-gray-700 hover:text-[#1e40af]'}`}
            >
              Services
            </Link>
            <Link 
              to="/why-choose-us" 
              className={`transition-colors ${isActive('/why-choose-us') ? 'text-[#1e40af] font-semibold' : 'text-gray-700 hover:text-[#1e40af]'}`}
            >
              Why Choose Us
            </Link>
            <a href="https://b2b.naploglogistics.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#1e40af] transition-colors">
              Tracking
            </a>
            <a href="https://b2b.naploglogistics.com/login" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#1e40af] transition-colors">
              Login
            </a>
            <Link 
              to="/contact" 
              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)}
              className={`text-left transition-colors ${isActive('/') ? 'text-[#1e40af] font-semibold' : 'text-gray-700 hover:text-[#1e40af]'}`}>
              Home
            </Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}
              className={`text-left transition-colors ${isActive('/about') ? 'text-[#1e40af] font-semibold' : 'text-gray-700 hover:text-[#1e40af]'}`}>
              About
            </Link>
            <Link to="/services" onClick={() => setIsMenuOpen(false)}
              className={`text-left transition-colors ${isActive('/services') ? 'text-[#1e40af] font-semibold' : 'text-gray-700 hover:text-[#1e40af]'}`}>
              Services
            </Link>
            <Link to="/why-choose-us" onClick={() => setIsMenuOpen(false)}
              className={`text-left transition-colors ${isActive('/why-choose-us') ? 'text-[#1e40af] font-semibold' : 'text-gray-700 hover:text-[#1e40af]'}`}>
              Why Choose Us
            </Link>
            <a href="https://b2b.naploglogistics.com/" target="_blank" rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#1e40af] transition-colors text-left">
              Tracking
            </a>
            <a href="https://b2b.naploglogistics.com/login" target="_blank" rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#1e40af] transition-colors text-left">
              Login
            </a>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}
              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors">
              Contact Us
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
