<script lang="ts">
	export let href: string
</script>

<a {href}><slot /></a>

<style>
	a {
		text-decoration: underline;
	}
</style>
