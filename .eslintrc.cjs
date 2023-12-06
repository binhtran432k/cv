module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsdoc/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "code-templates"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "jsdoc"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "jsdoc/require-param-description": 0,
    "jsdoc/require-returns-description": 0,
    "jsdoc/require-property-description": 0,
  },
  globals: {
    React: true,
    JSX: true,
  },
};
