<script>
	import { page } from '$app/stores';
</script>

<div>
  {#if $page.error}
    <h1>{$page.status}: {$page.error.message}</h1>
  {:else}
    <h1>{$page.status}</h1>
  {/if}
</div>
