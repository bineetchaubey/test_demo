const HtmlWebpackPlugin = require('html-webpack-plugin');
 const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: ['./src/index.tsx'],
    module: {
      rules: [
        {
            // Typescript loader
            test: /\.tsx?$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
              },
            },
          },
          {
            // CSS Loader
            test: /\.css$/,
            use: [
              { loader: 'style-loader' },
              { loader: 'css-loader' },
            ],
          },
          {
            // SCSS (SASS) Loader
            test: /\.s[ac]ss$/i,
            use: [
              { loader:  'style-loader' },
              { loader: 'css-loader' },
              { loader: 'sass-loader' },
            ],
          },
         
          {
            // Assets loader
            // More information here https://webpack.js.org/guides/asset-modules/
            test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg|eot|ttf|woff|woff2)$/i,
            type: 'asset',
            generator: {
              filename: 'assets/[hash][ext][query]',
            },
          },
      ],
    },
    output: {
      filename: '[name].js',
      chunkFilename: '[name].chunk.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // favicon: 'assets/images/logo.png',
            inject: true,
          }),
          new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css',
            chunkFilename: '[name].[chunkhash].chunk.css',
          }),
    ],
    resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    },
    stats: 'errors-warnings',
    devtool: 'cheap-module-source-map',
    devServer: {
      open: true,
      historyApiFallback: true,
      hot: true
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    performance: {
      hints: false,
    },
  };