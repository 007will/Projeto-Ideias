import js from '@eslint/js';
import cypressPlugin from 'eslint-plugin-cypress';

export default [
  js.configs.recommended,
  cypressPlugin.configs.recommended,
  {
    files: ['cypress/**/*.js'],
    rules: {
      'cypress/no-unnecessary-waiting': 'off',
    },
  },
  {
    ignores: ['node_modules/**', 'cypress/videos/**', 'cypress/screenshots/**'],
  },
];