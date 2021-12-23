const { withContentlayer } = require("next-contentlayer");
const withTM = require("next-transpile-modules")(["ui"]);
const withPlugins = require('next-compose-plugins');

// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withPlugins([withContentlayer, withTM], {
  reactStrictMode: true,
  swcMinify: true,
});
