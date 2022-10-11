module.exports = {
  extends: ["@cabify/eslint-config/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.eslint.json",
  },
  plugins: ["@typescript-eslint"],
  root: true,
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "@typescript-eslint/no-floating-promises": ["warn", { ignoreIIFE: true }],
  },
};
