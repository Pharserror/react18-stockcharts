const webpack = require("webpack");
const path = require("path");

const { getIfUtils, removeEmpty } = require("webpack-config-utils");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

const rootPath = path.join(__dirname, "..");

function buildConfig(mode) {
  const { ifWatch, ifDocs } = getIfUtils(mode, ["docs", "watch"]);

  const docsEntry = {
    "react-stockcharts-home": "./docs/index",
    "react-stockcharts-documentation": "./docs/documentation",
  };

  const devServer = {
    contentBase: [
      path.join(rootPath, "docs"),
      path.join(rootPath, "build"),
      path.join(rootPath, "node_modules"),
    ],
    host: process.env.IP, // "10.0.0.106", "localhost"
    port: parseInt(process.env.PORT),
  };

  const context = rootPath;
  const loadersForDocs = [
    { test: /\.jpg$/, use: "file-loader" },
    { test: /\.(png|svg)$/, use: "url-loader?mimetype=image/png" },
    { test: /\.md$/, use: ["html-loader", "remarkable-loader"] },
    { test: /\.scss$/, use: ["style-loader", "css-loader", "autoprefixer-loader", "sass-loader"] }
  ];

  console.log("MODE", mode);
  return {
    context,
    // entry: docsEntry,
    entry: {
      'react-stockcharts': [
        './src/index.js',
      ],
    },
    optimization: {
      minimize: process.env.NODE_ENV === 'production',
    },
    output: {
      path: path.join(rootPath, "build/dist"),
      publicPath: "/",
      library: "ReStock",
      libraryTarget: "umd",
    },
    // devtool: "source-map",
        mode: 'none',
    module: {
      rules: removeEmpty([
        // { test: /\.json$/, use: "json" },
        { test: /\.jsx$/, use: "babel-loader", exclude: /node_modules/ },
        ...loadersForDocs,
      ])
    },
    performance: {
      hints: false,
    },
    plugins: removeEmpty([
      new ProgressBarPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),

      ifDocs(new webpack.DefinePlugin({
        "process.env": {
          // This has effect on the react lib size
          NODE_ENV: JSON.stringify("production"),
        },
      })),
      // ifProd(new webpack.optimize.DedupePlugin()),
      // new HtmlWebpackPlugin({
      //   template: "./docs/pageTemplate.js",
      //   inject: false,
      //   page: "index",
      //   mode,
      //   filename: "index.html"
      // }),
      // new HtmlWebpackPlugin({
      //   template: "./docs/pageTemplate.js",
      //   inject: false,
      //   page: "documentation",
      //   mode,
      //   filename: "documentation.html"
      // }),
      new webpack.LoaderOptionsPlugin({
        options: { remarkable: getRemarkable(), context }
      }),
    ]),
    devServer,
    externals: {
      "react": "React",
      "react-dom": "ReactDOM",
      // "d3": "d3",
    },
    resolve: {
      extensions: [".js", ".jsx", ".scss", ".md"],
      alias: {
        "react-stockcharts": path.join(rootPath, "src"),
      },
      modules: ["docs", "node_modules"]
    }
  };
}

function getRemarkable() {

  const Prism = require("prismjs");

  require("prismjs/components/prism-jsx");
  require("prismjs/plugins/line-numbers/prism-line-numbers");

  return {
    preset: "full",
    html: true,
    linkify: true,
    typographer: true,
    highlight: function(str, lang) {
      const grammer = lang === undefined || Prism.languages[lang] === undefined ? Prism.languages.markup : Prism.languages[lang];
      return Prism.highlight(str, grammer, lang);
    }
  };
}

module.exports = buildConfig;
