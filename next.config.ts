import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // mysql2 是原生模块，不让 Next 打包它，运行时直接用
  serverExternalPackages: ["mysql2"],
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
