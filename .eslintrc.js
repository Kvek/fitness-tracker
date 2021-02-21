module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "simple-import-sort", "prettier"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "import/prefer-default-export": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^(react|redux)"],
          ["^(components)"],
          ["^@"],
          ["^(@company|@ui||utils|config|vendored-lib)(/.*|$)"],
          ["^.+\\.s?css$"],
        ],
      },
    ],
    "import/newline-after-import": "error",
    "simple-import-sort/exports": "error",
    "sort-imports": "off",
    "import/order": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": "error",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": 0,
    "no-unused-vars": 0,
  },
};
