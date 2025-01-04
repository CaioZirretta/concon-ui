// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "cc",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "cc",
          style: "kebab-case",
        },
      ],
      "array-callback-return": ["warn", { "checkForEach": true }],
      "no-class-assign": "error",
      "no-cond-assign": "error",
      "no-const-assign": "error",
      "no-constant-condition": "error",
      "no-constructor-return": "error",
      "no-dupe-else-if": "error",
      "no-duplicate-case": "error",
      "no-duplicate-imports": "error",
      "no-ex-assign": "error",
      "no-fallthrough": "error",
      "no-import-assign": "error",
      "no-inner-declarations": "error",
      "no-self-assign": "error",
      "no-self-compare": "error",
      "no-sparse-arrays": "error",
      "no-template-curly-in-string": "warn",
      "no-this-before-super": "warn",
      "no-unreachable": "error",
      "no-unused-private-class-members": "error",
      "no-unused-vars": "error",
      "curly": "error",
      "eqeqeq": ["error", "always", { "null": "ignore" }],
      "max-classes-per-file": ["error", 1],
      "max-statements": "warn",
      "max-len": [
        "error",
        {
          "ignoreRegExpLiterals": false,
          "ignoreStrings": false,
          "ignorePattern": "^import |^export ",
          "ignoreComments": true,
          "code": 140
        }
      ],
      "no-alert": "error",
      "no-bitwise": "warn",
      "no-console": "warn",
      "no-empty-function": ["error", { "allow": ["arrowFunctions"] }],
      "no-extra-label": "error",
      "no-inline-comments": "error",
      "no-iterator": "error",
      "no-labels": "error",
      "no-lone-blocks": "error",
      "no-multi-assign": "error",
      "no-nested-ternary": "error",
      "no-new-wrappers": "error",
      "no-redeclare": "error",
      "no-return-assign": "error",
      "no-var": "error",
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "yoda": "error",
      "no-shadow": "warn",
      "operator-assignment": "warn",
      "@typescript-eslint/no-wrapper-object-types": "error",
      "@typescript-eslint/no-unused-expressions": ["warn", { allowShortCircuit: true }],
      "@typescript-eslint/consistent-type-definitions": ["warn", "type"]
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
