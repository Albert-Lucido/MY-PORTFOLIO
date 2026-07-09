import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All images are served from the public directory (local),
    // so no remote patterns are required.
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
