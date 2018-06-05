module.exports = {
  extends: ['airbnb', 'plugin:react/recommended', 'prettier/react', 'prettier'],
  plugins: ['prettier', 'react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'react/forbid-prop-types': 'warn',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/prefer-stateless-function': 0,
    'new-cap': 'off',
    'no-plusplus': 'off',
    // Often used when dealing with custom object creators for private variables
    'no-underscore-dangle': 'off',
    // Array destructuring is super unclear and not readable
    'prefer-destructuring': ['error', {
      'array': false,
      'object': true
    }],
    // We often create util files with only one function (that get populated afterwards)
    'import/prefer-default-export': 'off'
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    'no-multiple-empty-lines': [2, { max: 1 }],
    // Specify the maximum number of statement allowed in a function
    // (off by default)
    'max-statements': [1, 25],
    // Specify the maximum depth that blocks can be nested (off by default)
    'max-depth': [1, 3],
    // Specify the maximum cyclomatic complexity allowed in a program
    // (off by default)
    complexity: [1, 7],
    // Limits the number of parameters that can be used in the function
    // declaration. (off by default)
    'max-params': [1, 4],
    // Specify the maximum depth callbacks can be nested (off by default)
    'max-nested-callbacks': [1, 2],
  },
};
