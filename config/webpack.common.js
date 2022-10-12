const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
  assets: "assets/",
};

const PAGES_DIR = PATHS.src;
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter((filename) => filename.endsWith(".html"));

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    index: `${PATHS.src}/assets/js/index.ts`,
    menu: `${PATHS.src}/assets/js/menu.ts`,
    rules: `${PATHS.src}/assets/js/rules.ts`,
    game: `${PATHS.src}/assets/js/game.ts`,
    end: `${PATHS.src}/assets/js/end.ts`,
    table: `${PATHS.src}/assets/js/table.ts`,
  },
  output: {
    path: PATHS.dist,
    filename: `${PATHS.assets}js/[name].[contenthash].js`,
    clean: true,
    assetModuleFilename: "assets/[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "../dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: function () {
                  return [require("autoprefixer")];
                },
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    ...PAGES.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: `${PAGES_DIR}/${page}`,
          filename: `./${page}`,
          chunks: [`${page.replace(/\.html/, "")}`],
        })
    ),
  ],
};
