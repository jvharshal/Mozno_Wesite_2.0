// src/pages/AboutPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            About Mozno Advisory
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Empowering every Indian with transparent, personalised and goal-based financial advice.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mozno Advisory was founded by <strong>CA Harshal Jain</strong> to bridge the gap between expert financial advice and everyday Indians. Frustrated by the lack of transparent, client-focused guidance in the market, we built our firm on the principles of <strong>integrity, clarity and empowerment</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We demystify complex financial concepts and provide you with the knowledge and tools to build a secure and prosperous future with confidence.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-navy-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To empower every Indian with strategic, transparent and personalised financial advice. We demystify complex concepts and deliver solutions that truly align with each client’s unique goals, values and risk appetite.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-navy-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be India’s most trusted financial advisory firm, recognised for integrity, expertise and an unrelenting commitment to helping clients achieve lasting financial well-being and peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <img
            src="/dist/IMG_0756.jpeg"
            alt="CA Harshal Jain"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
          <div>
            <h3 className="text-2xl font-bold text-navy-900 mb-2">Meet the Founder</h3>
            <h4 className="text-lg font-semibold text-teal-600 mb-2">CA Harshal Jain</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chartered Accountant and CFA Level II candidate with a passion for making financial expertise accessible and actionable. With deep understanding of India’s financial landscape, Harshal is dedicated to helping individuals and families navigate their financial journey with clarity and confidence.
            </p>
            <a
              href="https://www.linkedin.com/in/harshal-jain-979a54341/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
            >
              <Linkedin size={20} />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h4 className="text-xl font-semibold text-teal-600 mb-2">Integrity</h4>
              <p className="text-gray-700">Transparent, commission-free advice driven solely by your best interests.</p>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-semibold text-teal-600 mb-2">Clarity</h4>
              <p className="text-gray-700">Jargon-free explanations that make complex finance feel simple.</p>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-semibold text-teal-600 mb-2">Empowerment</h4>
              <p className="text-gray-700">Tools and knowledge so you can make confident, informed decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-navy-900 mb-4">
            Ready to Start Your Financial Journey?
          </h3>
          <Link
            to="/contact"
            className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-teal-700 transition-colors"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
