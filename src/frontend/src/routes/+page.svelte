<script lang="ts">
	import { createActor } from '../../../declarations/backend';

	let input = '', greeting = '';

	const handleOnSubmit = async () => {

		try {
			// Canister IDs are automatically expanded to .env config - see vite.config.ts
			const canisterId = import.meta.env.VITE_BACKEND_CANISTER_ID;

			// We pass the host instead of using a proxy to support NodeJS >= v17 (ViteJS issue: https://github.com/vitejs/vite/issues/4794)
			const host = import.meta.env.VITE_HOST;

			// Create an actor to interact with the IC for a particular canister ID
			const actor = createActor(canisterId, { agentOptions: { host } });

			// Call the IC
			greeting = await actor.sayHelloTo(input);
		} catch (err: unknown) {
			console.error(err);
		}
	};
</script>

<main>
	<img src="logo2.svg" alt="DFINITY logo" />
	<br />

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
		font-family: sans-serif;
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
</style>
