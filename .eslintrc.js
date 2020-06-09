module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true
  },
  plugins: ['prettier'],
  extends: [
    'eslint:recommended',
    require.resolve('@q/sofe-eslint/.eslintrc.js'),
    require.resolve('eslint-config-prettier')
  ],
  rules: {
    'prettier/prettier': 'error'
  }
}
