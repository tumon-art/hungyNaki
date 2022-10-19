const withPWA = require("next-pwa")({
  dest: "public",
});

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   experimental: { images: { allowFutureImage: true } },
// };

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  experimental: { images: { allowFutureImage: true } },
});
