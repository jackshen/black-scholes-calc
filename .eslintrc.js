module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: ["plugin:prettier/recommended", "plugin:react/recommended", "prettier/react"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["react", "sort-destructure-keys"],
  root: true,
  rules: {
    "dot-notation": "error",
    eqeqeq: "error",
    indent: "off",
    "linebreak-style": ["error", "unix"],
    "no-param-reassign": "error",
    "no-undef": "error",
    "no-unused-vars": "warn",
    "no-useless-rename": "error",
    "no-var": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-exponentiation-operator": "error",
    "prettier/prettier": [
      "error",
      {
        printWidth: 120,
      },
    ],
    quotes: ["error", "double", { allowTemplateLiterals: true, avoidEscape: true }],
    "react/display-name": "off",
    "react/jsx-sort-props": [
      2,
      {
        ignoreCase: true,
      },
    ],
    "react/no-unescaped-entities": "off",
    "react/prop-types": [0],
    semi: ["error", "always"],
    "sort-destructure-keys/sort-destructure-keys": [2, { caseSensitive: false }],
    "sort-keys": ["error", "asc", { caseSensitive: false, minKeys: 2, natural: true }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
