module.exports = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [defaultLoaders.babel, '@mdx-js/loader'],
    })

    return config
  },
}
