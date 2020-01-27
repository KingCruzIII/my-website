var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
  return {
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
      overlay: true,
      watchOptions: {
        ignored: /node_modules/
      },
      contentBase: "public"
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
};
