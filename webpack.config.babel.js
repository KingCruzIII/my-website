import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: "./src/index.js",
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [path.join(__dirname, "src"), "node_modules"]
  },
  output: {
    path: path.join(__dirname + "/dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  devServer: {
    hot: true,
    // contentBase: path.join(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/"
          }
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/"
            }
          }
        ]
      }
    ]
  }
};
