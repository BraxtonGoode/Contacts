// .eslintrc.cjs

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:prettier/recommended', // 👈 Add this
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'linebreak-style': ['error', 'windows'],
    'no-console': 'off',
    'prettier/prettier': 'error', // 👈 Run prettier as an ESLint rule
  },
};
