// src/pages/ServicesPage.tsx
import React, { useState } from 'react';
import services from '../data/services.json';

const ServicesPage: React.FC = () => {
  const serviceTabs = services; // matches JSON order
  const [activeTab, setActiveTab] = useState(serviceTabs[0].id);

  const activeService = serviceTabs.find((s) => s.id === activeTab)!;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Our Financial Services
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Comprehensive, transparent and tailored solutions for every stage of your financial life.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-gray-200">
            {serviceTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm md:text-base font-medium rounded-t-lg transition-colors
                  ${activeTab === tab.id
                    ? 'bg-teal-600 text-white'
                    : 'text-gray-500 hover:text-teal-600'
                  }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left: Icon + Title */}
              <div className="md:w-1/3">
                <div className="text-6xl mb-4">{activeService.icon}</div>
                <h2 className="text-3xl font-bold text-navy-900 mb-2">
                  {activeService.name}
                </h2>
                <p className="text-gray-700 mb-4">{activeService.intro}</p>
              </div>

              {/* Right: Details */}
              <div className="md:w-2/3 space-y-6">
                {/* Products / Process */}
                {'products' in activeService.details ? (
                  <>
                    <h3 className="text-xl font-semibold text-navy-900">
                      Products & Benefits
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {activeService.details.products.map((p, i) => (
                        <div key={i} className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold text-teal-700">{p.name}</h4>
                          <ul className="text-sm text-gray-600 mt-1 list-disc list-inside">
                            {p.benefits.map((b, j) => <li key={j}>{b}</li>)}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold text-navy-900">Process</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      {activeService.details.process?.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  </>
                )}

                {/* Additional Info */}
                {activeService.details.regulatory && (
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Regulatory Highlights</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {activeService.details.regulatory.map((r, i) => <li key={i}>{r}</li>)}
                    </ul>
                  </div>
                )}

                {activeService.details.partnerLogos && (
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Our Partners</h4>
                    <div className="flex space-x-4">
                      {activeService.details.partnerLogos.map((logo, i) => (
                        <img key={i} src={`/dist/${logo}`} alt="partner" className="h-10 grayscale" />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Not sure which service suits you?
          </h2>
          <p className="text-lg mb-6">
            Book a free consultation and we’ll craft a personalised roadmap.
          </p>
          <a
            href="/contact"
            className="bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Book Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
