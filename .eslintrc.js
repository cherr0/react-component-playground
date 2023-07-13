module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  plugins: ['react', 'react-hooks', 'storybook', '@typescript-eslint/eslint-plugin'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest'
  },
  overrides: [{
    files: ['**/*.stories.*']
  }],
  rules: {
    'import/no-anonymous-default-export': 'off'
  },
  extends: ['plugin:storybook/recommended']
};