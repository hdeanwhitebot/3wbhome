import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@3wb/ui", "@3wb/database", "@3wb/payments", "@3wb/types"],
};

export default nextConfig;
