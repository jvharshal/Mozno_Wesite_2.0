// src/components/InstagramFeed.tsx
import React, { useEffect, useState } from 'react';

interface IGPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
}

const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<IGPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  /* -------------------------------------------------
     Replace with your own Instagram Token once you
     generate it from https://developers.facebook.com/apps
  --------------------------------------------------*/
  const ACCESS_TOKEN = 'YOUR_INSTAGRAM_ACCESS_TOKEN';
  const USER_ID = '17841405822304914'; // @the_awareness_initiative user-id
  const FIELDS = 'id,media_url,permalink,caption';
  const LIMIT = 6;

  useEffect(() => {
    if (!ACCESS_TOKEN || ACCESS_TOKEN === 'YOUR_INSTAGRAM_ACCESS_TOKEN') {
      setLoading(false);
      setError(true);
      return;
    }

    fetch(
      `https://graph.instagram.com/${USER_ID}/media?fields=${FIELDS}&limit=${LIMIT}&access_token=${ACCESS_TOKEN}`
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.data) setPosts(json.data);
        else setError(true);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-40">
        <div className="w-8 h-8 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  if (error)
    return (
      <p className="text-center text-gray-500">
        Could not load Instagram feed.
      </p>
    );

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-navy-900 mb-6 text-center">
        Latest from Instagram
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <img
              src={post.media_url}
              alt={post.caption ? post.caption.slice(0, 60) : 'Instagram post'}
              className="w-full h-60 object-cover"
            />
            <div className="p-3 bg-white">
              <p className="text-sm text-gray-700 truncate">
                {post.caption ? post.caption.slice(0, 80) : ''}…
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default InstagramFeed;
