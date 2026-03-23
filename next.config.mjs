/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [50, 60, 70, 75],
    deviceSizes: [320, 360, 375, 390, 414, 430, 640, 768, 1024, 1280, 1536],
    imageSizes: [32, 48, 56, 64, 96, 128, 150, 192, 256, 300, 384],
    minimumCacheTTL: 2678400,
  },
};

export default nextConfig;
