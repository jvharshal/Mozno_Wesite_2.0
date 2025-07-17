// src/components/YouTubeFeed.tsx
import React, { useEffect, useState } from 'react';

interface YouTubeVideo {
  id: string;
  snippet: {
    title: string;
    thumbnails: { medium: { url: string } };
  };
}

const YouTubeFeed: React.FC = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Replace with your own channelId + key once you enable YouTube Data API v3
  const CHANNEL_ID = 'UC9zTj_N6kJmrFMErrY61jUw'; // @awareness_initiative
  const API_KEY    = 'YOUR_YOUTUBE_API_KEY';
  const MAX        = 3;

  useEffect(() => {
    if (!API_KEY || API_KEY === 'YOUR_YOUTUBE_API_KEY') {
      setLoading(false);
      setError(true);
      return;
    }

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=${MAX}&order=date&type=video&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.items) setVideos(json.items);
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
        Could not load YouTube feed.
      </p>
    );

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-navy-900 mb-6 text-center">
        Latest from YouTube
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <a
            key={video.id.videoId}
            href={`https://youtu.be/${video.id.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-3 bg-white">
              <p className="text-sm text-gray-700 truncate">
                {video.snippet.title}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default YouTubeFeed;
