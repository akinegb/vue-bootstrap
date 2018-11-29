const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  chainWebpack: config => {
    // SCSS Loader
    config.module.rule('scss')
      .test(/\.scss$/)
      .use('sass-loader')
        .loader('vue-style-loader')
        .end()
  },
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        defaultSizes: 'gzip'
      }),
      new CompressionPlugin({
        cache: true,
        algorithm: 'gzip'
      })
    ]
  }
}
