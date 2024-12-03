module.exports = {
  extends: ["@metrics-verse/eslint-config"],
  parserOptions: { tsconfigRootDir: __dirname },
  ignorePatterns: ["node_modules", "dist"],
};
