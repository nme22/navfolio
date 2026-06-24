const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   // Pin the workspace root so Next doesn't pick up unrelated lockfiles
   // found higher up in the home directory.
   outputFileTracingRoot: path.join(__dirname),
};

module.exports = nextConfig;
