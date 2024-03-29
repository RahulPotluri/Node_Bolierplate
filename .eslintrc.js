module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        'prettier/prettier': [
            1,
            {
              trailingComma: 'es5',
              semi: false,
            },
          ],
          ...require('eslint-config-prettier').rules,
          ...require('eslint-config-prettier/@typescript-eslint').rules,
    }
};
