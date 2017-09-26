const path = require('path');

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push({
    test: /\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          modules: true,
          // localIdentName: '[hash:base64:8]',
          localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
          discardComments: { removeAll: true },
          minimize: true,
        },
      },
      'postcss-loader',
    ],
    include: path.resolve(__dirname, '../'),
  });

  storybookBaseConfig.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 3,
          modules: true,
          // localIdentName: '[hash:base64:8]',
          localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
          discardComments: { removeAll: true },
          minimize: true,
        },
      },
      'postcss-loader',
      'sass-loader',
    ],
    include: path.resolve(__dirname, '../'),
  });

  return storybookBaseConfig;
};
