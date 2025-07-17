import { useParams } from 'react-router-dom';
import blogs from '../content/blogs.json';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = blogs.find((b: any) => b.slug === slug);
  if (!blog) return <div className="pt-28 text-center">Blog not found</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 pt-28 pb-16">
      <h1 className="text-3xl font-bold text-navy-900 mb-4">{blog.title}</h1>
      <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
}
