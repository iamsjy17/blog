const path = require('path');

module.exports = {
  extends: 'airbnb-base',
  settings: {
    'import/resolver': {
      node: {
        paths: ['src']
      }
    }
  },
  rules: {
    'no-unused-vars': 1,
    'comma-dangle': 0,
    'no-console': 0,
    'eol-last': 0,
    'import/prefer-default-export': 0,
    'no-empty': 0
  }
};
