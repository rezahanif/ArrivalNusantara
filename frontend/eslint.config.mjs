import eslintPluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      '.nuxt/**',
      '.output/**',
      'build/**',
    ],
  },
  {
    files: ['**/*.vue', '**/*.ts', '**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  ...eslintPluginVue.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-unused-vars': [
        'error',
        {
          ignorePattern: '^_',
        },
      ],
    },
  },
]
