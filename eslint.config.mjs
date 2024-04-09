import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';

import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

export default [
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    files: ['src/**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react: any,
      'react-native': any,
      typescriptEslint: typescriptEslint,
    },
    rules: {
      // ... any rules you want
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      semi: ['error', 'never'],
      'ts/indent': 'error',
      'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
      'no-use-before-define': 'off',
      'react/props-type': 'off',
      quotes: 'off',
    },
    ignores: ['**/*.config.js', '**/node_modules/', '.git/'],
    extends: ['plugin:react/recommended', 'plugin:prettier/recommended', 'prettier'],
    // ... others are omitted for brevity
  },
  ...compat.extends('standard-with-typescript'),
  ...tseslint.configs.recommended,
  pluginReactConfig,
  eslintConfigPrettier,
];
