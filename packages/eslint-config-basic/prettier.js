const prettierPlugin = require('eslint-plugin-prettier')
const prettierConfig =  require('eslint-config-prettier')

const prettierConflictRules = { ...prettierConfig.rules }
delete prettierConflictRules['vue/html-self-closing']

/** @type {import('eslint-define-config').FlatESLintConfigItem[]} */

/**
 * @author @sxzz(https://github.com/sxzz)
 * @url  https://github.com/sxzz/eslint-config/blob/main/src/prettier.js
 */
module.exports = [
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierConflictRules,
      ...prettierPlugin.configs.recommended.rules,
      'prettier/prettier': 'warn',
    },
  },
]