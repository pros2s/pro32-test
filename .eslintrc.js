module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],

  plugins: ['react', 'react-hooks', 'prettier', 'jsx-a11y'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'no-else-return': 2,
    'no-lonely-if': 2,
    // typescript
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    // react
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // off
    'no-alert': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'object-curly-newline': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-undef': 'off',
  },
};
