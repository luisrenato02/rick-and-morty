/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
