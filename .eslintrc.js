module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],

  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: ['error', 2],
    'linebreak-style': 0,
    'operator-linebreak': 0,
    camelcase: 'off',
  },

  // eslint-disable-next-line no-dupe-keys
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
};
