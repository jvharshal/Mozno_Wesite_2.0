export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 pb-16">
      <h1 className="text-3xl font-bold text-navy-900 mb-6">About Mozno Advisory</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Mozno Advisory was founded by CA Harshal Jain to bridge the gap between expert financial advice and everyday Indians. Frustrated by the lack of transparent, client-focused guidance in the market, we built our firm on the principles of integrity, clarity, and empowerment.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          To empower every Indian with strategic, transparent, and personalised financial advice. We demystify complex financial concepts and deliver solutions that truly align with each client’s unique goals, values, and risk appetite.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          To be India’s most trusted financial advisory firm, recognised for our integrity, expertise, and relentless commitment to helping clients achieve lasting financial well-being and peace of mind.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Meet the Founder</h2>
        <img src="/assets/images/IMG_0756.jpeg" alt="CA Harshal Jain" className="w-48 rounded-lg mb-4" />
        <p className="text-gray-700 leading-relaxed">
          CA Harshal Jain is a qualified Chartered Accountant and a CFA Level II candidate with a passion for making financial expertise accessible. With a deep understanding of India's financial landscape, Harshal is dedicated to helping individuals navigate their financial journey with clarity and confidence.
        </p>
        <a href="https://www.linkedin.com/in/harshal-jain-979a54341/" target="_blank" rel="noopener noreferrer"
           className="inline-block mt-4 bg-teal-600 text-white px-4 py-2 rounded-lg">
          Connect on LinkedIn
        </a>
      </section>
    </div>
  );
}
