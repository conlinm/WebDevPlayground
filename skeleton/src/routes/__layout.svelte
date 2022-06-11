<script>
    import Header from '$lib/header.svelte';
</script>

<Header />
<main>
    <slot />
</main>
<footer>
    <p>&copy; 2020 Mike's Levelup SvelteKit Demo</p>
</footer>

<!-- Svelte CSS is scoped by default -->
<style>
	:global(body){
    background: #c5e2fc;
}
</style>