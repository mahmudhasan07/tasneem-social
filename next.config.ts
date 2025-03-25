import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images :{
    unoptimized : true
  },
  webpack: (config, { isServer }) => {
    // Add support for importing video files
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/, // Match video file extensions
      type: "asset/resource", // Use Webpack's asset modules to serve files
      generator: {
        filename: "static/media/[name].[hash][ext]", // Output path for video files
      },
    });

    return config;
  },
};

export default nextConfig;
