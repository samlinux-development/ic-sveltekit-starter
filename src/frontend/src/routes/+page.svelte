<script lang="ts">
	 import { ic } from '../stores/ic';

	let input = '', greeting = '';

	const handleOnSubmit = async () => {

		try {
			// Call the IC
			greeting = await $ic.actor.sayHelloTo(input);

		} catch (err: unknown) {
			console.error(err);
		}
	};
</script>

<main>
	<img src="logo2.svg" alt="DFINITY logo" />
	
	<div id="info">
		This example demonstrates how to interact with a canister using <span class="highlight">import.meta.env.VITE_*</span> variables.
	</div>

	<form on:submit|preventDefault={handleOnSubmit}>
		<label for="name">Say hello to </label>
		<input id="name" alt="Name" type="text" bind:value={input}/>
		<button type="submit">Click Me!</button>
	</form>
	<div id="greeting">
		{greeting}
	</div>


</main>

<style>
	main {
		font-family: sans-serif;
	}
	img {
		max-width: 50vw;
		max-height: 25vw;
		display: block;
		margin: auto;
	}

	form {
		display: flex;
		justify-content: center;
		gap: 0.5em;
		flex-flow: row wrap;
		max-width: 40vw;
		margin: auto;
		align-items: baseline;
		font-size: 1.5rem;
	}

	button[type='submit'] {
		padding: 5px 20px;
		margin: 10px auto;
		float: right;
	}

	#greeting {
		width: 40vw;
		min-height: 30px;
		margin: 10px auto;
		padding: 10px 60px;
		border: 1px solid #222;
	}
	#info {
		width: 40vw;

		margin: 10px auto;
		padding: 10px 60px;
	}

.highlight {
	background-color: rgb(245, 237, 86);
	border-radius: 5px;
	padding: 0 5px;
}
</style>
