module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended"
  ],
  plugins: ["@typescript-eslint"],
  settings: {
    react: { version: "detect" }
  },
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
    "import/extensions": "off",
    "import/no-unresolved": "off"
  }
};
