const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// Done -TODO: Add and configure workbox plugins for a service worker and manifest file.
// Done -TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Text Editor'
      }),

      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'service-worker.js',
      }),
      new WebpackPwaManifest({
        // TODO: Create a manifest.json:
        name: "Just Another Text Editor",
        short_name: "J.A.T.E.",
        description: "Takes notes with JavaScirpt syntax highlighting",
        background_color: "#225ca3",
        theme_color: "#225ca3",
        start_url: "./",
        publicPath: "./",
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            size: [96, 128, 192, 256, 512],
            destination: path.join("/assets/icons")
          }
        ]
      }),
     
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },
      ],
    },
  };
};
