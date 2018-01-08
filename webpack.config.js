module.exports = {
  entry: './app/assets/scripts/app.js',
  output: {
    path: __dirname + '/app/temp/scripts',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};
