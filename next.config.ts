import type { NextConfig } from "next";
import withNextIntl from "next-intl/plugin";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      // Next's default is 1 MB. The contact form never exceeds a few kB.
      bodySizeLimit: "64kb",
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default withNextIntl()(nextConfig);
