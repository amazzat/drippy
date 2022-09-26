const { withBlitz } = require("@blitzjs/next");

const withTM = require("next-transpile-modules")(["@drippy/contracts"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withBlitz(withTM(nextConfig));
