// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'space-before-function-paren': 0,
    'comma-dangle': ['error', 'only-multiline'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': 0, // import不需要写文件扩展名
    'import/no-unresolved': 0,
    // 'import/no-duplicates': 0,
    'no-underscore-dangle': 0, // 无下划线
    camelcase: 0, // 变量可以用下划线
    semi: ['error', 'never'], // 无分号
    'no-extra-semi': 0, // 和prettier冲突
    'no-plusplus': 0, // 禁止使用++，--
    // 'no-tabs': [o],
    'guard-for-in': 0,
    'max-len': ['error', { code: 300 }],
    'no-restricted-syntax': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['script/**/*.js'] }],
    'no-restricted-syntax': 0,
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'arrow-parens': ['error', 'as-needed'],
    // 'object-curly-newline': [
    //   'error',
    //   {
    //     ImportDeclaration: 'never',
    //   },
    // ],
    'comma-dangle': ['error', 'only-multiline'],
    'no-param-reassign': ['error', { props: false }],
    "linebreak-style": [0 ,"error", "windows"],
  }
}
