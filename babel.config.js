module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.tsx', '.jsx'],
        alias: [
          { '@components': './src/components' },
          { '@common': './src/components/common' },
          { '@partial': './src/components/partial' },
          { '@reducers': './src/store/reducers' },
          { '@sagas': './src/store/sagas' },
          { '@pages': './src/pages' },
          { '@hooks': './src/hooks' },
          { '@utils': './src/utils' },
          { '@navigation': './src/navigation' },
          { '@themes': './src/themes' },
          { '@infra': './src/infra' },
          { '@assets': './assets' },
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
    'react-native-reanimated/plugin',
  ],
};
