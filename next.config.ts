import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
   reactStrictMode: true,
   // Pin the workspace root so Next doesn't pick up unrelated lockfiles
   // found higher up in the home directory.
   outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
