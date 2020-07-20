const path = require('path')
const fs = require('fs')
const webpack = require("webpack")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

// Main const
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#main-const
const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
}

// Pages const for HtmlWebpackPlugin
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#html-dir-folder
// const PAGES_DIR = PATHS.src
const PAGES_DIR = `${PATHS.src}/pug/pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports = {
  // BASE config
  externals: {
    paths: PATHS
  },
  entry: {
    index: `${PATHS.src}/index.js`,
    delivery: `${PATHS.src}/js/delivery.js`,
    company: `${PATHS.src}/js/company.js`,
    tender: `${PATHS.src}/js/tender.js`,
    testDrive: `${PATHS.src}/js/test-drive.js`,
    leasing: `${PATHS.src}/js/leasing.js`,
    catalog: `${PATHS.src}/js/catalog.js`,
    catalogSection: `${PATHS.src}/js/catalogSection.js`,
    cart: `${PATHS.src}/js/cart.js`,
    main: `${PATHS.src}/js/main.js`,
    guarantee: `${PATHS.src}/js/guarantee.js`,
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
  },
  module: {
    rules: [{
      test: /\.pug$/,
      oneOf: [
        // this applies to <template lang="pug"> in Vue components
        {
          resourceQuery: /^\?vue/,
          use: ['pug-plain-loader']
        },
        // this applies to pug imports inside JavaScript
        {
          use: ['pug-loader']
        }
      ]
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loader: {
          scss: 'vue-style-loader!css-loader!sass-loader'
        }
      }
    }, {
    test: /\.(png|jpe?g|gif|woff2?)$/i,
    loader: "file-loader",
    options: {
      outputPath: 'assets/img/',
      name: "[name].[ext]"
    }
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../../'
          }
        },
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: `./postcss.config.js` } }
        }, {
          loader: 'resolve-url-loader',
          options: {
            sourceMap: true,
          }
        }, {
          loader: 'sass-loader',
          options: { 
            sourceMap: true,
          }
        }
      ]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true,  }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: `./postcss.config.js` } }
        }
      ]
    }]
  },
  resolve: {
    alias: {
      '~': PATHS.src,
      'vue$': 'vue/dist/vue.js',
      jquery: path.resolve('node_modules/jquery/dist/jquery.js') // Для select
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].[hash].css`,
      publicPath: './'
    }),
    new CopyWebpackPlugin([
     /* { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },*/
      { from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
    ]),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `${page.replace(/\.pug/,'.html')}`,
      chunks: ['index', `${page.replace(/\.pug/,'')}`]
    }))
  ],
}
