module.exports = {
  root: true,

  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint', 'prettier'],

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],

  rules: {
    semi: 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'prettier/prettier': ['error', { endOfLine: 'auto' }]
  }
};