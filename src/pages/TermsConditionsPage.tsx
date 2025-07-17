// src/pages/TermsConditionsPage.tsx
import React from 'react';

const TermsConditionsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-navy-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-700">
            Last updated: 17 July 2025
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-6 text-gray-700 leading-relaxed">
          {/* 1. Acceptance */}
          <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing and using <strong>mozno.in</strong>, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use this website.
          </p>

          {/* 2. Service Description */}
          <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">
            2. Service Description
          </h2>
          <p>
            Mozno Advisory provides financial education, mutual-fund distribution and goal-planning resources. We are an <strong>AMFI-registered Mutual Fund Distributor</strong> (ARN-XXXXXX). We do not provide investment advisory services as defined under SEBI (IA) Regulations, 2013.
          </p>

          {/* 3. User Obligations */}
          <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">
            3. User Obligations
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>You must provide accurate and complete information.</li>
            <li>You shall not use the website for any unlawful purpose.</li>
            <li>You agree not to reverse-engineer, hack or disrupt the website.</li>
          </ul>

          {/* 4. Intellectual Property */}
          <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">
            4. Intellectual Property
          </h2>
          <p>
            All content, logos and trademarks are the intellectual property of Mozno Advisory unless otherwise stated. Reproduction without written permission is prohibited.
          </p>

          {/* 5. Limitation of Liability */}
          <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">
            5. Limitation of Liability
          </h2>
          <p>
            We shall not be liable for any direct, indirect, incidental or consequential damages arising from the use or inability to use the website or its content.
          </p>

          {/* 6. External Links */}
          <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">
            6. External Links
          </h2>
          <p>
            The website may contain links to third-party sites. We are not responsible for the content or privacy practices of such sites.
          </p>

          {/* 7. Governing Law */}
          <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">
            7. Governing Law
          </h2>
          <p>
            These terms are governed by the laws of India and any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai.
          </p>

          {/* 8. Changes */}
          <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">
            8. Changes to Terms
          </h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance.
          </p>

          {/* 9. Contact */}
          <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">
            9. Contact
          </h2>
          <p>
            For questions regarding these terms, please email{' '}
            <a href="mailto:contact@mozno.in" className="text-teal-600 hover:underline">
              contact@mozno.in
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsConditionsPage;
