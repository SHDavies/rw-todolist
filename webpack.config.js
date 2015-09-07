module.exports = {
  devtools: 'eval',
  entry: "./app/App.jsx",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {test: /\.jsx$/, loader: 'jsx-loader'}
    ]
  }
};
