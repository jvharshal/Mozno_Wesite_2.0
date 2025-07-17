// src/pages/BlogDetailPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ChevronLeft } from 'lucide-react';

interface BlogMeta {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
}

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [meta, setMeta] = useState<BlogMeta | null>(null);
  const [content, setContent] = useState<string>('');

  // Import all blog metadata from json
  const blogsMeta = import.meta.glob<{
    default: BlogMeta;
  }>('../content/blogs/*.json', { eager: true });

  // Import all markdown files
  const blogsContent = import.meta.glob<string>(
    '../content/blogs/*.md',
    { eager: true, as: 'raw' }
  );

  useEffect(() => {
    // Find matching json and md
    const metaKey = Object.keys(blogsMeta).find((k) => k.includes(slug));
    const contentKey = Object.keys(blogsContent).find((k) => k.includes(slug));

    if (metaKey && contentKey) {
      setMeta(blogsMeta[metaKey].default);
      setContent(blogsContent[contentKey]);
    }
  }, [slug, blogsMeta, blogsContent]);

  if (!meta) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500">Blog not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero / Banner */}
      <section
        className="relative bg-gradient-to-r from-teal-500 to-teal-700 py-20 bg-cover bg-center"
        style={{
          backgroundImage: meta.image ? `url(${meta.image})` : undefined,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-5xl mx-auto px-4 text-center text-white">
          <Link
            to="/financial-education"
            className="inline-flex items-center mb-4 text-sm hover:underline"
          >
            <ChevronLeft size={16} className="mr-1" /> Back to All Articles
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {meta.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center space-x-4 text-sm">
            <span>{meta.date}</span>
            <span>•</span>
            <span>{meta.readTime}</span>
            <span>•</span>
            <div className="flex flex-wrap space-x-2">
              {meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white bg-opacity-20 px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="max-w-4xl mx-auto px-4 py-12 prose prose-lg prose-teal">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({ children }) => (
              <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">
                {children}
              </h3>
            ),
            table: ({ children }) => (
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  {children}
                </table>
              </div>
            ),
            th: ({ children }) => (
              <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="border border-gray-300 px-4 py-2">{children}</td>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>

      {/* Bottom CTA */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-navy-900 mb-4">
            Need help implementing these ideas?
          </h3>
          <p className="text-gray-700 mb-6">
            Book a no-obligation consultation and let’s turn your goals into a clear, actionable plan.
          </p>
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

export default BlogDetailPage;
