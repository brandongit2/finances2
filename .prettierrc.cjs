module.exports = {
	plugins: [
		require("prettier-plugin-tailwindcss"),
		require("prettier-plugin-svelte"),
		require("prettier-plugin-prisma"),
	],
	pluginSearchDirs: [`.`],
	overrides: [{files: "*.svelte", options: {parser: "svelte"}}],
	printWidth: 120,
	tabWidth: 2,
	useTabs: true,
	semi: false,
	singleQuote: false,
	bracketSpacing: false,
	trailingComma: `all`,
}
