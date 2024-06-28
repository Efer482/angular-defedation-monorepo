const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "old_bloomrisk",

  exposes: {
    "./routes": "./projects/old_bloomrisk/src/app/old.routes.ts",
    "./Component": "./projects/old_bloomrisk/src/app/old.component.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
