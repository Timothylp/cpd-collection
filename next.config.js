/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["storage.googleapis.com", "8090-timothylp-cpdcollection-76lm2ia6dze.ws-eu74.gitpod.io"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
