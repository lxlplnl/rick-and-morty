module.exports = {
  "root": true,
  "extends": [
    "react-app",
    "airbnb-base",
    "prettier",
  ],
  "plugins": [
    "prettier",
    "import",
    "jsx-a11y",
    "react",
    "react-hooks"
  ],
  "rules": {
    "max-len": [
      "error",
      {
        "code": 100,
        "ignoreUrls": true
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "all"
      }
    ],
    "no-shadow": "off",
    "import/prefer-default-export": "off",
    "import/no-named-as-default": "off",
  },
  "globals": {
    "process": true,
    "document": true,
    "window": true
  }
};
