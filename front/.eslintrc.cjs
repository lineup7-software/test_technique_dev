/* eslint-env node */
// MARTIN NE SUPPRIME PAS !!!!!!!!!!!!!!!!!!!!!!
// MARTIN NE SUPPRIME PAS !!!!!!!!!!!!!!!!!!!!!!
// MARTIN NE SUPPRIME PAS !!!!!!!!!!!!!!!!!!!!!!
// MARTIN NE SUPPRIME PAS !!!!!!!!!!!!!!!!!!!!!!
// MARTIN NE SUPPRIME PAS !!!!!!!!!!!!!!!!!!!!!!
// MARTIN NE SUPPRIME PAS !!!!!!!!!!!!!!!!!!!!!!
// MARTIN NE SUPPRIME PAS !!!!!!!!!!!!!!!!!!!!!!
// MARTIN NE SUPPRIME PAS !!!!!!!!!!!!!!!!!!!!!!
// MARTIN NE SUPPRIME PAS !!!!!!!!!!!!!!!!!!!!!!
// MARTIN NE SUPPRIME PAS !!!!!!!!!!!!!!!!!!!!!!
// MARTIN NE SUPPRIME PAS !!!!!!!!!!!!!!!!!!!!!!
// MARTIN NE SUPPRIME PAS !!!!!!!!!!!!!!!!!!!!!!

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'max-len': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-use-before-define': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'no-shadow': 'off',
    'no-prototype-builtins': 'off',
  },
};
