// src/pages/DisclaimerPage.tsx
import React from 'react';

const DisclaimerPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-20 bg-gradient-to-b from-navy-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-navy-900 mb-4">Disclaimer</h1>
          <p className="text-lg text-gray-700">
            Please read the following carefully before using this website.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-6 text-gray-700 leading-relaxed">
          <p>
            The content on <strong>mozno.in</strong> is for informational and educational purposes only and does not constitute financial, investment, tax, or legal advice. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website for any purpose.
          </p>

          <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">
            Investment Risk
          </h2>
          <p>
            Investments in securities, mutual funds, or any other financial instruments are subject to market risks. Past performance is not indicative of future results. Please read all scheme-related documents carefully and consult a qualified financial advisor before making any investment decisions.
          </p>

          <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">
            Regulatory Disclosure
          </h2>
          <p>
            Mozno Advisory is an <strong>AMFI-registered Mutual Fund Distributor</strong> and acts as a distributor of mutual fund schemes. We do not provide investment advisory services as defined under SEBI (Investment Advisers) Regulations, 2013. All recommendations are based on publicly available information and the client’s stated objectives.
          </p>

          <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">
            Limitation of Liability
          </h2>
          <p>
            In no event will Mozno Advisory, its directors, employees, or affiliates be liable for any loss or damage including, without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
          </p>

          <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">
            External Links
          </h2>
          <p>
            This website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external sites.
          </p>

          <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">
            User Responsibility
          </h2>
          <p>
            Users are advised to conduct their own due diligence and/or consult professional advisors before acting on any information provided on this website. The final investment decision rests solely with the user.
          </p>

          <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">
            Updates
          </h2>
          <p>
            This disclaimer may be updated from time to time without notice. Continued use of the website constitutes acceptance of any changes.
          </p>

          <p className="mt-10 font-medium">
            Last updated: 17 July 2025
          </p>
        </div>
      </section>
    </div>
  );
};

export default DisclaimerPage;
