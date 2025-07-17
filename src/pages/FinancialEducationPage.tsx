// src/pages/FinancialEducationPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import blogsMeta from '../content/blogs.json';
import InstagramFeed from '../components/InstagramFeed';
import YouTubeFeed from '../components/YouTubeFeed';

const FinancialEducationPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Financial Education Hub
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Knowledge is power. Empower yourself with blogs, calculators and daily insights.
          </p>
        </div>
      </section>

      {/* Featured Blogs */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsMeta.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-4 inline-block text-teal-600 font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <InstagramFeed />
        </div>
      </section>

      {/* YouTube Feed */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <YouTubeFeed />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Questions after reading?
          </h2>
          <p className="text-lg mb-6">
            Book a free consultation and let’s apply these lessons to your goals.
          </p>
          <Link
            to="/contact"
            className="bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FinancialEducationPage;
