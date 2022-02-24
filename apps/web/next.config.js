const withTM = require("next-transpile-modules")([
  "@pocto/core",
  "@pocto/hooks",
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: require("./next-redirects"),
};

module.exports = withTM(nextConfig);
