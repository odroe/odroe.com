<script>
  import Header from '$lib/widgets/header.svelte';
  import '../app.css';
</script>

<svelte:head>
  <title>Odroe: Create user interfaces from Setup-widget</title>
  <meta
    name="description"
    content="A declarative, efficient, and flexible Flutter UI framework for building user interfaces."
  />
</svelte:head>

<Header />

<slot />
