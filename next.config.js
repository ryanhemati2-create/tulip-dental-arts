/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The site renders SVG/CSS placeholder art, so no remote image domains are
  // required out of the box. When you add real lab photos, configure them here.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
