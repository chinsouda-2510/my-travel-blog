"use client"

import Image from "next/image";
import Link from "next/link";
export default function PostCard({ post }) {
  return (
    <article className="border rounded-lg overflow-hidden shadow-sm bg-white dark:bg-gray-900">
      <div className="h-44 w-full overflow-hidden">
        {/* <img src={post.cover} alt={post.title} className="w-full h-full object-cover" /> */}
        <Image src={post.cover} alt={post.title} width={1600} height={1200} className="w-full h-full object-cover" ></Image>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="text-blue-600 dark:text-blue-400">
          Read more →
        </Link>
      </div>
    </article>
  );
}