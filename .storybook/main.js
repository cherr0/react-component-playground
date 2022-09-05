const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  framework: '@storybook/react',
  stories: [
    '../src/**/*.stories.mdx',
    '../src/components/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-interactions',
    'storybook-dark-mode'
  ],
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
    }
  },
  staticDirs: ['./'],
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: async (config) => {
    config.plugins.push(new TsconfigPathsPlugin({}))

    return config
  }
}
