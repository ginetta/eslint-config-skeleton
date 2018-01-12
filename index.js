module.exports = {
	extends: ["airbnb", "plugin:react/recommended", "prettier/react", "prettier"],
	plugins: ["prettier", "react"],
	parser: "babel-eslint",
	parserOptions: {
		ecmaVersion: 2016,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		es6: true,
		browser: true,
		node: true
	},
	rules: {
		"prettier/prettier": [
			"error",
			{
				singleQuote: true,
				trailingComma: "all"
			}
		],
		"react/jsx-filename-extension": [
			1,
			{
				extensions: [".js", ".jsx"]
			}
		],
		"no-underscore-dangle": [
			"error",
			{
				allow: ["_id", "_modified", "_created", "_order", "_by"]
			}
		],
		"jsx-a11y/href-no-hash": false,
		"jsx-a11y/anchor-is-valid": [
			"warn",
			{
				aspects: ["invalidHref"]
			}
		],
		"no-multiple-empty-lines": [2, { max: 1 }],
		// Specify the maximum number of statement allowed in a function
		// (off by default)
		"max-statements": [1, 15],
		// Specify the maximum depth that blocks can be nested (off by default)
		"max-depth": [1, 2],
		// Specify the maximum cyclomatic complexity allowed in a program
		// (off by default)
		complexity: [1, 5],
		// Limits the number of parameters that can be used in the function
		// declaration. (off by default)
		"max-params": [1, 3],
		// Specify the maximum depth callbacks can be nested (off by default)
		"max-nested-callbacks": [1, 2]
	}
};
