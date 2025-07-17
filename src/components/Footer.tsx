import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const services = [
    { name: 'Wealth Management', href: '/services/wealth-management' },
    { name: 'Financial Planning', href: '/services/financial-planning' },
    { name: 'Tax Planning', href: '/services/tax-planning' },
    { name: 'Insurance Planning', href: '/services/insurance-planning' },
    { name: 'Borrowing Solutions', href: '/services/borrowing-solutions' },
    { name: 'Succession Planning', href: '/services/succession-planning' },
  ];

  const quick = [
    { name: 'About Us', href: '/about' },
    { name: 'Educate', href: '/educate' },
    { name: 'Contact', href: '/contact' },
  ];

  const legal = [
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-conditions' },
  ];

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/dist/Mozno Advisory Logo New.png" alt="Logo" className="h-12 mb-4" />
            <p className="text-sm text-gray-300 leading-relaxed">
              Founded by CA Harshal Jain, Mozno Advisory simplifies your financial journey with expert guidance.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Services</h3>
            {services.map((s) => (
              <Link key={s.name} to={s.href} className="block text-sm text-gray-300 hover:text-teal-400 mb-1">{s.name}</Link>
            ))}
          </div>
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            {quick.map((q) => (
              <Link key={q.name} to={q.href} className="block text-sm text-gray-300 hover:text-teal-400 mb-1">{q.name}</Link>
            ))}
          </div>
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <div className="flex items-start space-x-2 mb-2">
              <MapPin className="w-4 h-4 mt-1 text-teal-400" />
              <span className="text-sm text-gray-300">
                Office No.106, Shyamkamal 'C' Building, Agarwal Market, Vile Parle (E), Mumbai - 400 057
              </span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Phone className="w-4 h-4 text-teal-400" />
              <a href="tel:+919820507696" className="text-sm text-gray-300 hover:text-teal-400">+91 98205 07696</a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-teal-400" />
              <a href="mailto:contact@mozno.in" className="text-sm text-gray-300 hover:text-teal-400">contact@mozno.in</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Mozno Advisory. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            {legal.map((l) => (
              <Link key={l.name} to={l.href} className="hover:text-teal-400">{l.name}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
