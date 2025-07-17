import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services.json';

export default function HomePage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Empowering Your Financial Journey</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          At Mozno Advisory, we believe financial freedom should be accessible to everyone. Led by CA Harshal Jain, we simplify complex financial concepts to deliver personalised solutions across wealth management, financial planning, tax, insurance, borrowing, and succession.
        </p>
        <Link to="/contact" className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700">
          Start Your Financial Journey
        </Link>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-navy-900 mb-10">Your Complete Financial Partner</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s: any) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Mozno */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-8">Advice You Can Trust. Results You Can See.</h2>
          <ul className="space-y-4 text-gray-700">
            <li>✅ 50+ Happy Clients</li>
            <li>✅ Nationwide Reach</li>
            <li>✅ Transparent & Unbiased</li>
            <li>✅ Personalised Solutions</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
