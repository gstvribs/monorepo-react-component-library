const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    library: 'react-component-library',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@thedesignsystem/button': path.resolve(
        __dirname,
        '../components/button/src/index',
      ),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
          },
        ],
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
};
