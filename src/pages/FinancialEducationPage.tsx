import { Link } from 'react-router-dom';
import blogs from '../content/blogs.json';

export default function FinancialEducationPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-28 pb-16">
      <h1 className="text-4xl font-bold text-navy-900 mb-4 text-center">Knowledge is Power. Empower Yourself.</h1>
      <p className="text-center text-gray-700 mb-10">
        Welcome to our Financial Education hub. Explore insights, guides, and practical tips to become a smarter investor.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog: any) => (
            <Link key={blog.slug} to={`/blog/${blog.slug}`} className="bg-white rounded-lg shadow p-4 hover:shadow-md">
              <h3 className="text-lg font-semibold text-navy-800 mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-600">{blog.excerpt}</p>
              <span className="text-teal-600 text-sm mt-2 inline-block">Read More →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Our Instagram Feed</h2>
        <iframe
          src="https://www.instagram.com/the_awareness_initiative/embed"
          className="w-full h-96 border-0 rounded-lg"
          allowFullScreen
        ></iframe>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Latest from YouTube</h2>
        <iframe
          className="w-full aspect-video rounded-lg"
          src="https://www.youtube.com/embed/videoseries?list=UUQ2xX6rM7eP5zE1zZ1Z1Z1Q"
          title="Awareness Initiative"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
}
