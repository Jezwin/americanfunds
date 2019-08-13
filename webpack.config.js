const path = require("path");
const homepageJS = path.resolve(__dirname, "src/pages/homepage");
//const jumbotronheroJS = path.resolve(__dirname, "src/pages/jumbotronheropage");


module.exports = {
  entry: {
    homepage: homepageJS
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  }
};
