module.exports = {
  parser: 'babel-eslint',
  env: {
    // browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  settings: {
    'import/resolver': {
      'node': {
        'paths': ['src']
      }
    },
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'flowtype',
  ],
  'env': {
    'browser': true,
    'node': true,
    'jest': true,
  },
  rules: {
    'arrow-parens': ['off'],
    'semi': ['error', 'always'],
    'import/prefer-default-export': ['off'],
    'react/jsx-curly-brace-presence': ['off'],
    'react/jsx-filename-extension': ['off'],
    'no-underscore-dangle': ['off'],
    'no-confusing-arrow': ['off'],
    'no-param-reassign': ['off'],
    'no-shadow': ['off'],
    'flowtype/no-types-missing-file-annotation': ['off'],
    'import/no-extraneous-dependencies': ['error', {'devDependencies': ['**/setupTests.js', '**/*.test.js', '**/*.spec.js']}]
  },
};
