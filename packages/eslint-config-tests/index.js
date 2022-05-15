module.exports = {
  overrides: [
    {
      files: ['tests/**/*.js', 'src/**/*.test.js'],
      extends: ["plugin:jest/all"],
      rules: {
        "jest/no-hooks": "off",
      },
    }
  ],
};
