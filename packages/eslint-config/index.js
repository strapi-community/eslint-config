module.exports = {
  parser: "@babel/eslint-parser",
  extends: [
    "eslint:recommended",
    "airbnb-base",
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
  },
  globals: {
    strapi: true,
  },
  rules: {
    // airbnb overrides
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "node/no-missing-require": "off",
    "node/no-extraneous-require": "off",
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
    strict: ["error", "global"],
    "no-param-reassign": ["error", { props: false }],
    "global-require": "off",
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
