module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './',
            common: './common',
            components: './components',
            config: './config',
            constant: './constant',
            context: './context',
            hook: './hook',
            layout: './layout',
            page: './page',
            style: './style',
            asset: './assets',
            navigation: './navigation',
            shared: './shared',
            routes: './routes',
            util: './util',
            mocks: './mocks',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
