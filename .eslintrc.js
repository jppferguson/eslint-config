// I always forget these, so make them more readable!
const OFF = "off";   // "off" or 0
const WARN = "warn";   // "warn" or 1
const ERROR = "error"; // "error" or 2

module.exports = {
  "extends": [
    "airbnb",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  "plugins": [
    "html",
    "prettier",
    "react-hooks",
    "import",
    "module-resolver",
    "simple-import-sort",
    "@typescript-eslint",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2020,
    // Can I remove these now?
    "ecmaFeatures": {
      "impliedStrict": true,
      "classes": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "jquery": true,
    "jest": true
  },
  "rules": {
    // Let TS handle these
    "no-unused-vars": OFF,
    "no-useless-constructor": OFF,
    "@typescript-eslint/no-useless-constructor": ERROR,

    // These are pretty strict TS rules, you might want to turn 'em off
    "@typescript-eslint/no-explicit-any": WARN,
    "@typescript-eslint/explicit-function-return-type": WARN,

    // Again, pretty strict so off for now
    "@typescript-eslint/no-object-literal-type-assertion": OFF,
    "@typescript-eslint/no-var-requires": OFF,
    "@typescript-eslint/explicit-member-accessibility": OFF,
    "@typescript-eslint/no-empty-function": OFF,

    "no-debugger": OFF,
    "no-alert": OFF,
    "no-await-in-loop": OFF,
    "no-return-assign": [
      ERROR,
      "except-parens"
    ],
    "no-restricted-syntax": [
      ERROR,
      "ForInStatement",
      "LabeledStatement",
      "WithStatement"
    ],
    "no-unused-vars": [
      WARN,
      {
        "ignoreSiblings": true,
        "argsIgnorePattern": "res|next|^err"
      }
    ],
    "prefer-const": [
      ERROR,
      {
        "destructuring": "all",
      }
    ],
    "arrow-body-style": [
      ERROR,
      "as-needed"
    ],
    "no-unused-expressions": [
      ERROR,
      {
        "allowShortCircuit": true,
        "allowTaggedTemplates": true,
        "allowTernary": true,
      }
    ],
    "no-param-reassign": [
      ERROR,
      {
        "props": false
      }
    ],
    "no-warning-comments": ["warn", {
      "terms": ["fix", "look", "todo"],
      "location": "anywhere"
    }],
    "no-console": OFF,
    "import/prefer-default-export": OFF,
    "import": OFF,
    "func-names": OFF,
    "space-before-function-paren": OFF,
    "comma-dangle": OFF,
    "max-len": OFF,
    "import/extensions": OFF,
    "no-underscore-dangle": OFF,
    "consistent-return": OFF,
    "react/display-name": WARN,
    "react/no-array-index-key": OFF,
    "react/react-in-jsx-scope": OFF,
    "react/prefer-stateless-function": OFF,
    "react/forbid-prop-types": OFF,
    "react/no-unescaped-entities": OFF,
    "jsx-a11y/accessible-emoji": OFF,
    "react/require-default-props": OFF,
    "react/sort-prop-types": WARN,
    "react/jsx-sort-default-props": WARN,
    "react/jsx-sort-props": WARN,
    "react/jsx-props-no-spreading": OFF,
    "react/jsx-filename-extension": [
      WARN,
      {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ]
      }
    ],
    "radix": OFF,
    "no-shadow": [
      ERROR,
      {
        "hoist": "all",
        "allow": [
          "resolve",
          "reject",
          "done",
          "next",
          "err",
          "error"
        ]
      }
    ],
    "quotes": [
      ERROR,
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "prettier/prettier": [
      ERROR,
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 80,
      }
    ],
    "jsx-a11y/href-no-hash": OFF,
    "jsx-a11y/anchor-is-valid": [
      WARN,
      {
        "aspects": [
          "invalidHref",
          "preferButton",
        ],
        "components": [
          "Link",
        ],
        "specialLink": [
          "hrefLeft",
          "hrefRight",
        ],
      }
    ],
    "react-hooks/rules-of-hooks": ERROR,
    "react-hooks/exhaustive-deps": WARN,
    "module-resolver/use-alias": ERROR,
    "simple-import-sort/sort": WARN
  },
  "settings": {
  }
}