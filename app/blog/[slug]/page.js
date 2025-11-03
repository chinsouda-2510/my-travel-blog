"use client"
import { useState } from "react";
import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();
  const[form, setForm]=useState({
    title:"",
    excerpt:"",
    cover:"",
    content:"",
  });
 const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      slug: form.title.toLowerCase().replace(/\s+/g, "-"),
      title: form.title,
      excerpt: form.excerpt,
      cover: form.cover || "/default.jpg",
      content: form.content,
      likes: 0,
    };

    // ดึงโพสต์เดิมจาก localStorage
    const existing = JSON.parse(localStorage.getItem("posts") || "[]");
    existing.push(newPost);
    localStorage.setItem("posts", JSON.stringify(existing));

    alert("✅ เพิ่มโพสต์ใหม่สำเร็จ!");
    router.push("/");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📝 Add New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="excerpt"
          placeholder="Short Description"
          value={form.excerpt}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="cover"
          placeholder="Image URL (optional)"
          value={form.cover}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <textarea
          name="content"
          placeholder="Content..."
          value={form.content}
          onChange={handleChange}
          rows={6}
          className="w-full border p-2 rounded"
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save Post
        </button>
      </form>
    </div>
  );
}