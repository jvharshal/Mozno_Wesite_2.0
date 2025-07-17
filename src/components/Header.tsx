// src/components/Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/dist/Mozno Logo Horizontal.png"
                alt="Mozno Advisory Logo"
                className="h-12 w-auto object-contain"
              />
              <div className="text-xl font-bold text-gray-900">
                MOZNO ADVISORY
              </div>
              <div className="text-sm text-teal-600">
                One-stop house for all your financial needs
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Services
            </Link>
            <Link to="/financial-education" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Educate
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Contact
            </Link>
            <a
              href="#/contact"
              className="bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Book Free Consultation
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-green-600 font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-green-600 font-medium">
                About
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-green-600 font-medium">
                Services
              </Link>
              <Link to="/financial-education" className="text-gray-700 hover:text-green-600 font-medium">
                Educate
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-green-600 font-medium">
                Contact
              </Link>
              <a
                href="#/contact"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
