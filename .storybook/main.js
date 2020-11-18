const custom = require('../webpack.config.js');

module.exports = {
  stories: [
    '../components/**/*.stories.(ts|tsx|mdx)',
    '../stories/*.stories.(ts|tsx|mdx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: (config) => {
    config.resolve.extensions.push('.ts', '.tsx');
    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules },
    };
  },
};
