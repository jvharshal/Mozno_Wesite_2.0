import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';

const FloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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
        <div className="mb-4 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 w-64">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-900 flex items-center">
              <img src="/dist/Mozno Advisory Logo New.png" alt="Logo" className="h-6 w-auto mr-2 object-contain" />
              Talk to Our Advisor
            </h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600"><X size={16}/></button>
          </div>

          <div className="space-y-3">
            <a href="tel:+919820507696" className="flex items-center space-x-3 p-3 rounded-lg bg-teal-50 hover:bg-teal-100">
              <Phone className="h-5 w-5 text-teal-600" />
              <div><div className="font-medium">Call Now</div><div className="text-sm text-gray-600">+91 98205 07696</div></div>
            </a>
            <a href="mailto:contact@mozno.in" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100">
              <Mail className="h-5 w-5 text-blue-600" />
              <div><div className="font-medium">Email Us</div><div className="text-sm text-gray-600">contact@mozno.in</div></div>
            </a>
            <a href="https://wa.me/919820507696" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 rounded-lg bg-teal-50 hover:bg-teal-100">
              <MessageCircle className="h-5 w-5 text-teal-600" />
              <div><div className="font-medium">WhatsApp</div><div className="text-sm text-gray-600">Quick Response</div></div>
            </a>
            <Link to="/contact" className="block w-full bg-teal-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-teal-700">Book Free Consultation</Link>
          </div>
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-full shadow-2xl">
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};

export default FloatingCTA;
