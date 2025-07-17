import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import servicesData from '../data/services.json';

const tabs = [
  'wealth-management',
  'financial-planning',
  'tax-planning',
  'insurance-planning',
  'borrowing-solutions',
  'succession-planning',
];

const titles: Record<string, string> = {
  'wealth-management': 'Wealth Management',
  'financial-planning': 'Financial Planning',
  'tax-planning': 'Tax Planning',
  'insurance-planning': 'Insurance Consultancy',
  'borrowing-solutions': 'Borrowing Solutions',
  'succession-planning': 'Succession Planning',
};

const intro: Record<string, string> = {
  'wealth-management':
    'Grow your capital with intelligent investment strategies. As a nationwide distributor of Mutual Funds, PMS, and AIFs, we align the right products with your goals and risk profile.',
  'financial-planning':
    'Achieve your dreams with a clear, actionable plan. We create a comprehensive roadmap covering life goals, risk assessment, and strategic asset allocation.',
  'tax-planning':
    'Maximise your savings by minimising tax liability. We offer proactive Direct and Indirect Tax planning while keeping you compliant.',
  'insurance-planning':
    'Protect your future with unbiased insurance advice. We analyse your needs and source the best policies from vetted specialists.',
  'borrowing-solutions':
    'Secure funding on the best terms. Whether home, business, or personal loans, we leverage our network of banks and NBFCs.',
  'succession-planning':
    'Preserve your legacy and protect your loved ones. We ensure smooth asset transfer according to your wishes, preventing legal disputes.',
};

export default function ServicesPage() {
  const { service } = useParams();
  const active = service || 'wealth-management';

  return (
    <div className="max-w-6xl mx-auto px-4 pt-28 pb-16">
      <h1 className="text-3xl font-bold text-navy-900 mb-2">Comprehensive Financial Solutions Tailored For You</h1>

      <nav className="flex flex-wrap gap-2 mb-6 border-b">
        {tabs.map((t) => (
          <Link
            key={t}
            to={`/services/${t}`}
            className={`px-4 py-2 font-medium rounded-t-md ${
              active === t ? 'bg-teal-600 text-white' : 'text-navy-700 hover:bg-teal-50'
            }`}
          >
            {titles[t]}
          </Link>
        ))}
      </nav>

      <section>
        <h2 className="text-2xl font-semibold mb-2">{titles[active]}</h2>
        <p className="text-gray-700 mb-4">{intro[active]}</p>
        <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: servicesData.details[active] || '<p>Detailed content coming soon.</p>' }} />
      </section>
    </div>
  );
}
