const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "collab",
    projectName: "collab-user-auth-frontend",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    devServer: {
      port: 9002
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [
                    require("tailwindcss"),
                    require("autoprefixer"),
                  ],
                },
              },
            },
          ],
        },
      ],
    }
  });
};
