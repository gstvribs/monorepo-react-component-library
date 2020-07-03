module.exports = {
  stories: [
    '../components/**/*.stories.(ts|mdx)',
    '../stories/*.stories.(ts|mdx)',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-notes',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
  ],
};
