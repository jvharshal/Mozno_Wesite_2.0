// src/components/Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Educate', path: '/financial-education' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/dist/Mozno Logo Horizontal.png"
              alt="Mozno Advisory"
              className="h-12 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-gray-900">MOZNO ADVISORY</div>
              <div className="text-sm text-teal-600">One-stop house for all your financial needs</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Book Free Consultation
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map(({ label, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="text-gray-700 hover:text-teal-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
