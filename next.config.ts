import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      "kampatour.com",
      "hanoivoyage.com"
    ],
  },
};

export default nextConfig;
