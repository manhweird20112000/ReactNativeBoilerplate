module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'no-var': 'error',
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'object-curly-spacing': ['error', 'always'],
  },
};
