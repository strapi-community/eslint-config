module.exports = {
  parser: "@babel/eslint-parser",
  extends: [
    'plugin:markdown/recommended',
    'plugin:jsonc/recommended-with-jsonc',
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
  ignorePatterns: [
    '*.min.*',
    '*.example.js',
    'CHANGELOG.md',
    'LICENSE*',
    '.cache',
    '.tmp',
    'build',
    'coverage',
    'public',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    '!.github',
    '!.vscode',
  ],
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
  overrides: [
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'quotes': ['error', 'double'],
        'quote-props': ['error', 'always'],
        'comma-dangle': ['error', 'never'],
      },
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'type',
              'version',
              'private',
              'packageManager',
              'description',
              'keywords',
              'license',
              'author',
              'repository',
              'funding',
              'main',
              'module',
              'types',
              'unpkg',
              'jsdelivr',
              'exports',
              'files',
              'bin',
              'sideEffects',
              'scripts',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'optionalDependencies',
              'devDependencies',
              'husky',
              'lint-staged',
              'eslintConfig',
            ],
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
        ],
      },
    },
    {
      files: ['*.js'],
      rules: {
        strict: ["error", "global"],
      },
    },
    {
      files: ['src/admin/**/*.js', '**/admin/src/**/*.js'],
      parserOptions: {
        sourceType: "module",
      },
    },
  ],
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
