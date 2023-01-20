const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = { publicPath: process.env.NODE_ENV === 'production' ? '/Antt.vue/' : '/' }
// module.exports = {
//   configureWebpack: {
//     devtool: 'source-map'
//   }
// }