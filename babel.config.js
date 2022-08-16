module.exports = function (api) {
  api.cache(true)

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.ios.js', '.android.js', '.js', '.json'],
          alias: {
            '~': './',
            '@utils': './utils',
            '@style': './styles',
            '@comps': './components',
            '@store': './store',
            '@theme': './themes',
            '@route': './routes',
            '@screen': './screens',
            '@markdown': './markdown',
            '@mock': './mock',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
