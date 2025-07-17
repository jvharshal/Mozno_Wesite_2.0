// src/pages/PrivacyPolicyPage.tsx
import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-20 bg-gradient-to-b from-navy-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-navy-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-700">
            Last updated: 17 July 2025
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-6 text-gray-700 leading-relaxed">
          <p>
            At <strong>Mozno Advisory</strong> (“we”, “our”, “us”), your privacy is paramount. This Privacy Policy explains how we collect, use, store and protect your information when you visit <strong>mozno.in</strong> or interact with our services.
          </p>

          {/* 1. Information We Collect */}
          <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">1. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Personal Data:</strong> name, email, phone number, address, financial goals (provided via contact forms or consultations).</li>
            <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent, device identifiers (via cookies and analytics).</li>
            <li><strong>Cookies:</strong> small text files to enhance user experience; you may disable cookies in your browser settings.</li>
          </ul>

          {/* 2. How We Use Your Information */}
          <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Respond to enquiries and provide financial education.</li>
            <li>Send newsletters, updates or marketing communications (opt-out anytime).</li>
            <li>Improve website functionality and user experience.</li>
            <li>Meet legal and regulatory obligations.</li>
          </ul>

          {/* 3. Data Storage & Security */}
          <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">3. Data Storage & Security</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Data is stored on secure servers with encryption in transit and at rest.</li>
            <li>Access is restricted to authorised personnel only.</li>
            <li>We do not sell, rent or trade your personal information.</li>
          </ul>

          {/* 4. Third-Party Services */}
          <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">4. Third-Party Services</h2>
          <p>
            We use third-party analytics (e.g., Google Analytics) and service providers for hosting, email delivery and payment processing. These parties are bound by confidentiality agreements and only process data on our behalf.
          </p>

          {/* 5. Your Rights */}
          <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">5. Your Rights</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Access:</strong> Request a copy of your personal data.</li>
            <li><strong>Correction:</strong> Update or rectify inaccurate data.</li>
            <li><strong>Deletion:</strong> Request deletion of your data (subject to legal obligations).</li>
            <li><strong>Opt-out:</strong> Unsubscribe from marketing emails at any time.</li>
          </ul>

          {/* 6. Contact Us */}
          <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">6. Contact Us</h2>
          <p>
            For questions or requests regarding your data, please email us at{' '}
            <a href="mailto:contact@mozno.in" className="text-teal-600 hover:underline">
              contact@mozno.in
            </a>{' '}
            or call +91 98205 07696.
          </p>

          <p className="mt-10 font-medium">
            By using our website, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
