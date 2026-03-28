/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  /* config options here */
  images: {
    unoptimized: true, // Tambahkan ini agar aman saat deploy di Vercel/Static
  }
};

export default nextConfig;