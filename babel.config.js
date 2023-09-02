module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.tsx', '.jsx'],
        alias: [
          {'@components': './src/components'},
          {'@reducers': './src/store/reducers'},
          {'@sagas': './src/store/sagas'},
          {'@pages': './src/pages'},
          {'@hooks': './src/hooks'},
          {'@utils': './src/utils'},
          {'@navigation': './src/navigation'},
          {'@themes': './src/themes'},
          {'@infra': './src/infra'},
        ],
      },
    ],
    [
      'module:react-native-dotenv',
      {
        allowlist: ['BASE_API', 'IP_DEBUG'],
        safe: true,
      },
    ],
  ],
};
