module.exports = {
	env: {
		browser: true,
		es2020: true,
		jest: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
	],
	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
	settings: { react: { version: "detect" } },
	plugins: ["react", "@typescript-eslint"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		semi: ["error", "always", { omitLastInOneLineBlock: false }],
		"comma-dangle": ["error", "always"],
		quotes: ["error", "single"],
		"react/prop-types": [0],
		indent: ["error", "tab"],
	},
	globals: {
		__IS_DEV__: true,
	},
};
