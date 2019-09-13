module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      development: {
        plugins: [
          ['module-resolver', {
            root: ['./src'],
            alias: {
              '~components': './src/components',
              '~constants': './src/constants',
              '~modules': './src/modules',
              '~native-base-theme': './native-base-theme',
              '~assets': './assets'
            },
          }],
        ],
      },
    },
  };
};
