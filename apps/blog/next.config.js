const withTM = require("next-transpile-modules")(["ui"]);

// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true,
});
