module.exports = {
	root: true,
	extends: [`eslint:recommended`, `prettier`, `plugin:import/recommended`],
	plugins: [`import`],
	env: {
		es2020: true,
		node: true,
	},
	parserOptions: {
		sourceType: `module`,
		ecmaVersion: 2020,
	},
	rules: {
		"import/no-duplicates": `error`,
		"import/no-named-as-default": `off`,
		"import/no-unresolved": `off`,
		"import/no-unused-modules": [`warn`, {unusedExports: true, ignoreExports: [`**/*.svelte`, `**/*.config.*`]}],
		"import/order": [
			`warn`,
			{
				groups: [
					[`builtin`, `external`],
					[`object`, `unknown`, `type`],
					[`internal`, `parent`, `index`, `sibling`],
				],
				pathGroups: [{pattern: `$*/**`, group: `internal`}],
				pathGroupsExcludedImportTypes: [`type`],
				"newlines-between": `always`,
				alphabetize: {order: `asc`, caseInsensitive: true},
				warnOnUnassignedImports: true,
			},
		],
		"prefer-const": `off`,
		"no-console": [`warn`, {allow: [`info`, `warn`, `error`]}],
		"no-constant-condition": [`error`, {checkLoops: false}],
		"no-control-regex": `off`,
		"no-empty": [`warn`, {allowEmptyCatch: true}],
		"no-mixed-spaces-and-tabs": [`warn`, `smart-tabs`],
		"no-unused-vars": [`warn`, {ignoreRestSiblings: true}],
		quotes: [`warn`, `backtick`],
	},
	overrides: [
		{
			files: [`**/*.ts`, `**/*.svelte`],
			parser: `@typescript-eslint/parser`,
			parserOptions: {
				project: `./tsconfig.json`,
			},
			plugins: [`@typescript-eslint`],
			extends: `plugin:@typescript-eslint/recommended`,
			settings: {
				"svelte3/typescript": () => require(`typescript`),
			},
			rules: {
				"@typescript-eslint/ban-ts-comment": `warn`,
				"@typescript-eslint/consistent-type-imports": `warn`,
				"@typescript-eslint/explicit-module-boundary-types": `off`,
				"@typescript-eslint/no-empty-function": `off`,
				"@typescript-eslint/no-explicit-any": `off`,
				"@typescript-eslint/no-extra-semi": `off`,
				"@typescript-eslint/no-non-null-assertion": `off`,
				"@typescript-eslint/no-unnecessary-condition": `warn`,
				"@typescript-eslint/no-unused-vars": [`warn`, {ignoreRestSiblings: true}],
				"@typescript-eslint/no-var-requires": `off`,
				"@typescript-eslint/quotes": [`warn`, `backtick`],
				"prefer-const": `off`,
				quotes: `off`,
			},
		},
		{
			files: [`**/*.svelte`],
			plugins: [`svelte3`],
			processor: `svelte3/svelte3`,
			env: {
				browser: true,
			},
		},
		{
			files: [`**/*.ts`],
			rules: {
				"@typescript-eslint/explicit-module-boundary-types": `warn`,
			},
		},
	],
}
