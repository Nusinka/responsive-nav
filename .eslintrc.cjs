module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest', sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', {
      'singleQuote': false,
      'jsxSingleQuote': false,
      'trailingComma': 'all',
      'printWidth': 140,
      'jsxBracketSameLine': false,
      'tabWidth': 2,
      'useTabs': false,
      'bracketSpacing': true,
      'arrowParens': 'always'
    }],
    'no-unused-vars': 'error',
    'react/jsx-curly-brace-presence': ['warn', {
      'props': 'never',
      'children': 'never'
    }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off'
  },  plugins: ['@typescript-eslint', 'react', 'prettier'],
  env: {
    browser: true, node: true, es6: true,
  },

};
