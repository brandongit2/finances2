<script lang="ts">
	let name = ``

	const handleChange = (e: Event & {currentTarget: EventTarget & HTMLFormElement}) => {
		console.log(e.currentTarget.dataset)
	}

	const handleSubmit = (e: SubmitEvent & {currentTarget: EventTarget & HTMLFormElement}) => {
		e.preventDefault()
		// console.log(e.currentTarget.da)
	}
</script>

<div>
	<form on:submit={(e) => void handleSubmit(e)} on:change={(e) => {}}>
		<input bind:value={name} />
		<p>{name}</p>
		<button type="submit">Submit</button>
	</form>
</div>
