<script lang="ts">
	import logo from "$lib/assets/slate-logo.svg"
	import Link from "$lib/components/Link.svelte"
</script>

<div class="p-12 flex flex-col gap-4 items-start">
	<img src={logo} alt="Slate logo" class="h-12" />

	<p class="font-bold text-xl">
		Welcome to Slate! This project is in its early beginnings, so there isn't much content yet.
	</p>

	<p>Planned curriculum:</p>

	<ul class="list-disc list-inside">
		<li><Link href="/differential-calculus/">Differential calculus</Link></li>
		<li>Integral calculus</li>
		<li>Multivariable calculus</li>
		<li>...That's it for now...</li>
	</ul>
</div>
