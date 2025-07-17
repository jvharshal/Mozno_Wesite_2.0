// src/components/FloatingCTA.tsx
import React, { useState, useEffect } from 'react';
import { X, Phone, Mail, MessageCircle } from 'lucide-react';
import './FloatingCTA.css'; // Optional: for any additional CSS not covered by Tailwind

const FloatingCTA: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the CTA button after the user scrolls 300px down the page
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-md p-4 w-64">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-900">
              Talk to Our Advisor
            </h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-3">
            <a
              href="tel:+919820507696"
              className="flex items-center space-x-3 p-3 rounded-lg bg-teal-50 hover:bg-teal-100"
            >
              <Phone className="h-5 w-5 text-teal-600" />
              <span>
                <span className="font-medium text-gray-900">Call Now</span>
                <span className="text-sm text-gray-600">+91 98205 07696</span>
              </span>
            </a>
            <a
              href="mailto:contact@mozno.in"
              className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100"
            >
              <Mail className="h-5 w-5 text-blue-600" />
              <span>
                <span className="font-medium text-gray-900">Email Us</span>
                <span className="text-sm text-gray-600">contact@mozno.in</span>
              </span>
            </a>
            <a
              href="https://wa.me/919820507696"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 rounded-lg bg-teal-50 hover:bg-teal-100"
            >
              <MessageCircle className="h-5 w-5 text-teal-600" />
              <span>
                <span className="font-medium text-gray-900">WhatsApp</span>
                <span className="text-sm text-gray-600">Quick Response</span>
              </span>
            </a>
            <a
              href="#/contact"
              className="block w-full bg-teal-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-teal-700"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-full shadow-md transition-all duration-300 transform hover:scale-110"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default FloatingCTA;
