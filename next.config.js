/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: [],
  distDir: "./dist",
  i18n: ["ru", "en"],
  assetPrefix: "igt",
  crossOrigin: true,
  poweredByHeader: "ittp",

  httpAgentOptions: [],
};

module.exports = nextConfig;
