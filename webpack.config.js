var path = require("path");

if (typeof window === "undefined") {
  global.window = {};
}

module.exports = {
  mode: "production",
  entry: "./src/VisuallyHidden.jsx",
  output: {
    path: path.resolve("lib"),
    filename: "VisuallyHidden.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
