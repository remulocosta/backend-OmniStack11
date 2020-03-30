module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  'plugins': [
    'prettier',
    'eslint-plugin-import-helpers'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error',
    'no-param-reassign': 'off',
    'camelcase': 'off',
    'class-methods-use-this': 'off',
    'no-unused-vars': ['error', {'argsIgnorePattern': 'next'}],
    'func-names': ['error', 'never', { 'generators': 'as-needed' }],
    'no-console': 0,
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always', // new line between groups
        groups: [
          '/^react/',
          'module',
          '/^@shared/',
          '/^~/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  }
}
