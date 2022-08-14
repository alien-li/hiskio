module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  extends: [
    '@nuxtjs',
    'airbnb-base',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
  rules: {
    'max-len': 0,
    'vue/no-v-html': 'off',
    'no-param-reassign': ['error', { props: false }],
  },
  settings: {
    'import/core-modules': ['vue', 'vuex'],
    'import/resolver': {
      nuxt: {
        extensions: ['.js', '.vue'],
      },
    },
  },
};
