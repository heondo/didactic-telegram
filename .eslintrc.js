module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
    },
    babelOptions: {
      configFile: './babel.config.js',
    },
  },
  rules: {
    semi: [0],
  },
}
