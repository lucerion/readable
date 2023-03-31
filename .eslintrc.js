module.exports = {
  'env': {
    'browser': false,
    'node': true,
    'es6': true,
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 9,
    'sourceType': 'module',
  },
  'rules': {
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'max-len': ['error', { 'code': 120 }],
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': ['error', { 'allow': ['warn', 'error'] }],
  },
};
