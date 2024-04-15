module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "eslint-config-love",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./cotrol-viajes/tsconfig.json",
  },
  plugins: ["react", "react-refresh", "@typescript-eslint"],

  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  },
};
