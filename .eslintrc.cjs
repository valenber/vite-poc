module.exports = {
  extends: ["@cabify/eslint-config/recommended", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.eslint.json"
  },
  plugins: ["@typescript-eslint"],
  root: true,
  settings: {
    "import/resolver": {
      typescript: {}
    }
  },
  rules: {}
};