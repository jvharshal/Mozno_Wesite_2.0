// src/components/Footer.tsx
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Youtube, LinkedIn } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/dist/Mozno Advisory Logo New.png"
                alt="Mozno Advisory Logo"
                className="h-12 w-auto object-contain"
              />
              <div className="text-xl font-bold">MOZNO ADVISORY</div>
              <div className="text-sm text-teal-400">One-stop house for all your financial needs</div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded by CA Harshal Jain, Mozno Advisory simplifies your financial journey with expert guidance in wealth management, tax planning, and comprehensive financial solutions.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/the_awareness_initiative" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@awareness_initiative" className="text-gray-400 hover:text-green-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/harshal-jain-979a54341/" className="text-gray-400 hover:text-green-400 transition-colors">
                <LinkedIn className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#/services/wealth-management" className="text-gray-300 hover:text-green-400 transition-colors">Wealth Management</a></li>
              <li><a href="#/services/financial-planning" className="text-gray-300 hover:text-green-400 transition-colors">Financial Planning</a></li>
              <li><a href="#/services/tax-planning" className="text-gray-300 hover:text-green-400 transition-colors">Tax Planning</a></li>
              <li><a href="#/services/insurance-planning" className="text-gray-300 hover:text-green-400 transition-colors">Insurance Planning</a></li>
              <li><a href="#/services/borrowing-solutions" className="text-gray-300 hover:text-green-400 transition-colors">Borrowing Solutions</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#/about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#/blog" className="text-gray-300 hover:text-green-400 transition-colors">Blog</a></li>
              <li><a href="#/contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>106, Shyamkamal 'C' Building,</p>
                  <p>Agarwal Market, Vile Parle (E),</p>
                  <p>Mumbai - 400 057.</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                <a href="tel:+919820507696" className="text-gray-300 hover:text-green-400 transition-colors">
                  +91 98205 07696
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                <a href="mailto:contact@mozno.in" className="text-gray-300 hover:text-green-400 transition-colors">
                  contact@mozno.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Mozno Advisory. All rights reserved.
            </div>

            <div className="flex flex-wrap gap-6">
              <a href="#/disclaimer" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Disclaimer
              </a>
              <a href="#/privacy-policy" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#/terms-conditions" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>

          <div className="mt-6 text-center text-gray-500 text-sm">
            <p>Investment in securities is subject to market risk. Please read all scheme related documents carefully.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
