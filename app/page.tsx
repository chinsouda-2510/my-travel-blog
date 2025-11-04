import posts from "../data/post";
import PostCard from "../components/PosterCard";
export default function Home() {
  return (
   <>
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">🌍My Travel Blog</h1>
        <p className="text-gray-600 dark:text-gray-300">A short description of my blog, tourist attractions and travel tips</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </section>
    </>
  );
}
