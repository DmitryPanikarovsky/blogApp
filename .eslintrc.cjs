module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		"plugin:react/recommended",
		"airbnb",
		"plugin:i18next/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint", "i18next"],
	rules: {
		indent: [0],
		"react/jsx-indent": [0, 4],
		"react/jsx-indent-props": [2, 4],
		"react/jsx-filename-extension": [
			2,
			{ extensions: [".js", ".jsx", ".tsx"] },
		],
		"import/no-unresolved": "off",
		"import/prefer-default-export": "off",
		"no-unused-vars": "off",
		"react/jsx-closing-bracket-location": "off",
		"react/prop-types": "off",
		"react/destructuring-assignment": "off",
		"react/require-default-props": "off",
		"react/react-in-jsx-scope": "off",
		"react/jsx-props-no-spreading": "off",
		"react/function-component-definition": "off",
		"no-undef": "off",
		"no-trailing-spaces": "off",
		"func-names": "off",
		"no-shadow": "off",
		"no-tabs": "off",
		"no-console": "off",
		"no-useless-escape": "off",
		"react/button-has-type": "off",
		"import/extensions": "off",
		"import/no-extraneous-dependencies": "off",
		"no-underscore-dangle": "off",
		quotes: "off",
		// "comma-dangle": "off",
		"eol-last": "off",
		"prefer-destructuring": [
			"error",
			{
				array: true,
				object: true,
			},
		],
		"i18next/no-literal-string": [
			"error",
			{
				markupOnly: true,
				ignoreAttribute: ["data-testid", "to"],
			},
		],
		"max-len": ["error", { ignoreComments: true, code: 110 }],
	},
	globals: {
		__IS_DEV__: true,
	},
	overrides: [
		{
			files: ["**/src/**/*.test.{ts,tsx}"],
			rules: {
				"i18next/no-literal-string": "off",
			},
		},
	],
};
