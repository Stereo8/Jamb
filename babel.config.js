module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "expo-router/babel",
      "@babel/plugin-proposal-class-properties",
      "react-native-reanimated/plugin",
    ],
    assumptions: {
      setPublicClassFields: false,
      privateFieldsAsSymbols: true,
    },
  };
};
