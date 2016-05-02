var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: path.join(__dirname, "/src/index.jsx"),
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist/")
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
  },

  module: {
    loaders: [

      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      // { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?modules'],
      },
      // 画像ファイルを読み込んだ場合にurl-loaderを使用する。ファイルサイズが8kb以下であればdata-uriに変換する
      {
        test: /\.(jpg|png)$/,
        loader: "url?mimetype=image/png",
      },
      // {
      //   test: /\.(jpg|png)$/,
      //   loader: 'file?mimetype=image/png',
      // },
    ],
    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //     "react": "React",
  //     "react-dom": "ReactDOM"
  // },
};

// https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/quick-start/react-webpack.md
