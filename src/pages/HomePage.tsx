// src/pages/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import services from '../data/services.json';
import { ArrowRight, Users, Globe, ShieldCheck, HandCoins, Heart } from 'lucide-react';

const HomePage: React.FC = () => {
  const whyChoose = [
    { icon: <Users className="h-8 w-8" />, title: '50+ Happy Clients' },
    { icon: <Globe className="h-8 w-8" />, title: 'Nationwide Reach' },
    { icon: <ShieldCheck className="h-8 w-8" />, title: 'Transparent & Unbiased' },
    { icon: <HandCoins className="h-8 w-8" />, title: 'Personalised Solutions' },
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Empowering Your Financial Journey
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl">
              Led by CA Harshal Jain, we simplify complex finance to deliver personalised
              solutions across wealth, tax, insurance, borrowing and succession—so you
              make confident decisions at every stage.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src="/dist/Mozno Advisory Logo New.png"
              alt="Mozno Advisory"
              className="w-48 md:w-64 drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 text-center mb-12">
            Your Complete Financial Partner
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <ServiceCard
                key={svc.id}
                title={svc.name}
                description={svc.short}
                icon={svc.icon}
                link={svc.path}
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 text-center mb-12">
            Advice You Can Trust. Results You Can See.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-teal-600 mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-navy-900">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Heart className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-lg mb-8">
            Book a free, no-obligation consultation today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
