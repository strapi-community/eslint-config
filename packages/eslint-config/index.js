module.exports = {
  parser: "@babel/eslint-parser",
  extends: [
    "eslint:recommended",
    "airbnb",
    "plugin:node/recommended",
    "prettier",
  ],
  env: {
    commonjs: true,
    es6: true,
    node: true,
    browser: false,
  },
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: false,
    },
    sourceType: "module",
  },
  globals: {
    strapi: true,
  },
  rules: {
    // airbnb overrides
    "import/no-unresolved": "off",
    "node/no-missing-require": "off",
    "no-continue": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector: "LabeledStatement",
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],

    // strapi backend rules
    "no-return-await": "error",
    "object-shorthand": [
      "error",
      "always",
      { avoidExplicitReturnArrows: true },
    ],
    "import/order": "error",
    "import/no-cycle": "error",
    "import/no-useless-path-segments": "error",
    "import/first": "error",
    "import/extensions": ["error", "never"],
    "import/newline-after-import": "error",
    "node/exports-style": ["error", "module.exports"],
    "node/no-new-require": "error",
    "node/no-path-concat": "error",
    "node/no-callback-literal": "error",
    "node/handle-callback-err": "error",
    "one-var": ["error", "never"],
  },
};
