module.exports = {
  extends: [
    './base.js',
    'airbnb/hooks',
  ],
  parser: '@babel/eslint-parser',
  rules: {
    'react-hooks/exhaustive-deps': 1,
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 1,
    'jsx-a11y/click-events-have-key-events': 1,
    'jsx-a11y/no-static-element-interactions': 1,
  },
  env: {
    browser: true,
  },
};
