var webpack = require('webpack');

module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "./static",
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