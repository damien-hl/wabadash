const config = {
  devServer: {
      open: true,
      disableHostCheck: true,
  },
  pages: {
      index: {
          entry: 'src/main.js',
          template: 'public/index.html',
          filename: 'index.html',
      }
  }
}

module.exports = config