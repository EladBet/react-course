const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MinimalSvtstoreWebpackPlugin = require('minimal-svgstore-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = function (env) {
  const ENV = env.NODE_ENV || 'development';
  const isProd = ENV === 'production';
  const isDev = ENV === 'development';
  const ifProd = (x) => isProd && x;
  const ifDev = (x) => isDev && x;
  const removeEmpty = (arr) => arr.filter(Boolean);



  const configFor = () => ({
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
      filename: 'app.bundle.js'
    },
    resolve: {
      extensions: ['.jsx', '.js', '.scss'],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: path.resolve(__dirname, 'src'),
          enforce: 'pre',
          use: 'source-map-loader'
        },
        {
          test: /\.jsx?$/,
          include: [path.resolve(__dirname, 'src')],
          use: 'babel-loader'
        },
        {
          test: /\.(scss|css)$/,
          include: [path.resolve(__dirname, 'src')],
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: { modules: false, sourceMap: true, importLoaders: 1, minimize: false }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                  plugins: () => autoprefixer()
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                  includePaths: [
                    'node_modules/pb-styles'
                  ]
                }
              }
            ]
          })
        },
        {
          test: /\.svg$/,
          use: 'minimal-svgstore-loader',
        },
      ]
    },
    plugins: removeEmpty([
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': `'${ENV}'`
      }),
      new ExtractTextPlugin({
        filename: 'app.css',
        allChunks: true,
        disable: isDev,
      }),
      new MinimalSvtstoreWebpackPlugin({
        prefix: 'pb-cp-icon-',
        fileName: `app.svg.bundle.js`,
      }),
      ifDev(new HtmlWebpackPlugin({
        // we use the same html template for all elements
        template: './demo-index.ejs',
        // we'll inject manually to control the order
        inject: false,
      })),
      ifProd(new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false
        },
        sourceMap: true,
        compress: {
          unsafe_comps: true,
          properties: true,
          keep_fargs: false,
          pure_getters: true,
          collapse_vars: true,
          unsafe: true,
          warnings: false,
          screw_ie8: true,
          sequences: true,
          dead_code: true,
          drop_debugger: true,
          comparisons: true,
          conditionals: true,
          evaluate: true,
          booleans: true,
          loops: true,
          unused: true,
          hoist_funs: true,
          if_return: true,
          join_vars: true,
          cascade: true,
          drop_console: false
        }
      })),
      ifProd(new CompressionPlugin({
        test: /\.(js|css)$/
      })),
    ]),

    stats: { colors: true },

    node: {
      global: true,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false,
      setImmediate: false
    },

    devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map',

    devServer: {
      port: process.env.PORT || 3055,
      host: 'localhost',
      publicPath: '/',
      contentBase: './src',
      historyApiFallback: true,
      open: true,
      openPage: '',
    }
  });

  const config = configFor();

  return config;
};
