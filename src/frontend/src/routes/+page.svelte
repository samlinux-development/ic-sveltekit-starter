<script lang="ts">
	 	import { ic } from '../stores/ic';
		import '../app.css';
		import Navi from '../components/navi.svelte';

	let input = '', greeting = '', loading = false;

	const handleOnSubmit = async () => {
		loading = true;
		greeting = 'loading ...';
		try {
			// Call the IC
			greeting = await $ic.actor.sayHelloTo(input);
			loading = false;

		} catch (err: unknown) {
			console.error(err);
		}
	};
</script>

<main>
	<Navi />

	<img src="icAcademy.png" alt="IcAcademy logo" />
	<h1>My Demo App</h1>

	<div id="info">
		<div>
			This example demonstrates how to interact with a canister using <span class="highlight">import.meta.env.VITE_*</span> variables.
		</div>
		<br/>
		<div>
			Greet someone with <span class="highlight">an unauthenticated call</span> to the IC.
		</div>

		<form on:submit|preventDefault={handleOnSubmit}>
			<input id="name" alt="Name" type="text" bind:value={input} placeholder="Say hello to"/>
			<button type="submit" disabled={loading} >Click Me!</button>
		</form>

		<div id="greeting"> {greeting} </div>
	</div>
</main>

<style>
	form input {
		width: 50%;
		padding: 0.5rem;
		margin: 0.5rem 0;
		border: 1px solid #ccc;
		border-radius: 5px;
	}
	#greeting {
		width: 100%;
		min-height: 20px;
		border: 1px solid #222;
		padding: 0.5rem;
		margin: 0.5rem 0;
	}
	#info {
		max-width: 100%;
		margin: 10px auto;
		padding: 20px;
	}
</style>
