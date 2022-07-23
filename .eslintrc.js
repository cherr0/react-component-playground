module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ['prettier'],
  plugins: [
    'react',
    'react-hooks',
    'prettier',
    'storybook',
    '@typescript-eslint/eslint-plugin'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest'
  },
  overrides: [
    {
      files: ['**/*.stories.*']
    }
  ],
  rules: {
    'import/no-anonymous-default-export': 'off',
    'prettier/prettier': [
      'warn',
      {
        semi: false,
        tabWidth: 2,
        jsxSingleQuote: true,
        singleQuote: true,
        arrowParens: 'always',
        trailingComma: 'none'
      }
    ]
  }
}
