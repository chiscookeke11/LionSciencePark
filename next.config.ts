import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // supabase
      {
        protocol: "https",
        hostname: "ldlzadpvhjejtpklcets.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },

      // Cloudinary
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
