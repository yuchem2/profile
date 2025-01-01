import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import eslintPluginPrettier from 'eslint-plugin-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ['src/**/*.{js,mjs,cjs,jsx}'],
    },
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        plugins: {
            prettier: eslintPluginPrettier,
        },
        rules: {
            'prettier/prettier': 'error',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'off',
        },
    },
    {
        ignores: [
            '**/build',
            '**/*.config.{js,mjs,cjs,jsx}',
            '**/node_modules',
            '**/*.test.{js,mjs,cjs,jsx}'
        ],
    },
]
