module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // extension .js ve ya mjs ile bitirse babel terefinden test edilmesini isteyirik
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // preset-react: babel will process all the jsx tags that is added to our file (related-code)
            // preset-env: convert all the ES versions to the ES5
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
