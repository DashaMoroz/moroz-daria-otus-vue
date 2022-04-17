const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // базовый путь
  publicPath: './',
  // каталог вывода файлов
  outputDir: 'dist',
  // каталог для хранения сгенерированных статических ресурсов
  assetsDir: '',
  // путь к сгенерированному index.html
  indexPath: 'index.html',
  css: {
    // использование sourcemaps для CSS
    sourceMap: false,
  },
})
