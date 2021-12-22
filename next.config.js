/** @type {import('next').NextConfig} */
const withSass = require('@zeit/next-sass')
module.exports = {
  reactStrictMode: true,
}

module.exports = withSass({
  cssModules: true
})
