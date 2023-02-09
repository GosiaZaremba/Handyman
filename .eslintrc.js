module.exports = {
  root: true,
  extends: [
    'plugin:@typescript-eslint/recommended',
    '@react-native-community',
    'plugin:react-native/all',
    'plugin:react/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-native', 'jest'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'error',
        'no-undef': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/ban-types': 'off',
        'react-native/sort-styles': 'off',
      },
    },
  ],
  ignorePatterns: [
    'vendor/',
    'coverage/',
    'ios/',
    'android/',
    'setupTest.js',
    'node_modules/',
    '.bundle/',
  ],
};
