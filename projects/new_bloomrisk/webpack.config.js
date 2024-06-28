const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "new_bloomrisk",

  exposes: {
    "./routes": "./projects/new_bloomrisk/src/app/new.routes.ts",
    "./Component": "./projects/new_bloomrisk/src/app/new.component.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
