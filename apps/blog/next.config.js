const { withContentlayer } = require("next-contentlayer");
const withTM = require("next-transpile-modules")([
  "@pocto/core",
  "@pocto/hooks",
]);
const withPlugins = require("next-compose-plugins");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withPlugins([withContentlayer, withTM], nextConfig);
