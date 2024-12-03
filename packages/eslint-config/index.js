module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    "plugin:jsx-a11y/recommended",
    "standard",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "prettier", "jsx-a11y"],
  ignorePatterns: ["vite-env.d.ts", "node_modules/", "dist/"],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "prettier/prettier": "error",
  },
};
