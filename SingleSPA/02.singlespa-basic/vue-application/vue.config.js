const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // headers: {
    //     "Access-Control-Allow-Origin": "*",
    // },
    port: 3032,
  },
  configureWebpack: {
    output: {
      libraryTarget: 'system',
    },
  },
  
})
