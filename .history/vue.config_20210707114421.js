var webpack = require('webpack');

module.exports = {
  // publicPath: process.env.NODE_ENV === 'development' ? '/':'./',
  publicPath: '/',
  outputDir: "dist",
  assetsDir: "./static",
  assetsPublicPath: './',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  },
  configureWebpack: {
    plugins: 
      [new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })]
   
  },
  pwa: {
    iconPaths: {
      favicon32: 'favicon.png',
      favicon16: 'favicon.png',
      appleTouchIcon: 'favicon.png',
      maskIcon: 'favicon.png',
      msTileImage: 'favicon.png'
    }
  }
}