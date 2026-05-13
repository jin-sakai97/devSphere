import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Optimized for Docker environments
  reactStrictMode: true,

  /**
   * By default, NEXT_PUBLIC_ variables are automatically
   * bundled for the browser. Explicitly mapping them here
   * can be useful for validation or overriding.
   */
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

export default nextConfig;
