"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import clsx from "clsx";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  function toggleTheme() {
    setDark((d) => {
      const next = !d;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <Link href="/" className="text-xl font-bold">
            🌍 Travel Blog
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/about" className="hidden md:inline-block">About</Link>
          <Link href="/" className="hidden md:inline-block">Blog</Link>
          <button
            onClick={toggleTheme}
            className={clsx("px-3 py-1 rounded", dark ? "bg-gray-200 text-gray-800" : "bg-gray-800 text-white")}
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}
