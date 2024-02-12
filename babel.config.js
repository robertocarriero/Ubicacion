


module.exports = function(api) {
  api.cache(true);

  const presets = ['babel-preset-expo'];
  const plugins = [];

  // Agrega el fallback para 'crypto'
  const fallback = {
    "crypto": require.resolve("crypto-browserify")
  };

  return {
    presets: ['babel-preset-expo'],
    presets,
    plugins,
    // Agrega el fallback a la configuración de Babel
    overrides: [
      {
        test: ['./node_modules/react-native-safe-area-context'],
        plugins: [require.resolve('react-native-safe-area-context/macro')]
      }
    ],
    // Agrega el fallback a la configuración de Babel
    overrides: [
      {
        test: ['./node_modules/@react-native-picker/picker'],
        plugins: [require.resolve('@react-native-picker/picker/babel')]
      }
    ],
    // Agrega el fallback a la configuración de Babel
    overrides: [
      {
        test: ['./node_modules/react-native-reanimated'],
        plugins: [require.resolve('@babel/plugin-transform-react-jsx-source')]
      }
    ],
    // Agrega el fallback a la configuración de Babel
    overrides: [
      {
        test: ['./node_modules/react-native-gesture-handler'],
        plugins: [require.resolve('@babel/plugin-transform-react-jsx-source')]
      }
    ],
    // Agrega el fallback a la configuración de Babel
    overrides: [
      {
        test: ['./node_modules/react-native-keychain'],
        plugins: [require.resolve('@babel/plugin-transform-react-jsx-source')]
      }
    ]
  };
};

