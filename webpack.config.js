const webpack = require('webpack')
const path = require('path')
const CompressionPlugin = require("compression-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const sourcePath = path.join(__dirname, './src')

module.exports = function (env) {
  const nodeEnv = env && env.prod ? 'production' : 'development'
  const isProd = nodeEnv === 'production'

  const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['inferno.vendor'],
      chunks: ["inferno"],
      minChunks: function(module) {
        return isExternal(module)
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "purecss.vendor",
      chunks: ["purecss"],
      minChunks: function(module, count){
        return isExternal(module)
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "mincss.vendor",
      chunks: ["mincss"],
      minChunks: function(module, count){
        return isExternal(module)
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "photo.vendor",
      chunks: ["photo"],
      minChunks: function(module, count){
        return isExternal(module)
      },
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: 'inferno.html',
       title: 'Inferno',
       template: 'inferno/index-template.html',
       chunks: ['inferno.vendor', 'inferno'],
    }),
    new HtmlWebpackPlugin({
      filename: 'purecss.html',
      title: 'PureCSS',
      template: 'purecss/index-template.html',
      chunks: ['purecss.vendor', 'purecss'],
   }),
    new HtmlWebpackPlugin({
      filename: 'mincss.html',
      title: 'MINCSS',
      template: 'mincss/index-template.html',
      chunks: ['mincss.vendor', 'mincss'],
    }),
    new HtmlWebpackPlugin({
      filename: 'photo.html',
      title: 'Photo',
      template: 'photo/index-template.html',
      chunks: ['photo.vendor', 'photo'],
    })
  ]

  if (isProd) {
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        output: {
          comments: false
        },
        sourceMap: true
      }),
      new CompressionPlugin({
           asset: "[path].gz[query]",
           algorithm: "gzip",
           test: /\.js$|\.css$|\.html$|\.eot$|\.svg$|\.ttf$|\.woff$/,
           threshold: 1024,
           minRatio: 0.8
       }),
       new ExtractTextPlugin("[name].css")
    )
  } else {
    plugins.push(
      new webpack.HotModuleReplacementPlugin()
    )
  }

  return {
    devtool: isProd ? 'source-map' : 'eval',
    context: sourcePath,
    entry: {
      inferno: './inferno/index.js',
      purecss: './purecss/index.js',
      mincss: './mincss/index.js',
      photo: './photo/index.js'
    },
    output: {
      path: __dirname + '/static',
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
            query: {
              name: '[name].[ext]'
            },
          },
        },
        {
          test: /\.less$/,
          use: isProd ? lessExtractTextLoader() : lessNonExtractTextLoader()
        },
        {
          test: /\.css$/,
          use: isProd ? extractTextLoader() : nonExtractTextLoader()
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: isProd ? "file-loader?limit=10000&mimetype=application/font-woff" : "url-loader?limit=10000&mimetype=application/font-woff"
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: isProd ? "file-loader" : "url-loader"
        },
        {
          test: /\.(jpg|jpeg|png)$/,
          loader: isProd ? "file-loader" : "url-loader"
        },
        {
          test: /\.(js|jsx)$/,
          use: [
            'babel-loader'
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
      modules: [
        path.resolve(__dirname, 'node_modules'),
        sourcePath
      ]
    },

    plugins,

    performance: isProd && {
      maxAssetSize: 100000,
      maxEntrypointSize: 100000,
      hints: 'warning',
    },

    stats: {
      colors: {
        green: '\u001b[32m',
      }
    },

    devServer: {
      contentBase: './src',
      historyApiFallback: true,
      port: 3000,
      compress: isProd,
      inline: !isProd,
      hot: !isProd,
      stats: {
        assets: true,
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true,
        colors: {
          green: '\u001b[32m',
        }
      },
    }
  }
}

function isExternal(module) {
  var userRequest = module.userRequest

  if (typeof userRequest !== 'string') {
    return false
  }

  return userRequest.indexOf('bower_components') >= 0 ||
         userRequest.indexOf('node_modules') >= 0 ||
         userRequest.indexOf('libraries') >= 0
}

function nonExtractTextLoader() {
  return [
    'style-loader',
    'css-loader?sourceMap'
  ]
}

function lessNonExtractTextLoader() {
  return [
    'style-loader',
    'css-loader?sourceMap',
    'less-loader?sourceMap'
  ]
}

function extractTextLoader() {
  return ExtractTextPlugin.extract({
     fallback: 'style-loader', use: 'css-loader'
   })
}

function lessExtractTextLoader() {
  return ExtractTextPlugin.extract({
     fallback: 'style-loader', use: 'css-loader!less-loader'
   })
}
