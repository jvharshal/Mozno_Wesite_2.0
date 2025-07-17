export default function YouTubeFeed() {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Latest from YouTube</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <iframe
          className="w-full aspect-video rounded-lg"
          src="https://www.youtube.com/embed/videoseries?list=UUQ2xX6rM7eP5zE1zZ1Z1Z1Q"
          title="Awareness Initiative"
          allowFullScreen
        ></iframe>
        {/* Use your channel playlist id */}
      </div>
    </div>
  );
}
