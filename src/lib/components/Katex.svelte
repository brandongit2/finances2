<script lang="ts">
	import katex from "katex"
	import "katex/dist/katex.min.css"

	export let source: string
</script>

{@html katex.renderToString(source)}

<style>
	:global(.katex) {
		font-size: 1.1em;
	}
</style>
